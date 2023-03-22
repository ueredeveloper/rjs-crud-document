const url = 'https://j-sb-drainage.ueredeveloper.repl.co'
/**
 * Save document
 */
export async function saveDocument(documento) {

  fetch(`${url}/documento`, {
    method: 'POST',
    headers: {
      Accept: 'application/JSON',
      'Content-Type': 'application/JSON'
    },
    body: JSON.stringify(documento)
  })
    .then(response => { return response.json() })
    .then(json => {
      console.log(json)
    })
}