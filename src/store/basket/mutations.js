import { getInitialState } from "./state";

export function SET_XSRF_CART(state, xsrf) {
  state.basket_xsrf = xsrf;
}

export function SET_CART_COUNT(state, count) {
  state.basket_count = count;
}

export function RESET_CART(state) {
  Object.assign(state, getInitialState());
}
