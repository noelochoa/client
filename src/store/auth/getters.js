export function getCustomerType(state) {
  return state.user ? state.user.type : false;
}

export function getXSRFToken(state) {
  return state.xsrf;
}

export function isAuthenticated(state) {
  return state.authenticated;
}
