/**
 * doGet() function to add data to a spreadsheet.
 *
 * Spreadsheet data is provided as a querystring, e.g. ?col1=1&col2='pizza'
 *
 * @param {event} e Event passed to doGet, with querystring
 * @returns {String/html} Html to be served
 *
 * Test URLs (adjust ID as needed):
 *   https://script.google.com/macros/s/--DEV-SCRIPT-ID--/dev?col1=1&col2='pizza'
 *   https://script.google.com/macros/s/--PUB-SCRIPT-ID--/exec?col1=1&col2='pizza'
 */

function doGet(request) {  
  Logger.log( JSON.stringify(request) );  // view parameters

  var result = 'OK'; // assume success
  var adminEmail = request.parameters && request.parameters.adminEmail;
  var rowData = [];
  var id = request.parameters && request.parameters.spreadsheetId; // Spreadsheet id for responses
  var contactName = request.parameter && request.parameters.contactName;
  var sheet;
  var newRow;
  var requiredFields = ['adminEmail', 'spreadsheetId','contactName','fullName','email','subject','message'];
  var invalid = false;
  
  for (var i = 0; i < requiredFields.length; i++) {
    if (!request.parameters[requiredFields[i]]) {
      invalid = requiredFields[i];
      break;
    }
  }
  
  if (invalid) {
    result = "Error: Missing or invalid" + invalid;
  } else {
    sheet = SpreadsheetApp.openById(id).getActiveSheet();
    newRow = sheet.getLastRow() + 1;
    rowData[0] = new Date(); // Timestamp
    rowData[1] = stripQuotes(request.parameters.fullName);
    rowData[2] = stripQuotes(request.parameters.email);
    rowData[3] = stripQuotes(request.parameters.subject);
    rowData[4] = stripQuotes(request.parameters.message);
    Logger.log(JSON.stringify(rowData));

    // Write new row to spreadsheet
    var newRange = sheet.getRange(newRow, 1, 1, rowData.length);
    newRange.setValues([rowData]);

  // Notify user that response was received
    MailApp.sendEmail(request.parameters.email,
                    "Thanks for contacting us!",
                    "Thanks for emailing us, " + request.parameters.fullName + ". We'll respond to your email as soon as we can.",
                      {name: contactName, replyTo: adminEmail});
  
  // Notify admin of new contact
      MailApp.sendEmail(adminEmail,
                    rowData[3],
                        "New question submitted to " + contactName + " contact form at " + rowData[0] + ":\n\n" + 
                        "Full Name: " + rowData[1] + "\n\n" +
                        "Email: " + rowData[2] + "\n\n" + 
                        "Subject: " + rowData[3] + "\n\n" +
                        "Message: " + rowData[4] + "\n\n",
                        {name: rowData[1], replyTo: rowData[2]});
  
  }
  
  // Notify that we're good
  return ContentService.createTextOutput(
    request.parameters.callback + '(' + JSON.stringify(result) + ')')
    .setMimeType(ContentService.MimeType.JAVASCRIPT);
  
}

/**
 * Remove leading and trailing single or double quotes
 */
function stripQuotes( value ) {
  if (value) return value.toString().replace(/^["']|['"]$/g, "");
}