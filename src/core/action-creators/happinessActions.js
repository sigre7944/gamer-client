import * as client from '../client'

export function createHappiness (happinessRequest) {
  return (dispatch) => {
    client.postHappiness(happinessRequest)
      .then(() => {
        dispatch(fetchHappinesses())
      })
  }
}

export function fetchHappinesses () {
  return (dispatch) => {
    client.getHappinesses()
      .then(response => dispatch(happinessesFetchSuccess(response)))
  }
}

export function happinessesFetchSuccess (happinesses) {
  return {
    type: 'happinesses-fetch-success',
    happinesses
  }
}
