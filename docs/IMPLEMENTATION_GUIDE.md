# Guia de Implementação

## 1. Criar a planilha

Crie uma planilha Google Sheets com uma aba chamada `Respostas`.

Campos demonstrativos:

- id
- categoria
- status
- prioridade

## 2. Criar o formulário

Crie um Google Form com perguntas equivalentes e vincule-o à planilha.

## 3. Adicionar Apps Script

No Sheets, abra `Extensões → Apps Script` e copie os arquivos da pasta `appsscript/`.

## 4. Autorizar

Execute `processRecords` uma vez e conclua a autorização.

## 5. Criar gatilho

Execute `createFormSubmitTrigger()`.

## 6. Testar

1. envie uma resposta de teste;
2. confira `Respostas`;
3. confira `Processado`;
4. confira `Dashboard`.

Use somente dados fictícios no portfólio público.
