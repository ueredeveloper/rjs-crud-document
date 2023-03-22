
import React, { useState, useEffect } from 'react';
import { Box, Button, FormControl, InputLabel, TextField, MenuItem } from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { saveDocument } from "../services";
import { schema } from './schema';

export default function ElemDocument() {

  const [document, setDocument] = useState({
    doc_number: schema.properties.doc_numero.default,
    doc_process: schema.properties.doc_processo.default,
    doc_sei: schema.properties.doc_sei.default,
    doc_type: {
      enum: schema.properties.doc_tipo.enum,
      title: "Requerimento"
    }
  });

  /* deve haver uma tabela processo e uma tablea de tipos de atos */

  useEffect(() => {
    //console.log(document)
  }, [document])



  function onChange(e) {


    let { name, value } = e.target



    if (name === "doc_type") {

      setDocument(prev => {
        return {
          ...prev,
          doc_type: {

            ...prev.doc_type,
            title: value
          }

        }
      })
    }
    else {
      setDocument(prev => {
        return {
          ...prev,
          [name]: value
        }
      })
    }
  }

  function onclick() {
    saveDocument(document)
  }
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">{schema.properties.doc_tipo.title}</InputLabel>
        {console.log(document.doc_type.enum)}
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          name="doc_type"
          value={document.doc_type.title}
          onChange={onChange}

        >
          {console.log(document.doc_type.enum)}
          {
            document.doc_type.enum.map((tp, i) => (
              <MenuItem key={"_" + tp} value={tp}>{tp}</MenuItem>
            ))
          }

        </Select>

        <TextField
          name="doc_process"
          value={document.doc_process}
          onChange={(e) => { onChange(e) }}
          label="Processo"
          variant="standard"
        />
        <TextField
          name="doc_number"
          value={document.doc_number}
          onChange={(e) => { onChange(e) }}
          label="Número"
          variant="standard"
        />
        <TextField
          name="doc_sei"
          value={document.doc_sei}
          onChange={(e) => { onChange(e) }}
          label="Documento SEI"
          variant="standard" />
        {/** save */}
        <Button onClick={() => { onclick() }} variant="contained">Salvar</Button>
      </FormControl>

      <div><pre>{JSON.stringify(document, null, 2)}</pre></div>
    </Box>
  )
}