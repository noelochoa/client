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

export function getNewItems(state) {
  let ret = [];

  if (state.newItems && state.newItems.length > 0) {
    state.newItems.map(item => {
      let img = item.images.find(img => img.imageType == "gallery");
      ret.push({
        name: item.name,
        seoname: item.seoname,
        options: item.options,
        baseprice: item.basePrice || "0",
        discount: item.discount.filter(
          el => el.target == "all" || el.target == "reseller"
        ),
        image: img ? img.image : ""
      });
    });
  }

  return ret;
}
