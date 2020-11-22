<template>
  <q-page class="mainpage">
    <!-- NAV -->
    <div class="navigation opaque-nav">
      <div>
        <ul class="left-nav">
          <li class="ls-sm">
            <router-link to="/" class="header-link hover-primary"
              >HOME</router-link
            >
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
            <router-link to="/account" class="header-link hover-primary"
              >ACCOUNT</router-link
            >
          </li>
          <li class="ls-sm">
            <router-link to="/" class="header-link hover-primary">
              BASKET (0)
            </router-link>
          </li>
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
            :src="
              !!selected
                ? resolveAssetsUrl(selected)
                : 'https://dummyimage.com/640x480/454345/fafafa.png&text=No+Img'
            "
            spinner-color="primary"
            style="max-height:65vh;"
          >
            <q-icon
              v-if="!isEmpty(product.images) && product.images.length > 1"
              class="prev-action all-pointer-events"
              size="32px"
              name="keyboard_arrow_left"
              color="primary"
              @click="onPrevImg"
            >
            </q-icon>
            <q-icon
              v-if="!isEmpty(product.images) && product.images.length > 1"
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
            v-for="(imgItm, idx) in product.images"
            :key="'thumb-' + idx"
            :class="{ 'thumb-selected': selected == imgItm.image }"
            :src="resolveAssetsUrl(imgItm.image)"
            spinner-color="primary"
            width="70px"
            @click="selected = imgItm.image"
          />
        </div>
      </div>
      <!-- Specs -->
      <div class="info">
        <q-list>
          <div
            v-for="(detailGrp, didx) in product.details"
            :key="'detail-' + didx"
          >
            <q-expansion-item
              :label="detailGrp.group"
              header-class="no-hover text-primary ls-sm text-uppercase q-py-lg"
              expand-icon-class="text-primary"
            >
              <ul class="detail bg-secondary q-px-md q-pb-lg text-grey-8">
                <li
                  v-for="(item, key) in detailGrp.items"
                  :key="'item-' + didx + key"
                  class="q-mb-md"
                >
                  <span class="text-uppercase ls-sm text-weight-bolder">
                    {{ key }}
                  </span>
                  <br />
                  <span class="text-capitalize">{{ item }}</span>
                </li>
              </ul>
            </q-expansion-item>
            <q-separator />
          </div>
        </q-list>
      </div>
      <!-- Order form and others -->
      <div class="oform">
        <h5 class="text-primary ls-sm text-capitalize">{{ product.name }}</h5>
        <p class="text-weight-bold text-grey-8 ls-sm text-capitalize">
          {{ product.category.name }}
        </p>
        <h6 class="text-grey-8 ls-sm">
          <span v-if="!isEmpty(product.discount)" class="text-strike">{{
            product.baseprice
          }}</span>
          <span v-if="!isEmpty(product.discount)" class="text-primary">
            {{ calcPrice(product.baseprice, product.discount[0].percent) }}
          </span>
          <span v-else>{{ product.baseprice }}</span>
          PHP
        </h6>
        <q-form class="order-form q-mt-md" ref="order-form">
          <span class="text-grey-8">Qty (Min: {{ product.minOrderQty }}):</span>
          <q-input
            outlined
            dense
            v-model="order.quantity"
            class="q-mb-md"
            input-style="text-align:center;"
            style="max-width: 140px;"
          >
            <template v-slot:prepend>
              <q-icon
                name="remove"
                class="cursor-pointer"
                @click="
                  order.quantity - 1 >= product.minOrderQty
                    ? (order.quantity -= 1)
                    : false
                "
              />
            </template>
            <template v-slot:append>
              <q-icon
                name="add"
                class="cursor-pointer"
                @click="
                  order.quantity + 1 <= 100 ? (order.quantity += 1) : false
                "
              />
            </template>
          </q-input>
          <div v-for="(option, idx) in product.options" :key="'opt-' + idx">
            <span class="text-grey-8">{{ option.attribute }}:</span>
            <q-select
              popup-content-class="bg-secondary"
              outlined
              dense
              emit-value
              map-options
              :options="toSelOptions(option.attribute, option.choices)"
              v-model="order.options[idx]"
              @input="onSelOption(idx)"
              lazy-rules
              :rules="[val => !!val]"
            />
            <q-input
              v-if="isOtherSelected(order.options[idx])"
              dense
              outlined
              placeholder="Please specify"
              v-model="order.otherVal[idx]"
              lazy-rules
              :rules="[val => !!val]"
            />
          </div>
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
          {{ product.description }}
        </div>
      </div>
    </div>

    <!-- COMMENTS -->
    <div class="comments">
      <h5 class="ls-sm text-primary">COMMENTS</h5>
      <div class="content text-grey-8">
        <div class="comments-list">
          <ul
            v-for="(comment, cidx) in comments"
            :key="'comment-' + cidx"
            class="flex flex-center"
          >
            <!-- COMMENT -->
            <q-item class="q-mt-xl level-1">
              <q-item-section avatar>
                <q-avatar color="primary" text-color="white">
                  A
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label class="author">Noel Ochoa</q-item-label>
                <q-item-label class="message">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                  eaque est nisi, cumque eius aspernatur ipsum porro commodi,
                  praesentium aliquid possimus distinctio delectus reiciendis
                  hic eligendi, ea fugiat qui aliquam! Lorem ipsum dolor sit
                  amet consectetur adipisicing elit.
                </q-item-label>
              </q-item-section>

              <q-item-section side top>
                <q-item-label class="message">5 min ago</q-item-label>
              </q-item-section>
            </q-item>
            <!-- REPLY (if applicable) -->
            <q-item class="q-mt-md level-2">
              <q-item-section avatar>
                <q-avatar color="primary" text-color="white">
                  A
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label class="author text-underline">Admin</q-item-label>
                <q-item-label class="message">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                  eaque est nisi, cumque eius aspernatur ipsum porro commodi,
                  praesentium aliquid possimus distinctio delectus reiciendis
                  hic eligendi, ea fugiat qui aliquam! Lorem ipsum dolor sit
                  amet consectetur adipisicing elit.
                </q-item-label>
              </q-item-section>

              <q-item-section side top>
                <q-item-label class="message">5 min ago</q-item-label>
              </q-item-section>
            </q-item>
          </ul>
        </div>
        <q-form class="comment-form q-mt-lg" ref="comment-form">
          <q-editor
            ref="qTxtEditor"
            class="q-my-lg comment-editor"
            v-model="comment"
            min-height="240px"
            content-class="text-grey-8 text-comment"
            toolbar-toggle-color="yellow-8"
            :toolbar="[
              ['bold', 'italic'],
              ['undo', 'redo']
            ]"
          />
          <q-btn
            unelevated
            type="submit"
            color="red-6 ls-sm"
            size="16px"
            padding="sm lg"
            label="Post"
          />
        </q-form>
      </div>
    </div>
    <!-- RELATED PRODUCTS -->
    <div class="related">
      <h5 class="ls-sm text-primary">RELATED ITEMS</h5>
      <div class="content">
        <div class="product-list">
          <div
            class="product-item"
            v-for="(product, pidx) in related"
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
                {{ calcPrice(product.baseprice, product.discount[0].percent) }}
              </span>
              <span v-else>{{ product.baseprice }}</span>
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

  .gallery {
    grid-area: gallery;
    min-height: 480px;
  }
  .info {
    grid-area: info;
    border-top: 1px solid rgba(0, 0, 0, 0.12);

    .detail li span {
      font-family: "Source Sans Pro";
    }
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
    font-family: "Source Sans Pro" !important;
    text-align: justify;
  }
}
.comments,
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
.comments .content {
  display: flex;
  align-items: flex-start;
  width: 100%;
  padding: 0 40px;

  .comments-list {
    width: 50%;

    * {
      font-family: "Source Sans Pro" !important;
      line-height: 1.5em !important;
    }
    .level-1 {
      max-width: 720px;
    }
    .level-2 {
      max-width: 720px;
      padding-left: 60px;
    }
    .author {
      font-size: 16px;
      font-weight: 700;
    }
    .message {
      font-size: 15px;
    }
  }

  .comment-form {
    width: 50%;
    max-width: 720px;
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
      transition: transform 0.25s ease-out;
    }

    .product-img:hover {
      transform: translate(2px, 2px);
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
  .comments .content {
    flex-direction: row;
    flex-wrap: wrap-reverse;
    justify-content: center;

    .comments-list,
    .comment-form {
      flex: 1 0 640px;
    }
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
import { mapGetters, mapActions } from "vuex";
import HelperMixin from "../../mixins/helpers";

export default {
  name: "Product",
  mixins: [HelperMixin],
  meta() {
    return {
      title: this.title || "Product"
    };
  },
  preFetch({ store, redirect, currentRoute }) {
    const name = currentRoute.params.seoname;
    return store
      .dispatch("buy/getProductDetails", {
        seoname: name
      })
      .catch(err => {
        if (err.response.status == 404) {
          redirect("/error404");
        } else {
          redirect("/error500");
        }
      });
  },
  watch: {
    $route(to, from) {
      if (to.path !== from.path) {
        // Refresh on route change
        this.getRelatedProducts(4);
      }
    }
  },
  computed: {
    ...mapGetters("buy", ["product", "related"])
  },
  created() {
    this.title = this.product.name;
    this.order.quantity = this.product.minOrderQty;

    // Preselect options if any
    if (!this.isEmpty(this.product.options)) {
      this.product.options.forEach((item, idx) => {
        // default to last item
        this.order.options[idx] = item.choices.slice(-1).pop();
      });
    }
    // Preselect image
    if (!this.isEmpty(this.product.images)) {
      this.selected = this.product.images[0].image;
    }
  },
  mounted() {
    this.getRelatedProducts(4);
  },
  data() {
    return {
      title: "",
      selected: "",
      filter: false,
      opaque: false,
      order: {
        quantity: 0,
        options: [],
        otherVal: []
      },
      comments: [{}, {}, {}],
      comment: "",
      testoptions: [
        { label: "opt1", value: 1 },
        { label: "opt2", value: 2 },
        { label: "opt3", value: 3 }
      ]
    };
  },
  methods: {
    ...mapActions("buy", ["findRelatedProducts"]),

    _findSelected() {
      let thumbnails = this.product.images.slice();
      return thumbnails.findIndex(item => {
        return this.selected === item.image;
      });
    },

    toSelOptions(key, obj) {
      if (obj) {
        return obj.map(item => {
          return {
            label:
              item.value +
              (item.price >= 0
                ? `(+${item.price}  PHP)`
                : `(${item.price} PHP)`),
            value: item,
            key: key
          };
        });
      }
      return obj;
    },

    onSelOption(val) {
      console.log(this.order.options[val]);
    },

    isOtherSelected(obj) {
      if (obj) {
        return obj.value == "Other";
      }

      return false;
    },

    onNextImg(evt) {
      let idx = this._findSelected() + 1;
      let thumbnails = this.product.images.slice();
      if (idx > thumbnails.length - 1) idx = 0; // loop
      this.selected = thumbnails[idx].image;
    },
    onPrevImg(evt) {
      let idx = this._findSelected() - 1;
      let thumbnails = this.product.images.slice();
      if (idx < 0) idx = thumbnails.length - 1; // loop
      this.selected = thumbnails[idx].image;
    },

    getRelatedProducts(limit = 4) {
      if (this.product) {
        this.findRelatedProducts({
          pID: this.product.id,
          limit: limit
        });
      }
    }
  }
};
</script>