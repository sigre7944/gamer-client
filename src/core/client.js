import fetch from 'isomorphic-fetch'

const responseJson = (response) => {
  if (response.status >= 400) {
    throw new Error('Bad response from server')
  }

  return response.json()
}

export function getHappinesses () {
  return fetch('/api/happiness')
    .then(responseJson)
}

export function postHappiness (happinessRequest) {
  return fetch('/api/happiness', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(happinessRequest),
  })
    .then(responseJson)
}
