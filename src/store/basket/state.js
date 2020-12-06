export function getInitialState() {
  return {
    basket_count: 0,
    basket_xsrf: ""
  };
}

export default function() {
  return getInitialState();
}
