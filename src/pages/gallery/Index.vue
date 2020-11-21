<template>
  <q-page class="mainpage flex flex-start">
    <!-- NAV -->
    <div
      class="navigation"
      :class="{ 'opaque-nav': opaque }"
      @mouseover="opaque = true"
      @mouseleave="opaque = false"
    >
      <div>
        <ul class="left-nav">
          <li class="ls-sm">
            <router-link to="/" class="header-link hover-primary">
              HOME
            </router-link>
          </li>
          <li class="ls-sm">
            <router-link to="/products" class="header-link hover-primary">
              SHOP
            </router-link>
          </li>
        </ul>
      </div>
      <div>
        <ul class="right-nav">
          <li class="ls-sm">
            <router-link to="/account" class="header-link hover-primary">
              ACCOUNT
            </router-link>
          </li>
          <li class="ls-sm">
            <router-link to="/" class="header-link hover-primary">
              BASKET (0)
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <!-- FILTER DRAWER -->
    <q-drawer
      content-class="similar-orders bg-secondary"
      v-model="filter"
      side="right"
      overlay
      elevated
    >
      <div class="filter-drawer">
        <div class="filter-title q-pa-md">
          <span class="text-h6 ls-sm text-primary">
            FILTERS
          </span>
          <q-icon
            class="cursor-pointer"
            name="close"
            size="sm"
            @click="filter = !filter"
          />
        </div>
        <div class="filter-selection flex column">
          <div class="text-primary ls-sm">CATEGORY</div>
          <ul class="q-mt-md">
            <li>
              <router-link
                to="/products/all"
                class="hover-primary text-capitalize"
                :class="{ 'text-primary': $route.params.category == 'all' }"
              >
                All
              </router-link>
            </li>
            <li v-for="(category, cidx) in categoryList" :key="'cat-' + cidx">
              <router-link
                :to="'/products/' + category.path"
                class="hover-primary text-capitalize"
                :class="{
                  'text-primary': $route.params.category == category.path
                }"
              >
                {{ category.name }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </q-drawer>

    <!-- BANNER -->
    <div class="header-banner flex">
      <div
        class="img-wrapper"
        ref="img-wrapper"
        :style="
          categoryBG
            ? 'background-image:url(\'' +
              resolveAssetsUrl(`${categoryBG}`) +
              '\')'
            : ''
        "
      ></div>
      <div class="caption">
        <h4 class="text-accent ls-sm text-uppercase">{{ selectedCategory }}</h4>
      </div>
    </div>

    <!-- PRODUCTS -->
    <div class="content-main">
      <div class="nav-toolbar row no-wrap justify-end">
        <div class="nav-btn flex-center ls-sm text-grey-8 cursor-pointer">
          SORT <q-icon name="keyboard_arrow_down" size="sm" color="grey-8" />
          <q-menu fit content-class="bg-secondary text-grey-8" auto-close>
            <q-list style="min-width: 210px">
              <q-item
                class="sort-item ls-sm"
                :class="{
                  'text-primary': $route.query.sort == 'best-selling'
                }"
                clickable
                @click="onSort('best-selling')"
              >
                <q-item-section>BEST SELLING</q-item-section>
              </q-item>
              <q-item
                class="sort-item ls-sm"
                :class="{
                  'text-primary': $route.query.sort == 'title-asc'
                }"
                clickable
                @click="onSort('title-asc')"
              >
                <q-item-section>ALPHABETICALLY, A-Z</q-item-section>
              </q-item>
              <q-item
                class="sort-item ls-sm"
                :class="{
                  'text-primary': $route.query.sort == 'title-desc'
                }"
                clickable
                @click="onSort('title-desc')"
              >
                <q-item-section>ALPHABETICALLY, Z-A</q-item-section>
              </q-item>
              <q-item
                class="sort-item ls-sm"
                :class="{
                  'text-primary': $route.query.sort == 'date-desc'
                }"
                clickable
                @click="onSort('date-desc')"
              >
                <q-item-section>DATE, NEWEST FIRST</q-item-section>
              </q-item>
              <q-item
                class="sort-item ls-sm"
                :class="{
                  'text-primary': $route.query.sort == 'date-asc'
                }"
                clickable
                @click="onSort('date-asc')"
              >
                <q-item-section>DATE, OLDEST FIRST</q-item-section>
              </q-item>
              <q-item
                class="sort-item ls-sm"
                :class="{
                  'text-primary': $route.query.sort == 'price-desc'
                }"
                clickable
                @click="onSort('price-desc')"
              >
                <q-item-section>PRICE, HIGHEST FIRST</q-item-section>
              </q-item>
              <q-item
                class="sort-item ls-sm"
                :class="{
                  'text-primary': $route.query.sort == 'price-asc'
                }"
                clickable
                @click="onSort('price-asc')"
              >
                <q-item-section>PRICE, LOWEST FIRST</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </div>
        <div
          class="nav-btn filter-btn flex-center ls-sm text-grey-8 cursor-pointer"
          @click="filter = !filter"
        >
          FILTER
        </div>
      </div>
      <div class="products">
        <div class="filter">
          <div class="sticky">
            <div class="text-primary ls-sm">CATEGORY</div>
            <ul class="q-mt-md">
              <li>
                <router-link
                  to="/products/all"
                  class="hover-primary text-capitalize"
                  :class="{ 'text-primary': $route.params.category == 'all' }"
                >
                  All
                </router-link>
              </li>
              <li v-for="(category, cidx) in categoryList" :key="'cat-' + cidx">
                <router-link
                  :to="'/products/' + category.path"
                  class="hover-primary text-capitalize"
                  :class="{
                    'text-primary': $route.params.category == category.path
                  }"
                >
                  {{ category.name }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <q-infinite-scroll
          style="width: 100%; margin: 0 40px;"
          ref="infscroll"
          @load="onLoadProducts"
          :offset="offset"
          :debounce="200"
        >
          <div class="product-list" ref="prodlist">
            <q-resize-observer @resize="onResize" :debounce="200" />
            <p class="text-h6 text-grey-8" v-if="isEmpty(productList)">
              No products found.
            </p>
            <div
              class="product-item"
              v-for="(product, pidx) in productList"
              :key="'prod-' + pidx"
              ref="prod"
            >
              <router-link :to="'/buy/' + product.seoname">
                <q-img
                  class="product-img cursor-pointer"
                  :src="
                    product.image
                      ? resolveAssetsUrl(product.image)
                      : 'https://dummyimage.com/370x370/454345/fafafa.png&text=No+Img'
                  "
                  native-context-menu
                  :ratio="1"
                >
                  <q-icon
                    v-if="!isEmpty(product.discount)"
                    class="absolute all-pointer-events"
                    size="32px"
                    name="card_giftcard"
                    color="white"
                    style="top: 8px; left: 8px"
                  >
                    <q-tooltip
                      content-class="bg-primary text-accent text-subtitle2"
                    >
                      {{ product.discount[0].percent }}% OFF
                    </q-tooltip>
                  </q-icon>
                </q-img>
              </router-link>

              <div class="q-mt-md text-center cursor-pointer">
                <router-link
                  :to="'/buy/' + product.seoname"
                  class="product-link text-h6 text-primary ls-sm"
                >
                  {{ product.name }}
                </router-link>
              </div>
              <div class="ls-sm q-mt-sm text-center">
                <span v-if="!isEmpty(product.options)">from </span>
                <span v-if="!isEmpty(product.discount)" class="text-strike">{{
                  product.baseprice
                }}</span>
                <span v-if="!isEmpty(product.discount)" class="text-primary">
                  {{
                    calcPrice(product.baseprice, product.discount[0].percent)
                  }}
                </span>
                <span v-else>{{ product.baseprice }}</span>
                PHP
              </div>
            </div>
          </div>
          <template v-slot:loading>
            <div class="row justify-center q-mt-xl">
              <q-spinner-dots color="primary" size="40px" />
            </div>
          </template>
        </q-infinite-scroll>
      </div>
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 20px;
}

.mainpage > div {
  width: 100%;
}
.navigation {
  position: absolute;
  z-index: 999;
  height: 106px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: $link;
  transition: background 0.5s ease-out, color 0.25s ease-out;
}
.navigation div {
  flex: 0 1 auto;
}
.left-nav {
  margin-left: 24px;
}
.right-nav {
  margin-right: 24px;
}
.right-nav li,
.left-nav li {
  font-size: 14px;
  margin: 0 14px;
  display: inline-block;
  flex-grow: 0;
  flex-basis: 240px;
}
.opaque-nav {
  background: $navbg;
  color: $dark;
}
.header-banner {
  width: 100%;
  height: 550px;
  justify-content: center;
  align-items: center;

  .img-wrapper {
    background: $dark;
    transform: translate3d(0px, 0px, 0px);
    height: 100%;
    width: 100%;
    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    filter: contrast(0.4);
    -webkit-filter: contrast(0.4);
  }
  .caption {
    position: absolute;
    margin: 0 auto;
  }
}
.content-main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 60px;

  .nav-toolbar {
    width: 100%;
    height: 60px;
    margin-bottom: 20px;
    border-top: 1px solid $line;
    border-bottom: 1px solid $line;

    .nav-btn {
      display: flex;
      height: 100%;
      flex-basis: 160px;
      border-left: 1px solid $line;
    }
  }

  .products {
    display: flex;
    font-size: 16px;
    width: 100%;
    padding: 20px;

    .filter {
      padding-left: 20px;
      width: 180px;

      li {
        margin-bottom: 16px;
        font-size: 15px;
        color: $grey-8;
      }
    }
  }
}

.product-list {
  width: 100%;
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(4, minmax(240px, 1fr));

  .product-item {
    .product-img {
      width: 100%;
      max-width: 100%;
      transition: transform 0.25s;
    }

    .product-img:hover {
      transform: translate(2px, 2px);
    }
  }
}

.filter-drawer {
  .filter-title {
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid $line;

    & > i {
      position: absolute;
      right: 20px;
    }
  }

  .filter-selection {
    display: flex;
    font-size: 16px;
    width: 100%;
    padding: 20px;

    li {
      margin-bottom: 16px;
      font-size: 15px;
      color: $grey-8;
    }
  }
}

@media (min-width: 1038px) {
  .filter-btn {
    display: none !important;
  }
}
@media (max-width: 1038px) {
  .filter {
    display: none !important;
  }
}
@media (max-width: 1300px) {
  .product-list {
    grid-template-columns: repeat(3, minmax(240px, 1fr));
  }
}
@media (max-width: 900px) {
  .product-list {
    grid-template-columns: repeat(2, minmax(240px, 1fr));
  }
}
@media (max-width: 620px) {
  .product-list {
    grid-template-columns: 1fr;
  }
}
</style>
<script>
import { mapGetters, mapActions } from "vuex";
import HelperMixin from "../../mixins/helpers";

export default {
  name: "Gallery",
  mixins: [HelperMixin],
  meta() {
    return {
      title: this.selectedCategory || "All Products"
    };
  },
  preFetch({ store, currentRoute, previousRoute }) {
    if (previousRoute && currentRoute.path == previousRoute.path) return;
    const cat = currentRoute.params.category;
    const sort = currentRoute.query.sort;

    return store
      .dispatch("gallery/getGalleryItems", {
        category: cat ? cat.toLowerCase() : "all",
        sort: sort
      })
      .catch(err => {
        redirect("/error500");
      });
  },
  computed: {
    ...mapGetters("gallery", ["productList", "categoryList"]),
    selectedCategory() {
      let ret = "All Products";
      if (this.$route.params.category) {
        const param = this.$route.params.category.toLowerCase();
        const cat = !this.isEmpty(this.categoryList)
          ? this.categoryList.find(item => item.path == param)
          : "";
        ret = cat ? cat.name : ret;
      }
      return ret;
    },
    categoryBG() {
      let ret = "";
      if (!this.isEmpty(this.productList)) {
        let first = this.productList.find(item => !!item.image);
        ret = first ? first.image : ret;
      }
      return ret;
    }
  },
  created() {},
  mounted() {},
  watch: {
    $route(to, from) {
      if (to.path !== from.path) {
        this.finished = false;
      }
    }
  },
  data() {
    return {
      offset: 250,
      items: [{}, {}],
      filter: false,
      opaque: false,
      finished: false
    };
  },
  methods: {
    ...mapActions("gallery", [
      "getProducts",
      "getNextProducts",
      "pushProducts"
    ]),

    onResize(size) {
      if (this.$refs.prod && this.$refs.prod.length > 0) {
        let elH = this.$refs.prod[0].offsetHeight,
          elW = this.$refs.prod[0].offsetWidth;
        this.offset = elW > 0 ? elH * 2 + elW : 250;
      }
      // console.log("OFFSET", this.offset);
    },

    changeSorting(val) {
      let sortQry = Object.assign({}, this.$route.query, { sort: val });
      if (!val) delete sortQry.filter;

      this.$router.replace({ query: sortQry }).catch(err => {});
    },

    async onSort(val) {
      try {
        this.changeSorting(val);
        let cat = this.$route.params.category;
        cat = cat ? cat.toLowerCase() : "all";
        await this.getProducts({
          category: cat,
          sort: val
        });
        this.finished = false;
      } catch (err) {}
    },

    async onLoadProducts(index, done) {
      if (
        this.finished ||
        this.isEmpty(this.productList) ||
        this.productList.length < 12 ||
        this.productList.length % 12 > 0
      ) {
        done();
        return;
      }

      try {
        let cat = this.$route.params.category;
        let sort = this.$route.query.sort;
        const products = await this.getNextProducts({
          category: cat ? cat.toLowerCase() : "all",
          sort: sort ? sort : null
        });
        if (this.isEmpty(products)) {
          this.finished = true;
          done();
          return;
        } else if (products.length < 12) {
          this.finished = true;
        }
        this._disableScroll();
        this.pushProducts(products);
        setTimeout(() => {
          this._enableScroll();
        }, 100);
      } catch (err) {
        console.log(err);
      } finally {
        done();
      }
    }
  }
};
</script>
