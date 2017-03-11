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
          .addItem('Setup', 'setupOptions'))
      .addToUi();
}

function menuItem1() {
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
     .alert('You clicked the first menu item!');
}

function newLogBook() {
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  sheet.appendRow(['Date','Time','Contact']);
  //var newSheet = SpreadsheetApp.create(date + " Log Book");
 // SpreadsheetApp.open(date + " Log Book");
}
function newLogEntry() {
sheet.appendRow(['Date','Time','Contact']);
}
function setupOptions() {
  var ui = SpreadsheetApp.getUi(); // Same variations.

  var result = ui.prompt(
      'Let\'s get to know each other!',
      'Please enter your name:',
      ui.ButtonSet.OK_CANCEL);

  // Process the user's response.
  var button = result.getSelectedButton();
  var text = result.getResponseText();
  if (button == ui.Button.OK) {
    // User clicked "OK".
    ui.alert('Your name is ' + text + '.');
  } else if (button == ui.Button.CANCEL) {
    // User clicked "Cancel".
    ui.alert('I didn\'t get your name.');
  } else if (button == ui.Button.CLOSE) {
    // User clicked X in the title bar.
    ui.alert('You closed the dialog.');
  }
}

  
  

