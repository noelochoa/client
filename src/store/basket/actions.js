export function setXSRFToken({ commit }, xsrf) {
  commit("SET_XSRF_CART", xsrf);
}

export function resetCart({ commit }) {
  commit("RESET_CART");
}

export async function addToCart({ commit }, { product }) {
  let resp;
  try {
    resp = await this.$axios.post("/api/basket", {
      ...product
    });
    if (resp) {
      if (resp.data.xsrf) commit("SET_XSRF_CART", resp.data.xsrf);
      if (resp.data.count) commit("SET_CART_COUNT", resp.data.count);
    }
    return true;
  } catch (err) {
    return Promise.reject(
      err.response ? err.response.data.error : "Unexpected error has occurred."
    );
  }
}

export async function updateCart({ commit }, { product }) {
  let resp;
  try {
    resp = await this.$axios.patch("/api/basket", {
      ...product
    });
    if (resp) {
      if (resp.data.xsrf) commit("SET_XSRF_CART", resp.data.xsrf);
      if (resp.data.count || resp.data.count == 0)
        commit("SET_CART_COUNT", resp.data.count);
    }
    return true;
  } catch (err) {
    if (err.response.status == 404) {
      commit("RESET_CART");
    }
    return Promise.reject(
      err.response ? err.response.data.error : "Unexpected error has occurred."
    );
  }
}

export async function fetchCartDetails({ commit }) {
  let resp;
  try {
    resp = await this.$axios.get("/api/basket");
    if (resp && resp.data.basket) {
      if (resp.data.xsrf) commit("SET_XSRF_CART", resp.data.xsrf);
      if (resp.data.count || resp.data.count == 0)
        commit("SET_CART_COUNT", resp.data.count);
      return resp.data.basket;
    } else {
      commit("SET_CART_COUNT", 0);
    }
    return null;
  } catch (err) {
    if (err.response.status == 404) {
      commit("RESET_CART");
    }
    return Promise.reject(
      err.response ? err.response.data.error : "Unexpected error has occurred."
    );
  }
}
