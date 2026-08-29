/**
 * Automação demonstrativa para Google Sheets.
 * Dados fictícios: não utilizar com informações confidenciais sem controles adicionais.
 */

const CONFIG = {
  SOURCE_SHEET: 'Respostas',
  PROCESSED_SHEET: 'Processado',
  REPORT_SHEET: 'Dashboard',
};

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Automação')
    .addItem('Processar registros', 'processRecords')
    .addItem('Atualizar indicadores', 'updateDashboard')
    .addToUi();
}

function processRecords() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const source = spreadsheet.getSheetByName(CONFIG.SOURCE_SHEET);
  if (!source) throw new Error(`Aba não encontrada: ${CONFIG.SOURCE_SHEET}`);

  const values = source.getDataRange().getValues();
  if (values.length < 2) return;

  const headers = values[0];
  const rows = values.slice(1);
  const processed = rows.map(row => normalizeRecord(row, headers));

  let target = spreadsheet.getSheetByName(CONFIG.PROCESSED_SHEET);
  if (!target) target = spreadsheet.insertSheet(CONFIG.PROCESSED_SHEET);
  target.clearContents();

  const outputHeaders = [...headers, 'categoria_risco', 'pendencia'];
  target.getRange(1, 1, 1, outputHeaders.length).setValues([outputHeaders]);
  target.getRange(2, 1, processed.length, outputHeaders.length).setValues(processed);

  updateDashboard();
}

function normalizeRecord(row, headers) {
  const record = Object.fromEntries(headers.map((header, index) => [header, row[index]]));
  const pending = String(record.status || '').toLowerCase() !== 'concluído';
  const highRisk = String(record.prioridade || '').toLowerCase() === 'alta';
  const risk = highRisk ? 'Alto' : pending ? 'Médio' : 'Baixo';
  return [...row, risk, pending ? 'Sim' : 'Não'];
}

function updateDashboard() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const source = spreadsheet.getSheetByName(CONFIG.PROCESSED_SHEET);
  if (!source || source.getLastRow() < 2) return;

  const data = source.getDataRange().getValues();
  const headers = data[0];
  const rows = data.slice(1);
  const statusIndex = headers.indexOf('status');
  const riskIndex = headers.indexOf('categoria_risco');

  const statusCount = countValues(rows, statusIndex);
  const riskCount = countValues(rows, riskIndex);

  let dashboard = spreadsheet.getSheetByName(CONFIG.REPORT_SHEET);
  if (!dashboard) dashboard = spreadsheet.insertSheet(CONFIG.REPORT_SHEET);
  dashboard.clearContents();

  const output = [
    ['Indicador', 'Valor'],
    ['Total de registros', rows.length],
    ['Concluídos', statusCount['Concluído'] || 0],
    ['Pendentes', rows.length - (statusCount['Concluído'] || 0)],
    ['Risco Alto', riskCount['Alto'] || 0],
    ['Risco Médio', riskCount['Médio'] || 0],
    ['Risco Baixo', riskCount['Baixo'] || 0],
  ];

  dashboard.getRange(1, 1, output.length, 2).setValues(output);
}

function countValues(rows, columnIndex) {
  return rows.reduce((counter, row) => {
    const value = row[columnIndex] || 'Sem valor';
    counter[value] = (counter[value] || 0) + 1;
    return counter;
  }, {});
}
