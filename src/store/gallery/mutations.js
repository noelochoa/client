export function SET_PRODUCTS(state, arr) {
  state.products = arr.slice();
}

export function SET_SEARCH_RESULTS(state, arr) {
  state.searchRes = arr.slice();
}

export function SET_CATEGORIES(state, arr) {
  state.categories = arr.slice();
}

export function SET_LASTSORT(state, sort) {
  state.lastSort = sort;
}

export function PUSH_PRODUCTS(state, arr) {
  state.products = state.products.concat(arr.slice());
}
