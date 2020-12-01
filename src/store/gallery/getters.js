export function productList(state, getters, rootState, rootGetters) {
  let ret = [];

  if (state.products && state.products.length > 0) {
    state.products.map(item => {
      let img = item.images
        ? item.images.find(img => img.imageType == "gallery")
        : null;
      let target = rootGetters["auth/isReseller"] ? "reseller" : "all";

      let product = {
        name: item.name,
        seoname: item.seoname,
        options: item.options,
        baseprice: item.basePrice || "0",
        discount: item.discount
          ? item.discount.filter(
              el => el.target == target || el.target == "all"
            )
          : [],
        image: img ? img.image : ""
      };
      // Use largest discount
      product.discount.sort((a, b) => {
        return b.percent - a.percent;
      });
      ret.push(product);
    });
  }
  return ret;
}

export function searchResults(state, getters, rootState, rootGetters) {
  let ret = [];

  if (state.searchRes && state.searchRes.length > 0) {
    state.searchRes.map(item => {
      let img = item.images
        ? item.images.find(img => img.imageType == "gallery")
        : null;
      let target = rootGetters["auth/isReseller"] ? "reseller" : "all";

      let product = {
        name: item.name,
        seoname: item.seoname,
        options: item.options,
        baseprice: item.basePrice || "0",
        discount: item.discount
          ? item.discount.filter(
              el => el.target == target || el.target == "all"
            )
          : [],
        image: img ? img.image : ""
      };
      // Use largest discount
      product.discount.sort((a, b) => {
        return b.percent - a.percent;
      });
      ret.push(product);
    });
  }
  return ret;
}

export function categoryList(state) {
  return state.categories.map(item => {
    item.path = item.name.toLowerCase();
    return item;
  });
}
