export function getFeatured(state) {
  let ret = [];

  if (state.featured && state.featured.length > 0) {
    state.featured.map(item => {
      let banner = item.images.find(img => img.imageType == "banner");
      ret.push({
        name: item.name,
        seoname: item.seoname,
        description: item.description,
        banner: banner ? banner.image : ""
      });
    });
  }

  return ret;
}

export function getNewItems(state, getters, rootState, rootGetters) {
  let ret = [];

  if (state.newItems && state.newItems.length > 0) {
    state.newItems.forEach(item => {
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
