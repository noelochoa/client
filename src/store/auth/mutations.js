import { getInitialState } from "./state";

export function SET_BOOL_AUTH(state, bool) {
  state.authenticated = bool;
}

export function SET_USER_AUTH(state, user) {
  state.user = user;
}

export function SET_XSRF_AUTH(state, xsrf) {
  state.xsrf = xsrf;
}

export function RESET_AUTH(state) {
  Object.assign(state, getInitialState());
}
