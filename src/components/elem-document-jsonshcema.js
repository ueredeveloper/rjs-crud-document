import React, { useEffect } from 'react';
import Form from "react-jsonschema-form";
import { saveDocument } from "../services";

export function ElemDocJsonSchema() {

  const [formData, setFormData] = React.useState(null);

  const schema = {
    "title": "Tipo de Documento",
    "description": "Se é Requerimento, Ofício, ...",
    "type": "object",
    "properties": {
      "doc_td_fk": {
        "title": "Tipo de Documento",
        "type": "object",
        "properties": {
          "td_id": {
            "title": "Tipo",
            "type": "string",
            "oneOf": [
              {
                "type": "string",
                "enum": [
                  "1"
                ],
                "title": "Requerimento"
              },
              {
                "type": "string",
                "enum": [
                  "2"
                ],
                "title": "Ofício"
              },
              {
                "type": "string",
                "enum": [
                  "3"
                ],
                "title": "Despacho"
              }
            ]

          }
        }
      },
      "doc_processo": {
        "type": "string",
        "title": "Processo",
        "default": "123"
      },
      "doc_numeracao_sei": {
        "type": "string",
        "title": "Nº Documento SEI",
        "default": "123"
      },
      "doc_numeracao": {
        "type": "string",
        "title": "Nº Documento",
        "default": "123"
      }
    }
  }

  function onSubmit() {
    saveDocument(formData)
  }

  useEffect(() => {
    console.log(formData)
  }, [formData])
  return (
    <Form
      schema={schema}
      formData={formData}
      onChange={(e) => setFormData(e.formData)}
      onSubmit={onSubmit}
    />
  );
}