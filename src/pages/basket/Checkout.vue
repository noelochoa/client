<template>
  <q-page class="mainpage">
    <!-- NAV -->
    <Navigation v-bind="{ opaque: true }"> </Navigation>
    <!-- CHECKOUT FORM -->
    <div class="checkout text-grey-8 flex">
      <div class="checkout-heading">
        <h4 class="text-primary text-center ls-sm">Checkout</h4>
        <p class="q-mt-lg text-center">{{ checkOutErr }}</p>
        <p class="text-subtitle1 q-mt-sm">Fill out your information below:</p>
        <q-form
          class="checkout-form text-field"
          @submit.prevent.stop="onSubmit"
        >
          <div v-if="fetching || fetchingProfile" class="q-mt-lg">
            <q-spinner size="50px" color="primary" />
          </div>
          <div v-else>
            <ul class="form-items">
              <li>
                <span class="field-heading text-weight-bold block"
                  >Contact Information
                </span>
                <span class="field-value">
                  {{ user.firstname + " " + user.lastname }} ({{ user.email }})
                </span>
              </li>
              <li class="q-mt-md">
                <span class="field-heading text-weight-bold q-mt-sm block"
                  >Shipping</span
                >
              </li>
              <li>
                <q-select
                  class="field-value"
                  label="Delivery Type"
                  v-model="order.deliveryType"
                  :options="deliveryTypes"
                  outlined
                  no-error-icon
                  bg-color="white"
                  emit-value
                  map-options
                  lazy-rules
                  :rules="[_isValidType]"
                />
              </li>
              <li>
                <span class="field-name q-mt-sm block">Address</span>
                <q-input
                  type="textarea"
                  :rows="4"
                  textarea
                  no-error-icon
                  outlined
                  placeholder="Type address here..."
                  class="field-value"
                  bg-color="white"
                  v-model="order.shippingAddress"
                  lazy-rules
                  :rules="[
                    val =>
                      (val !== null && val.trim() !== '') ||
                      'Address is required.',
                    val =>
                      (val !== null && val.length <= 500) ||
                      'Max 500 characters.'
                  ]"
                />
              </li>
              <li>
                <span class="field-label q-mr-xs">Target Date</span>
                <q-icon size="17px" name="help" class="cursor-pointer q-mb-xs">
                  <q-tooltip
                    anchor="top middle"
                    self="bottom middle"
                    content-class="bg-primary text-accent text-caption"
                  >
                    Select your desired date for pickup or delivery.
                  </q-tooltip>
                </q-icon>
                <q-input
                  outlined
                  no-error-icon
                  bg-color="white"
                  class="field-value"
                  v-model="order.target"
                  :rules="[
                    val => val !== null && val.trim() !== '',
                    _isValidDatetime
                  ]"
                >
                  <template v-slot:prepend>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy
                        ref="qDateProxyS"
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        <q-date
                          no-unset
                          v-model="order.target"
                          mask="YYYY-MM-DD HH:mm"
                          @input="() => $refs.qDateProxyS.hide()"
                        />
                      </q-popup-proxy>
                    </q-icon>
                  </template>

                  <template v-slot:append>
                    <q-icon name="access_time" class="cursor-pointer">
                      <q-popup-proxy
                        ref="qTimeProxyS"
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        <q-time
                          dark
                          v-model="order.target"
                          mask="YYYY-MM-DD HH:mm"
                          format24h
                          @input="() => $refs.qTimeProxyS.hide()"
                        />
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
              </li>
              <li>
                <span class="field-name q-mt-sm block"
                  >Special instructions</span
                >
                <q-input
                  type="textarea"
                  :rows="4"
                  textarea
                  outlined
                  no-error-icon
                  placeholder="Type here..."
                  bg-color="white"
                  class="field-value"
                  v-model="order.memo"
                />
              </li>
            </ul>
          </div>
          <q-btn
            :loading="loading"
            :disable="loading"
            class="q-mt-lg block submit-btn"
            style="margin-left: auto;"
            unelevated
            type="submit"
            color="red-6 ls-sm"
            size="16px"
            padding="sm lg"
            label="Place Order"
          />
        </q-form>
      </div>

      <!-- CART ITEMS -->
      <div class="cart text-field">
        <div
          class="text-grey-7 flex cart-item"
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
          <div class="product-info ls-sm product-title">
            <div class="ls-sm text-weight-bold overflow-ellipsis">
              {{ item.name }}
            </div>
            <div
              class="options text-caption"
              v-for="(opt, idx) in item.options"
              :key="'key-' + idx"
            >
              {{ opt._option + ": " + opt._selected }}
              <span v-if="opt.otherValue != null">({{ opt.otherValue }}) </span
              ><br />
            </div>
          </div>
          <div
            class="product-info text-weight-bold product-price text-right ls-sm"
          >
            {{ item.price }} PHP
          </div>
        </div>
        <div
          class="cart-item bordered text-h6 text-dark"
          v-if="!isEmpty(basket) && !fetching"
        >
          <div class="product-info">Total</div>
          <div class="product-info"></div>
          <div class="product-info text-right text-weight-bold">
            {{ total }} PHP
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

.checkout {
  min-height: 80vh;
  font-size: 16px;
  max-width: 1200px;
  margin: 60px auto;
  padding: 0 40px;
  gap: 40px;

  & > div {
    width: 100%;
  }

  .checkout-heading {
    flex: 0 0 560px;
    padding-right: 40px;
    border-right: 1px solid $line;
  }

  .field-heading {
    line-height: 2em;
  }

  .cart {
    flex: 0 0 480px;
    display: table;
    table-layout: auto;
    margin-top: 50px;
    border-collapse: collapse;
  }

  .cart-item {
    display: table-row;

    .product-info {
      display: table-cell;
      vertical-align: middle;
      padding: 10px 16px 20px 0;
    }

    .product-price {
      width: 120px;
    }
    .product-img {
      width: 100px;
    }

    .product-title {
      max-width: 260px;
    }
  }

  .bordered {
    border-top: 1px solid $line;
  }
}

.overflow-ellipsis {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

@media (max-width: 1182px) {
  .checkout {
    padding: 0 20px;
  }
  .checkout-heading,
  .cart {
    margin: 0 auto;
    padding-right: 0 !important;
    border-right: none !important;
    flex: 0 1 720px !important;
  }
}
</style>

<script>
import HelperMixin from "../../mixins/helpers";
import Navigation from "../../components/Navigation";

export default {
  name: "Checkout",
  mixins: [HelperMixin],
  components: { Navigation },
  preFetch({ store, redirect, currentRoute }) {
    if (!store.getters["basket/itemsCount"]) {
      return redirect("/basket");
    }
    if (!store.getters["auth/isAuthenticated"]) {
      return redirect("/account?ref=" + currentRoute.path);
    }
  },

  meta() {
    return {
      title: "Checkout"
    };
  },
  computed: {
    // User profile
    user() {
      return this.$store.state.auth.user;
    },

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
      this.getProfile();
    }
  },

  mounted() {},

  data() {
    return {
      checkOutErr: "",
      loading: false,
      fetching: true,
      fetchingProfile: true,
      deliveryTypes: [
        {
          label: "For Delivery",
          value: "delivery"
        },
        {
          label: "For Pickup",
          value: "pickup"
        }
      ],
      basket: {},
      profile: {},
      order: {
        deliveryType: null,
        shippingAddress: "",
        target: null,
        products: [],
        memo: ""
      }
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

    _isValidType(val) {
      if (
        !(
          this.order.deliveryType &&
          this.deliveryTypes &&
          this.deliveryTypes.length > 0
        )
      ) {
        return "Please choose one.";
      }

      const typeItem = this.deliveryTypes.find(option => {
        return option.value === this.order.deliveryType;
      });

      if (!typeItem) return "Please choose one.";

      return true;
    },

    _isValidDatetime(val) {
      const dtpattern = /^\d{4}-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01]) (0?[0-9]|1[0-9]|2[0-3]):([0-9]|[0-5][0-9])$/g;
      return dtpattern.test(val) || "Invalid date & time format";
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
        this.checkOutErr = "Could not update basket items. " + err;
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
          this.checkOutErr = "No items on your shopping basket.";
          this.basket = {};
        }
      } catch (err) {
        this.checkOutErr = "Could not update basket items. " + err;
      }
    },

    async getCartDetails() {
      try {
        const resp = await this.$store.dispatch("basket/fetchCartDetails");
        if (resp) {
          this.basket = JSON.parse(JSON.stringify(resp));
        } else {
          this.checkOutErr = "No items on your shopping basket.";
        }
      } catch (err) {
        this.checkOutErr = err;
      } finally {
        this.fetching = false;
      }
    },

    async getProfile() {
      try {
        const resp = await this.$store.dispatch("auth/fetchProfile");
        if (resp) {
          this.profile = { ...resp };
          this.order.shippingAddress = this.profile.address;
        }
      } catch (err) {
        this.$router.push("/account").catch(err => {});
      } finally {
        this.fetchingProfile = false;
      }
    },

    async onSubmit() {
      return false;
    }
  }
};
</script>
