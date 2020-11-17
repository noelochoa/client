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
              :to="'/products/' + item.seoname"
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
            <q-img
              class="product-img"
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
            <div class="text-h6 text-primary ls-sm q-mt-md text-center">
              {{ product.name }}
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

.custom-caption {
  padding: 70px;
  color: white;
}
.opaque-nav {
  background: $navbg;
  color: $dark;
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
    return store.dispatch("home/getProducts");
  },
  computed: {
    featured() {
      let ret = this.$store.getters["home/getFeatured"];
      return ret;
    },
    newItems() {
      let ret = this.$store.getters["home/getNewItems"];
      return ret;
    }
  },
  created() {},
  mounted() {},
  data() {
    return {
      slide: "slide-0",
      autoplay: true,
      opaque: false
    };
  },
  methods: {}
};
</script>
