<template>
  <q-page class="mainpage">
    <!-- NAV -->
    <Navigation v-bind="{ opaque: true }"> </Navigation>
    <!-- Basket Items -->
    <div class="basket text-grey-8">
      <div class="basket-heading">
        <h4 class="text-primary text-center ls-sm">Your Basket</h4>
        <p class="q-mt-lg text-center">{{ fetchErr }}</p>
      </div>
      <div v-if="fetching" class="q-mt-lg text-center">
        <q-spinner size="50px" color="primary" />
      </div>
      <div v-else-if="isEmpty(basket) && !fetching" class="q-mt-lg text-center">
        <q-btn
          class="q-mt-lg"
          unelevated
          color="red-6 ls-sm"
          size="16px"
          padding="sm lg"
          label="Go to Shop"
          to="/products"
        />
      </div>
      <div class="basket-details q-mt-lg" v-else>
        <div class="table-header">
          <span class="ls-sm header-item">PRODUCT</span>
          <span class="ls-sm header-item"></span>
          <span class="ls-sm header-item text-center q-px-sm">QTY.</span>
          <span class="ls-sm header-item text-right">PRICE</span>
        </div>
        <div
          class="table-item text-grey-7"
          v-for="(item, pidx) in products"
          :key="'item-' + pidx"
        >
          <div class="product-info product-img">
            <q-img
              :src="
                !isEmpty(item.image)
                  ? resolveAssetsUrl(item.image)
                  : 'https://dummyimage.com/370x370/454345/fafafa.png&text=No+Img'
              "
              native-context-menu
              :ratio="1"
            />
          </div>
          <div class="product-info product-detail ls-sm">
            <router-link
              v-if="item.isActive"
              class="text-h6 text-primary product-link ls-sm overflow-ellipsis"
              :to="'/buy/' + item.seoname"
            >
              {{ item.name }}
            </router-link>
            <div class="text-h6 ls-sm overflow-ellipsis" v-else>
              {{ item.name }}
            </div>
            <div>{{ item.category }}</div>
            <div
              class="options"
              v-for="(opt, idx) in item.options"
              :key="'key-' + idx"
            >
              {{ opt._option + ": " + opt._selected }}
              <span v-if="opt.otherValue != null">({{ opt.otherValue }}) </span
              ><br />
            </div>
          </div>
          <!-- <div class="product-info ls-sm text-center">{{ item.quantity }}</div> -->
          <div class="product-info text-center">
            <q-input
              outlined
              dense
              :value="item.quantity"
              input-style="text-align:center;"
              style="max-width: 140px; margin: 0 auto;"
              @input="onChgQty($event, pidx)"
              :debounce="1000"
            >
              <template v-slot:prepend>
                <q-icon
                  name="remove"
                  class="cursor-pointer"
                  @click="onChgQty(item.quantity - 1, pidx)"
                />
              </template>
              <template v-slot:append>
                <q-icon
                  name="add"
                  class="cursor-pointer"
                  @click="onChgQty(Number.parseInt(item.quantity) + 1, pidx)"
                />
              </template>
            </q-input>
            <q-btn
              flat
              label="remove"
              class="ls-sm no-hover-bg hover-primary q-pd-md"
              :ripple="false"
              @click="onRemove(pidx)"
            />
          </div>
          <div class="product-info product-price text-right ls-sm">
            {{ item.price }} PHP
          </div>
        </div>
      </div>
      <div class="table-footer" v-if="!isEmpty(basket) && !fetching">
        <div class="footer-item">
          <span class="ls-sm text-primary">TOTAL: </span>
          <span class="ls-sm text-primary">{{ total }} PHP</span>
          <p>
            Displayed total have all discounts applied (if any).
          </p>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
.mainpage > div {
  width: 100%;
}
.basket {
  min-height: 65vh;
  font-size: 16px;
  max-width: 1200px;
  margin: 60px auto;
  padding: 0 80px;

  & > div {
    width: 100%;
  }
}
.basket-details {
  display: table;
  table-layout: auto;
  border-spacing: 0 30px;
  width: 100%;

  .table-header {
    display: table-header-group;

    .header-item {
      display: table-cell;
      padding-bottom: 10px;
      border-bottom: 1px solid $line;
    }
  }
  .table-item {
    display: table-row;
    margin: 30px 0;
    width: 100%;

    .product-info {
      display: table-cell;
      vertical-align: middle;
    }
    .product-img {
      width: 100px;
    }
    .product-detail {
      width: 440px;
      max-width: 440px;
      padding-left: 30px;
    }
    .product-price {
      width: 120px;
    }
    .options {
      font-size: 14px;
    }
  }
}
.table-footer {
  display: table;
  table-layout: auto;
  border-spacing: 0 30px;
  width: 100%;
  border-top: 1px solid $line;

  .footer-item {
    display: table-cell;
    vertical-align: middle;
    text-align: right;
    width: 100%;
  }
}
.overflow-ellipsis {
  display: block;
  max-width: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
}
@media (max-width: 600px) {
  .basket {
    padding: 0 20px;
  }
}
</style>

<script>
import HelperMixin from "../../mixins/helpers";
import Navigation from "../../components/Navigation";

export default {
  name: "basket",
  mixins: [HelperMixin],
  components: { Navigation },

  meta() {
    return {
      title: "Your Basket"
    };
  },

  computed: {
    // Basket items
    products() {
      if (!this.isEmpty(this.basket)) {
        let target = this.$store.getters["auth/isReseller"]
          ? "reseller"
          : "all";

        const ret = this.basket.products.map(item => {
          let discounts = item.product.discount
            ? item.product.discount.filter(
                el => el.target == target || el.target == "all"
              )
            : [];

          // Use largest discount
          discounts.sort((a, b) => {
            return b.percent - a.percent;
          });

          let subprice = item.quantity * item.product.basePrice;
          // Find option price
          item.options.forEach(itemOpt => {
            const optionGrp = item.product.options.find(selOpt => {
              return selOpt.attribute == itemOpt._option;
            });
            const choice = optionGrp.choices.find(selChoice => {
              return selChoice.value == itemOpt._selected;
            });
            subprice += item.quantity * choice.price;
          });

          return {
            id: item.product._id,
            isActive: item.product.isActive,
            name: item.product.name,
            seoname: item.product.seoname,
            category: item.product.category.name,
            description: item.product.description,
            details: item.product.details,
            minOrderQty: item.product.minOrderQuantity,
            options: item.options,
            quantity: item.quantity,
            price: !this.isEmpty(discounts)
              ? this.calcPrice(subprice, discounts[0].percent)
              : subprice,
            image: this._selectFirstImg(item.product.images)
          };
        });
        return ret;
      }
      return [];
    },

    total() {
      const reducer = (total, item) => total + Number.parseInt(item.price);
      return !this.isEmpty(this.products)
        ? this.products.reduce(reducer, 0)
        : "0";
    }
  },
  created() {
    if (process.env.CLIENT) {
      this.getCartDetails();
    }
  },
  mounted() {},
  data() {
    return {
      fetchErr: "",
      loading: false,
      fetching: true,
      basket: {}
    };
  },
  methods: {
    _selectFirstImg(imgs) {
      if (!this.isEmpty(imgs)) {
        const retImg = imgs[0];
        if (retImg) return retImg.image;
      }
      return false;
    },

    async onChgQty(val, key) {
      try {
        const item = this.basket.products[key];
        const prev = this.basket.products[key].quantity;

        const min = item.product.minOrderQuantity;
        if (min <= val && val <= 100) {
          this.basket.products[key].quantity = val;
        } else {
          this.basket.products[key].quantity = min;
        }

        if (prev == this.basket.products[key].quantity) return;

        await this.$store.dispatch("basket/updateCart", {
          product: {
            product: item.product._id,
            quantity: item.quantity,
            options: item.options
          }
        });
      } catch (err) {
        console.log(err);
        this.fetchErr = "Could not update basket items. " + err;
      }
    },

    async onRemove(key) {
      try {
        const item = this.basket.products[key];
        await this.$store.dispatch("basket/updateCart", {
          product: {
            product: item.product._id,
            quantity: 0,
            options: item.options
          }
        });
        this.$delete(this.basket.products, key);
        if (this.basket.products.length == 0) {
          this.fetchErr = "No items on your shopping basket.";
          this.basket = {};
        }
      } catch (err) {
        this.fetchErr = "Could not update basket items. " + err;
      }
    },

    async getCartDetails() {
      try {
        const resp = await this.$store.dispatch("basket/fetchCartDetails");
        if (resp) {
          this.basket = JSON.parse(JSON.stringify(resp));
          this.fetching = false;
        } else {
          this.fetchErr = "No items on your shopping basket.";
        }
      } catch (err) {
        this.fetchErr = err;
      } finally {
        this.fetching = false;
      }
    }
  }
};
</script>
