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
          name="first"
          img-src="https://cdn.quasar.dev/img/mountains.jpg"
        >
          <div class="absolute-bottom custom-caption">
            <div class="text-h3 ls-sm">First stop</div>
            <div class="text-subtitle1 q-mt-sm">Mountains</div>
            <q-btn
              class="q-mt-md ls-sm"
              unelevated
              padding="sm lg"
              size="16px"
              color="accent"
              text-color="dark"
              label="Buy Now"
            />
          </div>
        </q-carousel-slide>
        <q-carousel-slide
          name="second"
          img-src="https://cdn.quasar.dev/img/parallax1.jpg"
        >
          <div class="absolute-bottom custom-caption">
            <div class="text-h3 ls-sm">Second stop</div>
            <div class="text-subtitle1 q-mt-sm">Famous City</div>
            <q-btn
              class="q-mt-md ls-sm"
              unelevated
              padding="sm lg"
              size="16px"
              color="accent"
              text-color="dark"
              label="Buy Now"
            />
          </div>
        </q-carousel-slide>
        <q-carousel-slide
          name="third"
          img-src="https://cdn.quasar.dev/img/parallax2.jpg"
        >
          <div class="absolute-bottom custom-caption">
            <div class="text-h3 ls-sm">Third stop</div>
            <div class="text-subtitle1 q-mt-sm">Famous Bridge</div>
            <q-btn
              class="q-mt-md ls-sm"
              unelevated
              padding="sm lg"
              size="16px"
              color="accent"
              text-color="dark"
              label="Buy Now"
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
          <div class="product-item">
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
          <div class="product-item">
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
          <div class="product-item">
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

          <div class="product-item">
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
              PRODUCT NAME 2
            </div>
            <div class="ls-sm q-mt-sm text-center text-dark">
              from
              <span class="text-strike"> 200</span>
              <span class="text-primary">
                100
              </span>
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
  created() {},
  mounted() {},
  data() {
    return {
      cheight: 0,
      slide: "first",
      autoplay: true,
      opaque: false
    };
  },
  methods: {}
};
</script>
