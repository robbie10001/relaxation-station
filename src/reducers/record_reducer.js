const defaultState = {
  token: sessionStorage.getItem("token")
}; 

export default (state = defaultState, action) => {
  switch(action.type) {
    case "AUTH_TOKEN":
      return {...state, token: action.payload} // Override the token property.
    default:
      return state;
  }
}

// Probably override all this shit, as this is the auth reducer.