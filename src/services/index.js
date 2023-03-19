const url = 'https://j-sb-drainage.ueredeveloper.repl.co'
/**
 * Save document
 */
export async function saveDocument(document) {
    fetch(`${url}/document`, {
        method: 'POST',
        headers: {
            Accept: 'application/JSON',
            'Content-Type': 'application/JSON'
        },
        body: JSON.stringify(document)
    })
        .then(response => { return response.json() })
        .then(json => {
            console.log(json)
        })
}