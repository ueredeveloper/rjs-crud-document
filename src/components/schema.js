export const schema = {
  "title": "Formulário de Cadastro de Documentos",
  "description": "Um simples exemplo",
  "type": "object",
  "required": [
    "doc_tipo",
    "doc_processo"
  ],
  "properties": {
    "doc_tipo": {
      "type": "number",
      "title": "Tipo de Documento",
      "enum": [
        "Requerimento",
        "Ofício",
        "Parecer"
      ],
      "default": "Requerimento"
    },
    "doc_processo": {
      "type": "string",
      "title": "Processo",
      "default": "197.123.456/2016"
    },
    "doc_sei": {
      "type": "string",
      "title": "Nº Documento SEI",
      "default": "7777888999"
    },
    "doc_numero": {
      "type": "string",
      "title": "Nº Documento",
      "default": "65/2015"
    }
  }
}