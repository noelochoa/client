export function getXSRFToken(state) {
  return state.basket_xsrf;
}

export function hasSession(state) {
  return !!state.basket_xsrf;
}

export function itemsCount(state) {
  return state.basket_count;
}
