# Cadastro de Documento

Cadastro de um documento que se relaciona com um endereço e um processo principal.

```
{
"tipo": "requerimento",
"numero" "12/2015"
"sei": "123456",
"recebimento": 12/05/2015
"distribuição" 12/05/2015"
  "endereco":{
    logradouro: "Rua das Acácias n..."
    "cep": "72130-565",
  },
"processo":{
    "numero": "197.555.666/2015",
    "apensos": [
    {"processo": "197.444.6666/2012"},
    ],
    "usuario": "Carlos ..."
  }
}

```

tabela processo
id
proc_id 
pro_numero
proc_fk
   relacionamento com outros processos 

   regras 
     1. não pode anexar o proprio id, um processo não anexa a si mesmo. 
     2. se um processo é anexado ele não anexa mais

tabela tipo documento 
1. Requerimento 
2. Parecer 
...
tabela endereço 
1. logradouro
   ...
tabela usuário
1. nome
2. cpf
   ...


[json-schema example](https://codesandbox.io/s/github/Ali-jneidi/json_schema_form/tree/main/?file=/src/index.js:1902-1910)


[react-icons](https://react-icons.github.io/react-icons/icons?name=fa)