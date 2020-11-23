export function related(state) {
  let ret = [];

  if (state.related && state.related.length > 0) {
    state.related.map(item => {
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

export function product(state) {
  let ret = {
    id: state.product._id,
    name: state.product.name,
    seoname: state.product.seoname,
    category: state.product.category,
    description: state.product.description,
    details: state.product.details,
    options: state.product.options,
    minOrderQty: state.product.minOrderQuantity,
    baseprice: state.product.basePrice || "0",
    // TODO!!!
    discount: state.product.discount
      ? state.product.discount.filter(
          el => el.target == "all" || el.target == "reseller"
        )
      : [],
    images: state.product.images
  };

  return ret;
}

export function comments(state) {
  return state.comments;
}
