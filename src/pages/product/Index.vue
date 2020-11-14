<template>
  <q-page class="mainpage">
    <!-- NAV -->
    <div class="navigation opaque-nav">
      <div>
        <ul class="side-nav">
          <li class="ls-sm"><a>ACCOUNT</a></li>
          <li class="ls-sm"><a>BASKET</a>(0)</li>
        </ul>
      </div>
    </div>
    <!-- PRODUCT PAGE -->
    <div class="grid">
      <!-- Image Gallery -->
      <div class="gallery">
        <div class="selected-wrapper">
          <q-img
            native-context-menu
            :src="selected"
            spinner-color="primary"
            style="max-height:65vh;"
          >
            <q-icon
              class="prev-action all-pointer-events"
              size="32px"
              name="keyboard_arrow_left"
              color="primary"
              @click="onPrevImg"
            >
            </q-icon>
            <q-icon
              class="next-action all-pointer-events"
              size="32px"
              name="keyboard_arrow_right"
              color="primary"
              @click="onNextImg"
            >
            </q-icon>
          </q-img>
        </div>
        <div class="thumbnails text-center">
          <q-img
            class="q-ma-sm cursor-pointer"
            v-for="(imgItm, idx) in thumbnails"
            :key="'thumb-' + idx"
            :class="{ 'thumb-selected': selected == imgItm.src }"
            :src="imgItm.src"
            spinner-color="primary"
            width="70px"
            @click="selected = imgItm.src"
          />
        </div>
      </div>
      <!-- Specs -->
      <div class="info">
        <q-list>
          <q-expansion-item
            label="General"
            header-class="no-hover text-primary ls-sm text-uppercase q-py-lg"
            expand-icon-class="text-primary"
          >
            <ul class="bg-secondary q-px-md q-pb-lg text-grey-8">
              <li class="text-weight-bolder">Usage</li>
              <li>Weddings</li>
              <li class="text-weight-bolder q-mt-md">Usage</li>
              <li>Weddings</li>
            </ul>
          </q-expansion-item>
          <q-separator />
          <q-expansion-item
            label="Tech Specs"
            header-class="no-hover text-primary ls-sm text-uppercase q-py-lg"
            expand-icon-class="text-primary"
          >
            <ul class="bg-secondary q-px-md q-pb-lg text-grey-8">
              <li class="text-weight-bolder">Usage</li>
              <li>Weddings</li>
              <li class="text-weight-bolder q-mt-md">Usage</li>
              <li>Weddings</li>
            </ul>
          </q-expansion-item>
          <q-separator />
        </q-list>
      </div>
      <!-- Order form and others -->
      <div class="oform">
        <h5 class="text-primary ls-sm">DCS RED test RED test R3</h5>
        <p class="text-weight-bold text-grey-8 ls-sm">Cakes</p>
        <h6 class="text-grey-8 ls-sm">
          <span class="text-strike">200</span>
          <span class="text-primary">
            100
          </span>
          PHP
        </h6>
        <q-form class="order-form" ref="order-form">
          <q-input
            outlined
            dense
            v-model="order.quantity"
            class="q-my-md"
            input-style="text-align:center;"
            style="max-width: 140px;"
          >
            <template v-slot:prepend>
              <q-icon name="remove" class="cursor-pointer" />
            </template>
            <template v-slot:append>
              <q-icon name="add" class="cursor-pointer" />
            </template>
          </q-input>
          <span class="text-grey-8">Design:</span>
          <q-select
            popup-content-class="bg-secondary"
            outlined
            dense
            emit-value
            map-options
            :options="testoptions"
            v-model="order.test"
            @input="onSelOption"
            lazy-rules
            :rules="[val => !!val]"
          />
          <span class="text-grey-8">Design:</span>
          <q-select
            popup-content-class="bg-secondary"
            outlined
            dense
            emit-value
            map-options
            :options="testoptions"
            v-model="order.test"
            @input="onSelOption"
            lazy-rules
            :rules="[val => !!val]"
          />
          <q-btn
            unelevated
            type="submit"
            color="red-6 ls-sm"
            size="16px"
            padding="sm lg"
            label="Add to Basket"
          />
        </q-form>
        <div class="description q-mt-lg text-grey-8 text-subtitle1">
          <h6>About this product:</h6>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quam
          quis, obcaecati adipisci laudantium aperiam vel ea dignissimos unde
          quod mollitia reiciendis. Repellendus ipsa voluptates nam aut non
          fugiat dignissimos.
        </div>
      </div>
    </div>

    <!-- RELATED PRODUCTS -->
    <div class="related">
      <h5 class="ls-sm text-primary">RELATED ITEMS</h5>
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
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
.mainpage > div {
  width: 100%;
}
.navigation {
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
.opaque-nav {
  box-shadow: 0 0.1rem #eecfc8;
  background: $navbg;
  color: $dark;
}
.grid {
  display: grid;
  padding: 50px;
  grid-template-columns: repeat(3, minmax(320px, 400px));
  grid-template-areas:
    "gallery gallery oform"
    "info info oform";
  grid-gap: 50px;
  justify-content: center;

  & > div {
    min-height: 240px;
  }
  .gallery {
    grid-area: gallery;
    min-height: 480px;
  }
  .info {
    grid-area: info;
    border-top: 1px solid rgba(0, 0, 0, 0.12);
  }
  .oform {
    grid-area: oform;
  }
}
.gallery {
  .prev-action {
    position: absolute;
    top: 50%;
    left: 4px;
    margin-top: -16px;
    cursor: pointer;
  }
  .next-action {
    position: absolute;
    top: 50%;
    right: 4px;
    margin-top: -16px;
    cursor: pointer;
  }
  .thumbnails .thumb-selected {
    border: 1px solid $primary;
  }
}
.oform {
  .description {
    font-family: "Source Sans Pro";
    text-align: justify;
  }
}
.related {
  padding: 50px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-top: 1px solid rgba(0, 0, 0, 0.12);

  .content {
    font-size: 16px;
    width: 100%;
    padding: 20px;
  }
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
@media (max-width: 1110px) {
  .grid {
    grid-template-columns: 1fr;
    grid-template-areas:
      "gallery"
      "oform"
      "info";
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
import HelperMixin from "../../mixins/helpers";

export default {
  name: "Product",
  mixins: [HelperMixin],
  meta() {
    return {
      title: this.title || "Product"
    };
  },
  created() {},
  mounted() {},
  data() {
    return {
      title: "",
      slide: 1,
      selected: "https://cdn.quasar.dev/img/mountains.jpg",
      thumbnails: [
        {
          src:
            "https://cdn.shopify.com/s/files/1/0054/0878/4458/products/Meka_BoG_7bbbf176-f8b6-431e-bce2-a09059ee78f6_600x.png?v=1600107926"
        },
        {
          src:
            "https://cdn.shopify.com/s/files/1/0054/0878/4458/products/8008-Geo-Deskmat_700x.png?v=1564539406"
        },
        {
          src:
            "https://cdn.shopify.com/s/files/1/0054/0878/4458/products/Meka_Mat_600x.jpg?v=1600107926"
        },
        {
          src:
            "https://cdn.shopify.com/s/files/1/0054/0878/4458/products/image_800x.png?v=1599369687"
        },
        { src: "https://cdn.quasar.dev/img/mountains.jpg" }
      ],
      filter: false,
      opaque: false,
      order: {
        quantity: 1,
        test: 1
      },
      testoptions: [
        { label: "opt1", value: 1 },
        { label: "opt2", value: 2 },
        { label: "opt3", value: 3 }
      ]
    };
  },
  methods: {
    _findSelected() {
      return this.thumbnails.findIndex(item => {
        return this.selected === item.src;
      });
    },
    onNextImg(evt) {
      let idx = this._findSelected() + 1;
      if (idx > this.thumbnails.length - 1) idx = 0; // loop
      this.selected = this.thumbnails[idx].src;
    },
    onPrevImg(evt) {
      let idx = this._findSelected() - 1;
      if (idx < 0) idx = this.thumbnails.length - 1; // loop
      this.selected = this.thumbnails[idx].src;
    },
    onSelOption(val) {}
  }
};
</script>
