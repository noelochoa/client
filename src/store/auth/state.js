export function getInitialState() {
  return {
    authenticated: false,
    user: null,
    xsrf: ""
  };
}

export default function() {
  return getInitialState();
}
