/** Alertas opcionais. */

function sendHighPriorityAlert(record) {
  if (!SETTINGS.EMAIL_ALERTS_ENABLED) return;
  if (String(record.prioridade || '').toLowerCase() !== SETTINGS.ALERT_PRIORITY.toLowerCase()) return;

  const recipient = SETTINGS.ALERT_RECIPIENT;
  if (!recipient) {
    Logger.log('Alerta não enviado: ALERT_RECIPIENT não configurado.');
    return;
  }

  MailApp.sendEmail({
    to: recipient,
    subject: '[Automação] Registro de alta prioridade',
    htmlBody:
      '<p>Um registro de alta prioridade foi identificado.</p>' +
      '<pre>' + JSON.stringify(record, null, 2) + '</pre>',
  });
}
