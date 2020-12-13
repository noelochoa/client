export function related(state, getters, rootState, rootGetters) {
  let ret = [];

  if (state.related && state.related.length > 0) {
    state.related.map(item => {
      let img = item.images
        ? item.images.find(img => img.imageType == "gallery")
        : null;
      let target = rootGetters["auth/isReseller"] ? "reseller" : "all";
      let product = {
        name: item.name,
        seoname: item.seoname,
        options: item.options,
        baseprice: item.fprice || "0",
        discount: item.discount
          ? item.discount.filter(
              el => el.target == target || el.target == "all"
            )
          : [],
        image: img ? img.image : ""
      };
      // Use highest discount
      product.discount.sort((a, b) => {
        return b.percent - a.percent;
      });
      ret.push(product);
    });
  }
  return ret;
}

export function product(state, getters, rootState, rootGetters) {
  let target = rootGetters["auth/isReseller"] ? "reseller" : "all";
  let ret = {
    id: state.product._id,
    name: state.product.name,
    seoname: state.product.seoname,
    category: state.product.category,
    description: state.product.description,
    details: state.product.details,
    options: state.product.options,
    minOrderQty: state.product.minOrderQuantity,
    sold: state.product.sold,
    baseprice: state.product.basePrice || "0",
    discount: state.product.discount
      ? state.product.discount.filter(
          el => el.target == target || el.target == "all"
        )
      : [],
    images: state.product.images
  };
  // Use largest discount
  ret.discount.sort((a, b) => {
    return b.percent - a.percent;
  });

  return ret;
}

export function comments(state) {
  return state.comments;
}
