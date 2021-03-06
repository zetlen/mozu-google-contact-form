# Mozu Google App Script Contact Form Example

This is an example widget that provides a contact form as a widget to be dragged and dropped into a Mozu SiteBuilder page. It connects to a Google Spreadsheet and requires a Google Apps account with privileges to that spreadsheet.

**Note: This widget example is not officially supported by Mozu. It is an example implementation.**

## Instructions

0. Login with or create a Google Drive account. **It is important that this be an actual Google Account and not a Google Apps account managed for your domain. They look similar, but if you're in a Google Apps account, you will not be able to expose the script for anonymous use.

0. While logged in to that Google Drive account, go to the [Google Apps Script start page](http://www.google.com/script/start/).

0. Click "Start Scripting". When the dialog for project type comes up, click "Blank Project".

0. Paste the contents of `googlecontactformscript.js` from this directory into the code window.

0. Click the Save icon and name your project something descriptive, like "Website Contact Form".

0. In the **Publish** menu, click "Deploy as web app..." or click the cloud icon in the toolbar.

0. In the "Project version" text box, add a simple comment like "initial version" and click **Save New Version**. 

0. In the "Execute the app as" dropdown, choose "me". In the "Who has access to the app" dropdown, choose "Anyone (even anonymous users).

0. Publish the app. Copy the URL it gives you; this is your form URL and you'll need it later.

0. You now need to authorize your new script with your own account. This is a non-intuitive process. In the **Run** menu, choose the **doGet** function. This will be the first time your script executes, and so a dialog box will appear asking you to authorize the script to run under your own account. Click **Approve**. (The script will run and fail because no arguments were sent to it, but that doesn't matter.)

0. Go to your Google Drive homepage. Click **Create > Spreadsheet**.

0. In the top row of your spreadsheet, name four columns:
    A1: Date
    B1: Full Name
    C1: Email Address
    D1: Subject
    E1: Message

0. While your spreadsheet is open, go to your browser address bar and copy the value of the `key` parameter in the URL query string. This is your spreadsheet ID and you'll need it later.

0. Install the contents of the `theme-patch` subdirectory from this directory into your theme. This means adding or merging the contents of its theme.json (a single widget) into your theme's theme.json file, and copying all other files to the relevant directories.

0. On a SiteBuilder page, create a new instance of your new Contact Form widget. Paste your chosen admin name and contact email, as well as the form URL and spreadsheet ID you saved, into the appropriate fields.

Your contact form should now be live!