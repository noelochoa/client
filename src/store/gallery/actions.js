const sortingFields = {
  "best-selling": "sold",
  "title-asc": "name",
  "title-desc": "name",
  "date-desc": "created",
  "date-asc": "created",
  "price-desc": "basePrice",
  "price-asc": "basePrice"
};

export function pushProducts({ commit }, arr) {
  let last = arr.slice(-1).pop();
  commit("PUSH_PRODUCTS", arr);
  commit("SET_LASTSORT", last);
}

export async function getGalleryItems({ commit }, { category, sort }) {
  let resp;
  try {
    let cat = category ? category.toLowerCase() : "all";
    resp = await Promise.all([
      this.$axios.get(`/api/products/${cat}`, {
        params: {
          sort
        }
      }),
      this.$axios.get("api/categories")
    ]);
    if (resp[0] || resp[1]) {
      if (resp[1].data) {
        commit("SET_CATEGORIES", resp[1].data);
      }
      if (resp[0].data && resp[0].data.count > 0) {
        let last = resp[0].data.products.slice(-1).pop();
        commit("SET_PRODUCTS", resp[0].data.products);
        commit("SET_LASTSORT", last);
      }
    }
    return true;
  } catch (err) {
    this.$router.push("/error500");
    return Promise.resolve(err);
  }
}

export async function getProducts({ commit }, { category, sort }) {
  let resp;
  try {
    let cat = category ? category.toLowerCase() : "all";
    resp = await this.$axios.get(`/api/products/${cat}`, {
      params: {
        sort
      }
    });
    if (resp && resp.data) {
      if (resp.data.count > 0) {
        let last = resp.data.products.slice(-1).pop();
        commit("SET_PRODUCTS", resp.data.products);
        commit("SET_LASTSORT", last);
      }
    }
    return true;
  } catch (err) {
    return Promise.resolve(err);
  }
}

export async function getNextProducts({ state }, { category, sort }) {
  let resp;
  try {
    let sortVal = null;
    let cat = category ? category.toLowerCase() : "all";
    let last = state.lastSort;
    if (sort && last) {
      sortVal = last[sortingFields[sort]];
    } else if (last) {
      sort = "date-desc";
      sortVal = last[sortingFields[sort]];
    }
    resp = await this.$axios.get(`/api/products/${cat}`, {
      params: {
        sort,
        last: sortVal,
        id: last._id
      }
    });
    if (resp && resp.data) {
      return resp.data.products;
    }
    return [];
  } catch (err) {
    return Promise.resolve(err);
  }
}
