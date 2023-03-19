import Form from "react-jsonschema-form";

export function ElemDocJsonSchema() {

  const onSubmit = ({ formData }) => alert("Data submitted: ", formData);



  const schema = {
    "title": "Formulário de Cadastro de Documentos",
    "description": "Um simples exemplo",
    "type": "object",
    "required": [
      "doc_tipo",
      "doc_processo"
    ],
    "properties": {
      "doc_tipo": {
        "type": "string",
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
        "title": "Processo"
      },
      "doc_sei": {
        "type": "string",
        "title": "Nº Documento SEI"
      },
      "doc_numero": {
        "type": "string",
        "title": "Nº Documento"
      }

    }
  }
  return <Form schema={schema} />
}