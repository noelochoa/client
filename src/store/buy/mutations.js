export function SET_PRODUCT(state, product) {
  state.product = { ...product };
}

export function SET_RELATED(state, arr) {
  state.related = arr.slice();
}

export function SET_COMMENTS(state, arr) {
  state.comments = arr.slice();
}

export function UNSHIFT_COMMENT(state, comment) {
  if (comment) state.comments.unshift(comment);
}
