
function getDefaultState () {
  return {
    nothingHereYet: true
  }
}

export default function gameReducer (state = getDefaultState(), action) {
  switch (action.type) {
    default:
      return state
  }
}
