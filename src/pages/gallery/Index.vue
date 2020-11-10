<template>
  <q-page class="home flex flex-start">
    <!-- NAV -->
    <div
      class="navigation"
      :class="{ 'opaque-nav': opaque }"
      @mouseover="opaque = true"
      @mouseleave="opaque = false"
    >
      <div>
        <ul class="side-nav">
          <li class="ls-sm"><a>ACCOUNT</a></li>
          <li class="ls-sm"><a>BASKET</a>(0)</li>
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
            <li>Cakes</li>
            <li>Cupcakes</li>
            <li>Kakanin</li>
          </ul>
          <div class="text-primary ls-sm q-mt-md">OPTIONS</div>
          <ul class="q-mt-md">
            <li>Cakes</li>
            <li>Cupcakes</li>
            <li>Kakanin</li>
          </ul>
        </div>
      </div>
    </q-drawer>

    <!-- BANNER -->
    <div class="header-banner flex">
      <div class="img-wrapper"></div>
      <div class="caption">
        <h4 class="text-accent ls-sm">ALL PRODUCTS</h4>
      </div>
    </div>

    <!-- PRODUCTS -->
    <div class="content-main">
      <div class="nav-toolbar row no-wrap justify-end">
        <div class="nav-btn flex-center ls-sm text-grey-8 cursor-pointer">
          SORT <q-icon name="keyboard_arrow_down" size="sm" color="grey-8" />
          <q-menu fit content-class="bg-secondary text-grey-8" auto-close>
            <q-list style="min-width: 210px">
              <q-item class="sort-item ls-sm" clickable>
                <q-item-section>BEST SELLING</q-item-section>
              </q-item>
              <q-item class="sort-item ls-sm" clickable>
                <q-item-section>ALPHABETICALLY, A-Z</q-item-section>
              </q-item>
              <q-item class="sort-item ls-sm" clickable>
                <q-item-section>ALPHABETICALLY, Z-A</q-item-section>
              </q-item>
              <q-item class="sort-item ls-sm" clickable>
                <q-item-section>DATE, NEWEST FIRST</q-item-section>
              </q-item>
              <q-item class="sort-item ls-sm" clickable>
                <q-item-section>DATE, OLDEST FIRST</q-item-section>
              </q-item>
              <q-item class="sort-item ls-sm" clickable>
                <q-item-section>PRICE, HIGHEST FIRST</q-item-section>
              </q-item>
              <q-item class="sort-item ls-sm" clickable>
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
        <div class="filter flex column">
          <div class="text-primary ls-sm">CATEGORY</div>
          <ul class="q-mt-md">
            <li>Cakes</li>
            <li>Cupcakes</li>
            <li>Kakanin</li>
          </ul>
          <div class="text-primary ls-sm q-mt-md">OPTIONS</div>
          <ul class="q-mt-md">
            <li>Cakes</li>
            <li>Cupcakes</li>
            <li>Kakanin</li>
          </ul>
        </div>
        <q-infinite-scroll
          style="width: 100%; margin: 0 40px;"
          @load="onLoadProducts"
          :offset="offset"
          :debounce="200"
        >
          <div class="product-list" ref="prodlist">
            <q-resize-observer @resize="onResize" :debounce="200" />
            <div
              class="product-item"
              v-for="(item, idx) in items"
              :key="'pkey-' + idx"
              ref="prod"
            >
              <q-img
                class="product-img"
                src="https://cdn.quasar.dev/img/parallax2.jpg"
                native-context-menu
                :ratio="1"
              >
                <q-icon
                  class="absolute all-pointer-events"
                  size="32px"
                  name="card_giftcard"
                  color="white"
                  style="top: 8px; left: 8px"
                >
                  <q-tooltip
                    content-class="bg-primary text-accent text-subtitle2"
                  >
                    On Sale
                  </q-tooltip>
                </q-icon>
              </q-img>
              <div class="text-h6 text-primary ls-sm q-mt-md text-center">
                PRODUCT NAME 1
              </div>
              <div class="ls-sm q-mt-sm text-center">from 200 PHP</div>
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
.home > div {
  width: 100%;
}
.navigation {
  position: absolute;
  z-index: 999;
  height: 106px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: $link;
  transition: background 0.5s ease-out, color 0.25s ease-out;
}
.navigation div {
  flex: 0 1 auto;
}
.side-nav {
  margin-right: 24px;
}
.side-nav li {
  font-size: 14px;
  margin: 0 14px;
  display: inline-block;
  flex-grow: 0;
  flex-basis: 240px;
}
.header-banner {
  width: 100%;
  height: 550px;
  justify-content: center;
  align-items: center;

  .img-wrapper {
    background-image: url(https://cdn.shopify.com/s/files/1/0054/0878/4458/collections/IMG_3061_1600x.jpg?v=1592023076);
    transform: translate3d(0px, 0px, 0px);
    height: 100%;
    width: 100%;
    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .caption {
    position: absolute;
    margin: 0 auto;
  }
}
.opaque-nav {
  background: $navbg;
  color: $dark;
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
import HelperMixin from "../../mixins/helpers";

export default {
  name: "Gallery",
  mixins: [HelperMixin],
  created() {},
  mounted() {},
  data() {
    return {
      offset: 250,
      items: [{}, {}],
      filter: false,
      opaque: false
    };
  },
  methods: {
    onResize(size) {
      if (this.$refs.prod && this.$refs.prod.length > 0) {
        let elH = this.$refs.prod[0].offsetHeight,
          elW = this.$refs.prod[0].offsetWidth;
        this.offset = elW > 0 ? elH * 2 + elW : 250;
      }
      // console.log('OFFSET', this.offset);
    },

    onLoadProducts(index, done) {
      // TODO
      setTimeout(() => {
        this._disableScroll();
        this.items.push({}, {}, {});
        if (index > 10) done(true);
        done();
        setTimeout(() => {
          this._enableScroll();
        }, 100);
      }, 1600);
    }
  }
};
</script>
