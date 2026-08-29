# Dashboard Demonstrativo

## Indicadores principais

| Indicador | Objetivo |
|---|---|
| Total de registros | Volume processado |
| Concluídos | Registros finalizados |
| Pendentes | Itens que exigem acompanhamento |
| Risco Alto | Priorização imediata |
| Risco Médio | Acompanhamento |
| Risco Baixo | Monitoramento |

## Layout sugerido

```text
┌────────────────────────────────────────────┐
│ GOOGLE WORKSPACE AUTOMATION                │
├──────────┬──────────┬──────────┬───────────┤
│ Total    │ Concluídos│Pendentes │Risco Alto│
├──────────┴──────────┴──────────┴───────────┤
│ Status por categoria                       │
│ ████████████                               │
├────────────────────────────────────────────┤
│ Distribuição de risco                      │
│ Alto / Médio / Baixo                       │
└────────────────────────────────────────────┘
```

O Apps Script atualiza automaticamente os indicadores básicos na aba `Dashboard`.
