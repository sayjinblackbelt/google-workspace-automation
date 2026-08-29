# Arquitetura

## Visão geral

O case demonstra uma automação simples de fluxo de registros utilizando ferramentas do Google Workspace.

```text
Google Forms
      ↓
Google Sheets
      ↓
Apps Script
      ↓
Validação
      ↓
Normalização
      ↓
Classificação
      ↓
Indicadores
      ↓
Relatório / Alertas
```

## Componentes

### Entrada
Google Forms representa a origem dos registros.

### Dados
Google Sheets funciona como camada simples de armazenamento e consulta.

### Automação
Google Apps Script executa processamento, validação e atualização de indicadores.

### Saída
A automação alimenta uma aba de processamento e uma aba de dashboard.

## Evolução

A solução pode posteriormente integrar APIs, Looker Studio, bancos de dados e IA.
