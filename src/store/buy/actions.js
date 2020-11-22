export async function getProductDetails({ commit }, { seoname }) {
  let resp;
  try {
    resp = await this.$axios.get(`/api/products/buy/${seoname}`);
    if (resp && resp.data) {
      commit("SET_PRODUCT", resp.data);
      if (resp.data.comments && resp.data.comments.length > 0)
        commit("SET_COMMENTS", resp.data.comments);
    }
    return true;
  } catch (err) {
    return Promise.reject(err);
  }
}

export async function findRelatedProducts({ commit }, { pID, query, limit }) {
  let resp;
  try {
    resp = await this.$axios.get(`/api/products/related/${pID}`, {
      params: {
        q: query,
        l: limit
      }
    });
    if (resp && resp.data) {
      if (resp.data.length > 0) {
        commit("SET_RELATED", resp.data);
      }
    }
    return true;
  } catch (err) {
    return Promise.reject(err);
  }
}
