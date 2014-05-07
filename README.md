# Mozu Google App Script Contact Form Example

This is an example widget that provides a contact form as a widget to be dragged and dropped into a Mozu SiteBuilder page. It connects to a Google Spreadsheet and requires a Google Apps account with privileges to that spreadsheet.

**Note: This widget example is not officially supported by Mozu. It is an example implementation.**

## Instructions

1. Login with or create a Google Drive account.

2. While logged in to that Google Drive account, go to the [Google Apps Script start page](http://www.google.com/script/start/).

3. Click "Start Scripting". When the dialog for project type comes up, click "Blank Project".

4. Paste the contents of `googlecontactformscript.js` from this directory into the code window.

5. Click the Save icon and name your project something descriptive, like "Website Contact Form".

6. In the Google Docs Publish menu, click "Deploy as web app..." or click the cloud icon in the toolbar.

7. Publish version 1 of the app. Copy the URL it gives you; this is your form URL and you'll need it later.

8. Go to your Google Drive homepage. Click **Create > Spreadsheet**.

9. In the top row of your spreadsheet, name four columns:
    A1: Date
    B1: Full Name
    C1: Email Address
    D1: Subject
    E1: Message

10. While your spreadsheet is open, go to your browser address bar and copy the value of the `key` parameter in the URL query string. This is your spreadsheet ID and you'll need it later.

11. Install the contents of the `theme-patch` subdirectory from this directory into your theme. This means adding or merging the contents of its theme.json (a single widget) into your theme's theme.json file, and copying all other files to the relevant directories.

12. On a SiteBuilder page, create a new instance of your new Contact Form widget. Paste your chosen admin name and contact email, as well as the form URL and spreadsheet ID you saved, into the appropriate fields.

Your contact form should now be live!