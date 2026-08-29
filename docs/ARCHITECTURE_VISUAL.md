# Arquitetura Visual

```mermaid
flowchart TD
    A[Google Form] --> B[Google Sheets]
    B --> C{Gatilho}
    C --> D[Apps Script]
    D --> E[Validação]
    E --> F[Normalização]
    F --> G[Classificação]
    G --> H[Processado]
    H --> I[Dashboard]
    G --> J[Alertas Opcionais]
```

## Separação de responsabilidades

- `Code.gs`: processamento e indicadores;
- `validators.gs`: validação reutilizável;
- `config.gs`: parâmetros;
- `triggers.gs`: execução automática;
- `alerts.gs`: notificações opcionais.
