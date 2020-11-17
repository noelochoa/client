export function setFeatured({ commit }, arr) {
  commit("SET_FEATURED", arr);
}

export function setNewItems({ commit }, arr) {
  commit("SET_NEWITEMS", arr);
}

export function setPSA({ commit }, psa) {
  commit("SET_PSA", psa);
}

export async function getPSA({ commit }) {
  let resp;
  try {
    resp = await this.$axios.get("/api/psa");
    if (resp && resp.data) {
      commit("SET_PSA", resp.data);
    }
    return true;
  } catch (err) {
    return Promise.resolve(err);
  }
}

export async function getProducts({ commit }) {
  let resp;
  try {
    resp = await Promise.all([
      this.$axios.get("/api/products/featured"),
      this.$axios.get("/api/products/new")
    ]);
    if (resp && resp[0].data && resp[1].data) {
      commit("SET_FEATURED", resp[0].data);
      commit("SET_NEWITEMS", resp[1].data.products);
    }
    return true;
  } catch (err) {
    return Promise.resolve(err);
  }
}
