export function SET_FEATURED(state, arr) {
  state.featured = arr.slice();
}

export function SET_NEWITEMS(state, arr) {
  state.newItems = arr.slice();
}

export function SET_PSA(state, psa) {
  state.psa = psa;
}
