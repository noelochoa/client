<template>
  <q-page class="home flex flex-start">
    <!-- NAV -->
    <div
      class="navigation"
      :class="{ 'opaque-nav': opaque || showDlg }"
      @mouseover="opaque = true"
      @mouseleave="opaque = false"
    >
      <div>
        <ul class="left-nav">
          <li class="ls-sm">
            <router-link to="/" class="header-link hover-primary">
              <span class="default">HOME</span>
              <q-btn
                class="mobile no-hover-bg"
                flat
                padding="sm"
                :ripple="false"
                icon="home"
              />
            </router-link>
          </li>
          <li class="ls-sm">
            <router-link to="/products" class="header-link hover-primary">
              <span class="default">SHOP</span>
              <q-btn
                class="mobile no-hover-bg"
                flat
                padding="sm"
                :ripple="false"
                icon="store"
              />
            </router-link>
          </li>
        </ul>
      </div>
      <div>
        <div class="center-nav absolute" style="top:-12px; margin-left:16px;">
          <img src="/logo.png" width="132px" />
        </div>
      </div>
      <div>
        <ul class="right-nav">
          <li class="ls-sm">
            <router-link to="/account" class="header-link hover-primary">
              <span class="default">ACCOUNT</span>
              <q-btn
                class="mobile no-hover-bg"
                flat
                padding="sm"
                :ripple="false"
                icon="account_circle"
              />
            </router-link>
          </li>
          <li class="ls-sm">
            <a
              href="#"
              class="header-link hover-primary"
              @click.prevent.stop="showSearchDlg"
            >
              <span class="default">SEARCH</span>
              <q-btn
                class="mobile no-hover-bg"
                flat
                padding="sm"
                :ripple="false"
                icon="search"
              />
            </a>
          </li>
          <li class="ls-sm">
            <router-link to="/basket" class="header-link hover-primary">
              <span class="default">BASKET </span>
              <span class="default" v-if="itemsCount">({{ itemsCount }})</span>
              <q-btn
                class="mobile no-hover-bg"
                flat
                padding="sm"
                :ripple="false"
                icon="shopping_basket"
              />
            </router-link>
          </li>
        </ul>
      </div>
      <q-dialog
        v-model="showDlg"
        position="top"
        content-class="nav-search"
        square
        maximized
        transition-show="fade"
        transition-hide="fade"
      >
        <div class="bg-secondary block">
          <q-form autofocus>
            <q-input
              class="q-pa-lg text-h5"
              input-class="ls-sm"
              type="text"
              spellcheck="false"
              placeholder="SEARCH..."
              v-model="search"
              :debounce="400"
              @input="searchProducts"
            >
              <template v-slot:before>
                <q-icon name="search" />
              </template>
              <template v-slot:append>
                <q-btn
                  v-if="!!search"
                  flat
                  class="no-hover-bg"
                  :ripple="false"
                  icon="clear"
                  @click="clearSearch"
                />
              </template>
            </q-input>
            <div
              class="search-results q-px-lg q-py-sm text-grey-8"
              v-if="search && !fetching"
            >
              <div class="section-label text-uppercase ls-sm">
                Products
              </div>
              <p>{{ searchRes }}</p>
              <div class="sproduct-list q-mb-lg">
                <div
                  class="product-item"
                  v-for="(product, pidx) in sProducts"
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
                        name="local_offer"
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

                  <div class="q-mt-md text-center cursor-pointer product-title">
                    <router-link
                      :to="'/buy/' + product.seoname"
                      class="product-link text-h6 text-primary ls-sm"
                    >
                      {{ product.name }}
                    </router-link>
                  </div>
                  <div class="ls-sm q-mt-sm text-center product-price">
                    <span v-if="!isEmpty(product.options)">from </span>
                    <span
                      v-if="!isEmpty(product.discount)"
                      class="text-strike"
                      >{{ product.baseprice }}</span
                    >
                    <span
                      v-if="!isEmpty(product.discount)"
                      class="text-primary"
                    >
                      {{
                        calcPrice(
                          product.baseprice,
                          product.discount[0].percent
                        )
                      }}
                    </span>
                    <span v-else>{{ product.baseprice }}</span>
                    PHP
                  </div>
                </div>
              </div>
            </div>
          </q-form>
        </div>
      </q-dialog>
    </div>

    <!-- CAROUSEL -->
    <div class="carousel">
      <q-carousel
        class="featured-carousel"
        arrows
        animated
        swipeable
        infinite
        v-model="slide"
        :autoplay="autoplay"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
      >
        <q-carousel-slide
          v-for="(item, idx) in featured"
          :key="'slide-' + idx"
          :name="'slide-' + idx"
          :img-src="
            item.banner
              ? resolveAssetsUrl(item.banner)
              : 'https://dummyimage.com/1600x900/454345/fafafa.png&text=No+Banner'
          "
        >
          <div class="absolute-bottom custom-caption">
            <div class="text-h3 ls-sm">{{ item.name }}</div>
            <div class="text-subtitle1 q-mt-sm">{{ item.description }}</div>
            <q-btn
              class="q-mt-md ls-sm"
              unelevated
              padding="sm lg"
              size="16px"
              color="accent"
              text-color="dark"
              label="View More"
              :to="'/buy/' + item.seoname"
            />
          </div>
        </q-carousel-slide>
      </q-carousel>
      <q-btn
        class="scroll-btn"
        :ripple="false"
        icon="keyboard_arrow_down"
        text-color="primary"
        color="secondary"
        round
        @click="scrollToElement($refs.newitems, 700)"
      />
    </div>

    <!-- NEW ITEMS -->
    <div class="newitems" ref="newitems">
      <h5 class="ls-sm text-primary">NEW ARRIVALS</h5>
      <div class="content">
        <div class="product-list">
          <div
            class="product-item"
            v-for="(product, pidx) in newItems"
            :key="'prod-' + pidx"
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
                  name="local_offer"
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
                {{ calcPrice(product.baseprice, product.discount[0].percent) }}
              </span>
              <span v-else>{{ product.baseprice }}</span>
              PHP
            </div>
          </div>
        </div>
      </div>
      <q-btn
        class="q-mt-xl"
        unelevated
        color="red-6 ls-sm"
        size="16px"
        padding="sm lg"
        label="View All Products"
        to="/products"
      />
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
.home > div {
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
.mobile {
  display: none;
}
.custom-caption {
  padding: 70px;
  color: white;
}
.opaque-nav {
  background: $navbg;
  color: $dark;
}
.search-results {
  font-size: 16px;

  .section-label {
    line-height: 2.5em;
    width: 100%;
    border-bottom: 1px solid $line;
    margin: 0 0 40px;
  }
}
.newitems {
  padding: 80px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .content {
    font-size: 16px;
    width: 100%;
    padding: 20px;
  }
}
.scroll-btn {
  position: absolute;
  left: 0;
  right: 0;
  margin: -21px auto;
  transition: transform 0.25s ease-out;
}
.scroll-btn:hover {
  transform: scale(1.25);
}
// NEW ITEMS
.product-list {
  margin-left: 40px;
  margin-right: 40px;
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(4, minmax(300px, 1fr));

  .product-item {
    .product-img {
      width: 100%;
      max-width: 100%;
      transition: transform 0.25s ease-out;
    }

    .product-img:hover {
      transform: translate(2px, 2px);
    }
  }
}

// SEARCH RESULTS
.sproduct-list {
  width: 100%;
  display: grid;
  grid-gap: 40px;
  justify-content: space-evenly;
  grid-template-columns: repeat(4, minmax(110px, 380px));

  .product-item {
    .product-img {
      width: 100%;
      max-width: 100%;
      transition: transform 0.25s ease-out;
    }

    .product-img:hover {
      transform: translate(2px, 2px);
    }
    .product-title {
      overflow: hidden;
    }
  }
}

@media (max-width: 640px) {
  .search-results {
    padding-top: 0;
  }

  .sproduct-list {
    grid-template-columns: 1fr;
    grid-gap: 20px;

    .product-item {
      display: grid;
      grid-template-columns: 70px 1fr;
      grid-template-rows: 37px;
      grid-template-areas:
        "product-img product-title"
        "product-img product-price";
      column-gap: 40px;

      .product-img {
        grid-area: product-img;
      }
      .product-title {
        text-align: left;
        margin-top: 2px;
        word-wrap: nowrap;
        overflow: hidden;
        grid-area: product-title;
      }
      .product-price {
        text-align: left;
        margin-top: 2px;
        grid-area: product-price;
      }
    }
  }
}

@media (max-width: 1390px) {
  .product-list {
    margin-left: 40px;
    margin-right: 40px;
    grid-template-columns: repeat(2, minmax(300px, 1fr));
  }
}
@media (max-width: 1220px) {
  .left-nav {
    margin-left: 8px;
  }
  .right-nav {
    margin-right: 8px;
  }
  .left-nav li,
  .right-nav li {
    margin: 0;
  }
  .mobile {
    display: inline-block;
  }
  .default {
    display: none;
  }
  .center-nav {
    position: relative !important;
    top: 4px !important;
    left: 4px !important;
  }
}
@media (max-width: 760px) {
  .product-list {
    margin-left: 40px;
    margin-right: 40px;
    justify-content: center;
    grid-template-columns: 0.8fr;
  }
}
</style>
<script>
import HelperMixin from "../mixins/helpers";

export default {
  name: "Home",
  mixins: [HelperMixin],
  preFetch({ store, redirect }) {
    return store.dispatch("home/getProducts").catch(err => {
      redirect("/error500");
    });
  },
  computed: {
    itemsCount() {
      return this.$store.getters["basket/itemsCount"] || "0";
    },
    featured() {
      return this.$store.getters["home/getFeatured"];
    },
    newItems() {
      return this.$store.getters["home/getNewItems"];
    },
    sProducts() {
      return this.$store.getters["gallery/searchResults"];
    }
  },
  created() {},
  mounted() {},
  data() {
    return {
      slide: "slide-0",
      autoplay: true,
      opaque: false,
      showDlg: false,
      search: "",
      searchRes: "",
      fetching: false
    };
  },
  methods: {
    clearSearch() {
      this.searchRes = this.search = "";
    },
    showSearchDlg() {
      this.showDlg = true;
    },
    async searchProducts(val) {
      try {
        this.searchRes = "";
        this.fetching = true;
        const res = await this.$store.dispatch("gallery/searchProducts", {
          search: this.search
        });
        if (!res) {
          this.searchRes = "No items found.";
        }
      } catch (err) {
        this.searchRes = err + "Error occurred while searching for products.";
      } finally {
        this.fetching = false;
      }
    }
  }
};
</script>
