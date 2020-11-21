export function productList(state) {
  let ret = [];

  if (state.products && state.products.length > 0) {
    state.products.map(item => {
      let img = item.images
        ? item.images.find(img => img.imageType == "gallery")
        : null;
      ret.push({
        name: item.name,
        seoname: item.seoname,
        options: item.options,
        baseprice: item.basePrice || "0",
        // TODO!!!
        discount: item.discount
          ? item.discount.filter(
              el => el.target == "all" || el.target == "reseller"
            )
          : [],
        image: img ? img.image : ""
      });
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
