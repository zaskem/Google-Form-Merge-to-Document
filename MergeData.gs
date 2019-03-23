function processFormResponse() {
  // Set some defaults
  // The Team Drive ID in which the documents created will preside
  var driveID = 'YourTeamDriveIDGoesHereWithinTheQuotes'
  // A comma-delimited list of email addresses to receive the notice and PDF
  var recipients = 'fakeuser@domain.org, fakeuser@domain.com'
  // Switch to the active sheet
  var ss = SpreadsheetApp.getActive();
  // Show me the last row index (lastRow == the row index to reference)
  var lastRow = ss.getLastRow();
  //Logger.log(lastRow);
  
  // Show me the last row's data/values for columns 1-16:
  var data = ss.getSheetValues(lastRow, 1, 1, 16);
  //Logger.log(data);
  
  // Show me the contents of the cells in question:
  var instructor = data[0][1];
  var facilitator = data[0][2];
  var course = data[0][3];
  var date = data[0][4];
  var objective = data[0][5];
  var content = data[0][6];
  var attendance = data[0][7];
  var notes = data[0][8]; 
   
  // Create some string values for the actual document appending:
  var instructorText = instructor;
  var facilitatorText = facilitator;
  var courseText = course;
  var dateText = Utilities.formatDate(date, "CST", "EEEE, MMMM d, yyyy");
  var objectiveText = objective;
  var contentText = content;
  var attendanceText = attendance;
  var notesText = notes;
     
  // Write ye the document!
  createDocument(instructorText, facilitatorText, courseText, dateText, objectiveText, contentText, attendanceText, notesText, recipients, driveID);
}

function createDocument(instructorString, facilitatorString, courseString, dateString, objectiveString, contentString, attendanceString, notesString, recipients, teamDriveID) {
  // Create a document with a name == date of submission/processing
  var doc = DocumentApp.create(dateString);

  // Set basic body styles
  var body = doc.getBody();
  var style1 = {};
  style1[DocumentApp.Attribute.FONT_FAMILY] = 'Verdana';
  style1[DocumentApp.Attribute.FONT_SIZE] = 18;
  style1[DocumentApp.Attribute.BOLD] = true;
  var style2 = {};
  style2[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
  style2[DocumentApp.Attribute.FONT_SIZE] = 12;
  style2[DocumentApp.Attribute.BOLD] = false;
  var style3 = {};
  style3[DocumentApp.Attribute.FONT_FAMILY] = 'Verdana';
  style3[DocumentApp.Attribute.FONT_SIZE] = 12;
  style3[DocumentApp.Attribute.BOLD] = true;

  // Create title formatting
  var par1 = body.appendParagraph('Session Summary')
  par1.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
  par1.setAttributes(style1);
  
  // Build and append paragraphs for Form/Document sections
  var par2 = body.appendParagraph('Instructor:');
  par2.setAttributes(style3);
  var par3 = body.appendParagraph(instructorString);
  par3.setAttributes(style2);
  var par4 = body.appendParagraph('Facilitator:');
  par4.setAttributes(style3);
  var par5 = body.appendParagraph(facilitatorString);
  par5.setAttributes(style2);
  var par6 = body.appendParagraph('Course Section and Number:');
  par6.setAttributes(style3);
  var par7 = body.appendParagraph(courseString);
  par7.setAttributes(style2);
  var par8 = body.appendParagraph('Date of Session:');
  par8.setAttributes(style3);
  var par9 = body.appendParagraph(dateString);
  par9.setAttributes(style2);
  var par10 = body.appendParagraph('Objective:');
  par10.setAttributes(style3);
  var par11 = body.appendParagraph(objectiveString);
  par11.setAttributes(style2);
  var par12 = body.appendParagraph('Concepts and Active Learning Strategies:');
  par12.setAttributes(style3);
  var par13 = body.appendParagraph(contentString);
  par13.setAttributes(style2);
  var par14 = body.appendParagraph('Attendance:');
  par14.setAttributes(style3);
  var par15 = body.appendParagraph(attendanceString);
  par15.setAttributes(style2);
  var par16 = body.appendParagraph('Notes:');
  par16.setAttributes(style3);
  var par17 = body.appendParagraph(notesString);
  par17.setAttributes(style2);
  
  // Get the Google Document ID
  var docFile = DriveApp.getFileById(doc.getId());
  
  // Add/Move the document to folder/Team Drive, save, and close
  DriveApp.getFolderById(teamDriveID).addFile(docFile);
  doc.saveAndClose()

  // Send ye the document!
  MailApp.sendEmail(recipients, 'Notification Email: Session Summary', 'The Session Summary is attached.', {
    name: ' Session Summary',
    attachments: [docFile.getAs(MimeType.PDF)]
  });
}