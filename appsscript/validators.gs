/** Validações reutilizáveis. */

function validateRecord(record) {
  const required = ['id', 'categoria', 'status', 'prioridade'];
  const missing = required.filter(key => !String(record[key] || '').trim());

  return {
    valid: missing.length === 0,
    missing,
  };
}
