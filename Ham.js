  var today = new Date();
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];


function onOpen() {
  var ui = SpreadsheetApp.getUi();
  // Or DocumentApp or FormApp.
  ui.createMenu('Ham Logs')
      .addItem('New Entry', 'newLogEntry')
      .addSeparator()
      .addSubMenu(ui.createMenu('Options')
          .addItem('Create New Log Book', 'newLogBook')
          .addItem('Setup', 'test'))
      .addToUi();
}

function newLogBook() {
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  sheet.appendRow(['Date','Time','Contact']);
  //var newSheet = SpreadsheetApp.create(date + " Log Book");
 // SpreadsheetApp.open(date + " Log Book");
}
function test() {
//sheet.appendRow(['Date','Time','Contact']);
  newTopRow();
}
function newLogEntry() {
  var ui = SpreadsheetApp.getUi(); // Same variations.

  //Get Entries
  var dateOfContact = ui.prompt(
      'Date:',
      ui.ButtonSet.OK_CANCEL);
  var startTime = ui.prompt(
    'Start Time:',
      ui.ButtonSet.OK_CANCEL);
    var frequency = ui.prompt(
      'Frequency:',
      ui.ButtonSet.OK_CANCEL);
    var mode = ui.prompt(
      'mode:',
      ui.ButtonSet.OK_CANCEL);
    var power = ui.prompt(
      'Power:',
      ui.ButtonSet.OK_CANCEL);
    var station = ui.prompt(
      'Station Worked',
      ui.ButtonSet.OK_CANCEL);
    var reportSent = ui.prompt(
      'Report Sent',
      ui.ButtonSet.OK_CANCEL);
    var reportRecieved = ui.prompt(
      'Report Recieved',
      ui.ButtonSet.OK_CANCEL);
    var remarks = ui.prompt(
      'Remarks',
      ui.ButtonSet.OK_CANCEL);
   var endTime = ui.prompt(
      'End Time',
      ui.ButtonSet.OK_CANCEL);
  
  //Post Entries 
sheet.appendRow([dateOfContact.getResponseText(),
                 startTime.getResponseText(),
                 endTime.getResponseText(),
                 frequency.getResponseText(),
                 mode.getResponseText(),
                 power.getResponseText()
                 ,station.getResponseText(),
                 reportSent.getResponseText(),
                 reportRecieved.getResponseText(),
                 '',
                 '',
                 remarks.getResponseText()]);
}

function newTopRow() {
sheet.appendRow(['Date','Time Start UTC','Time End UTC','Frequency','Mode','Power','Station','Report Sent','Report Recieved','QSL Sent','QSL Recieved','Remarks']);
}
