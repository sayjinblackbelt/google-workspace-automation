/** Gatilhos da automação. */

function onFormSubmit(e) {
  try {
    processRecords();

    const row = e && e.range ? e.range.getRow() : null;
    if (row) {
      Logger.log('Nova resposta recebida na linha: ' + row);
    }
  } catch (error) {
    Logger.log('Erro no processamento automático: ' + error.message);
    throw error;
  }
}

function createFormSubmitTrigger() {
  const spreadsheet = SpreadsheetApp.getActive();

  const exists = ScriptApp.getProjectTriggers().some(
    trigger => trigger.getHandlerFunction() === 'onFormSubmit'
  );

  if (!exists) {
    ScriptApp.newTrigger('onFormSubmit')
      .forSpreadsheet(spreadsheet)
      .onFormSubmit()
      .create();
  }
}

function removeAutomationTriggers() {
  ScriptApp.getProjectTriggers().forEach(trigger => {
    if (trigger.getHandlerFunction() === 'onFormSubmit') {
      ScriptApp.deleteTrigger(trigger);
    }
  });
}
