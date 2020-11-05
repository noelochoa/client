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
          <li><a>ACCOUNT</a></li>
          <li><a>BASKET</a>(0)</li>
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
        height="91vh"
        :autoplay="autoplay"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
      >
        <q-carousel-slide
          name="first"
          img-src="https://cdn.quasar.dev/img/mountains.jpg"
        >
          <div class="absolute-bottom custom-caption">
            <div class="text-h2">First stop</div>
            <div class="text-subtitle1">Mountains</div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide
          name="second"
          img-src="https://cdn.quasar.dev/img/parallax1.jpg"
        >
          <div class="absolute-bottom custom-caption">
            <div class="text-h2">Second stop</div>
            <div class="text-subtitle1">Famous City</div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide
          name="third"
          img-src="https://cdn.quasar.dev/img/parallax2.jpg"
        >
          <div class="absolute-bottom custom-caption">
            <div class="text-h2">Third stop</div>
            <div class="text-subtitle1">Famous Bridge</div>
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
        @click="scrollToElement($refs.newitems)"
      />
    </div>

    <!-- NEW ITEMS -->
    <div class="newitems" ref="newitems">
      <div class="heading">NEW ARRIVALS</div>
      <div class="content">
        <q-btn
          class="q-mt-xl"
          unelevated
          color="deep-orange-13"
          size="lg"
          label="View All Products"
        />
      </div>
    </div>
    <!-- OTHERS -->
    <div class="others">
      <div class="heading">NEW ARRIVALS</div>
      <div class="content"></div>
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
}
.navigation div {
  flex: 0 1 auto;
}
.side-nav {
  margin-right: 24px;
  list-style: none;
}
.side-nav li {
  font-family: Futura-PT;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2.6px;
  margin: 0 14px;
  display: inline-block;
  flex-grow: 0;
  flex-basis: 240px;
}
.carousel {
  width: 100%;
}
.custom-caption {
  padding: 70px;
  color: white;
}
.opaque-nav {
  background: $accent;
  color: $dark;
}

.newitems {
  padding: 80px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: Futura-PT;

  .heading {
    font-size: 22px;
    font-weight: 900;
    letter-spacing: 4.4px;
    color: $primary;
  }

  .content {
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 2.6px;
  }
}
.scroll-btn {
  position: absolute;
  left: 0;
  right: 0;
  margin: -21px auto;
  transition: transform 0.15s;
}
.scroll-btn:hover {
  transform: scale(1.25);
}
</style>

<script>
import HelperMixin from "../mixins/helpers";

export default {
  name: "PageIndex",
  mixins: [HelperMixin],
  data() {
    return {
      slide: "first",
      autoplay: true,
      opaque: false
    };
  },
  methods: {}
};
</script>
