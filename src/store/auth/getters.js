export function getXSRFToken(state) {
  return state.xsrf;
}

export function getCustomerType(state) {
  return state.user ? state.user.type : false;
}

export function getCustomerID(state) {
  return state.user ? state.user.id : null;
}

export function isAuthenticated(state) {
  return state.authenticated;
}

export function isVerified(state) {
  return state.user ? state.user.status.isVerified : false;
}

export function isReseller(state) {
  return state.user
    ? state.user.type === "reseller" && state.user.status.isResellerApproved
    : false;
}
