# How to Set Up and Use

## Create a new or select an appropriate Team Drive

Team Drive creation, selection, and management of users are out of scope for this instruction document. Whatever option you choose, you will need to note the Team Drive Folder ID, which can be done by way of observing the browser's address bar. For example, a root Team Drive folder ID will typically present as:
`https://drive.google.com/drive/folders/92nv98hnb1_A92k18vB`

A sub-folder ID within a Team Drive will typically present as:
`https://drive.google.com/drive/folders/10eb873ajnd81-UAV3981of-vb38RFB0a`

In either case, the folder ID you will need is the portion of the URL ___after__ `https://drive.google.com/drive/folders/`:

 `92nv98hnb1_A92k18vB` or `10eb873ajnd81-UAV3981of-vb38RFB0a` in these examples.

The above folder IDs are fabricated for example purposes.

## Create the [input] Google Form and response Google Sheet in the Team Drive

For this example, the Google Form you create should have the following fields, in order (note that Timestamp is added by default and does not need to be in your Google Form):

* Timestamp
* Instructor Name
* Facilitator Name
* Course and Section Number
* Date of session
* Objective
* Content
* Attendance
* Additional Notes

Once the form is configured properly, enable the response spreadsheet option to automatically create an appropriate Sheet.

## Add code to the Sheet
In the sheet, use the Tools menu to open up the `<> Script Editor`.

Delete the default code that may be present, such as:
``` javascript
function myFunction () {
}
```

Add the code (select all/copy/paste) from this repository's `MergeData.gs` file. Using the disk icon, save the code.

Edit or rename the project's name (in the header above the File...Help menus) as you see fit. You can also edit the individual script's file name if you feel so moved. Neither of the renaming steps are necessary.

## Customizing the code for your situation
Two variables in the source ___must be modified___ in order for it to run with success. These are in the first few lines of the script
``` javascript
  // Set some defaults
  // The Team Drive ID in which the documents created will preside
  var driveID = 'YourTeamDriveIDGoesHereWithinTheQuotes'
  // A comma-delimited list of email addresses to receive the notice and PDF
  var recipients = 'fakeuser@domain.org, fakeuser@domain.com'
```
You will replace the `driveID` and `recipients` variables with values for your situation.

`driveID` can be the root of your Team Drive or a "folder" in a Team Drive. See the information above for identifying the drive/folder ID.

`recipients` is a comma-delimited list of email address recipients. For a single recipient, simply use the email address with no comma separator.

Once these variables have been modified, click the disk icon to save the code.

## Creating Event Triggers
Event triggers are required to invoke the process. Without an event trigger, the code will not work.

To set the event triggers, click on the clock face in the toolbar above the code or use the Edit menu's option for `Current project's priggers`.

On the resulting page you will `+ Add Trigger` and use the following options:

* ...which function to run: `processFormResponse`
* ...which deployment should run: `Head`
* ...event source: `From spreadsheet`
* ...event type: `On form submit`
* ...notification settings: As you see fit (for testing, `Notify me immediately` is likely the best option)

Save the trigger, and you will be set!

### Important Nuance
There are times when, for unknown reasons, triggers won't trigger as expected. We've discovered that sometimes simply deleting and re-creating identical triggers solves the problem. Your mileage may vary, but feel free to modify triggers as best suited for your use case (or just to see how things work).

### Permissions
Depending on your setup, the first time a user/account attempts to configure this process, a warning dialog will present requesting “Authorization required.”

It is safe to click the “Review Permissions” and authorize the account. The permission granted allows your account to programmatically create documents and send email.

## Run A Test!
Now's your chance! If all is configured properly, by submitting a form response a formatted document should be created in the Team Drive folder identified, and an email with PDF attachment of the document created also sent to the recipient(s) identified.

#### Instructions verified and valid as of March 21, 2019. Future feature modifications from Google after this date may change the example behavior or setup steps without notice.