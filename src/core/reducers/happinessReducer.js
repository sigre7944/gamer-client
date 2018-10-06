function getDefaultState () {
  return {
    happinesses: []
  }
}

export default function happinessReducer (state = getDefaultState(), action) {
  switch (action.type) {
    case 'happinesses-fetch-success':
      return {
        ...state,
        happinesses: action.happinesses
      }
    default:
      return state
  }
}
