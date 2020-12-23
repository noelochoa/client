<template>
  <q-page class="mainpage">
    <!-- NAV -->
    <Navigation v-bind="{ opaque: true }"> </Navigation>
    <!-- CHECKOUT FORM -->
    <div class="checkout text-grey-8 flex">
      <div class="checkout-heading">
        <h4 class="text-primary text-center ls-sm">Checkout</h4>
        <p
          v-if="checkOutErr"
          class="error-msg text-negative text-center bg-red-3 q-py-sm"
        >
          {{ checkOutErr }}
        </p>
        <p class="text-subtitle1 q-mt-sm">Fill out your information below:</p>
        <q-form class="checkout-form" @submit.prevent.stop="onSubmit">
          <div v-if="fetching || fetchingProfile" class="q-mt-lg">
            <q-spinner size="50px" color="primary" />
          </div>
          <div v-else>
            <ul class="form-items text-field">
              <li>
                <span class="field-heading text-weight-bold block"
                  >Contact Information
                </span>
                <q-avatar color="primary" text-color="white">
                  {{ user.firstname.substring(0, 1) }}
                </q-avatar>
                <router-link
                  to="/account"
                  class="q-ml-sm field-value hover-primary"
                >
                  {{ user.firstname + " " + user.lastname }} ({{ user.email }})
                </router-link>
              </li>
              <li class="q-mt-md">
                <span class="field-heading text-weight-bold q-mt-sm q-mr-xs">
                  Shipping
                </span>
                <q-icon
                  v-if="order.deliveryType == 'pickup'"
                  size="17px"
                  name="help"
                  class="cursor-pointer q-mb-xs"
                >
                  <q-tooltip
                    anchor="top middle"
                    self="bottom middle"
                    content-class="bg-primary text-white text-caption"
                  >
                    Pickup on our main store. (Sawali Restaurant)
                  </q-tooltip>
                </q-icon>
              </li>
              <li class="q-mt-sm">
                <q-select
                  class="field-value"
                  label="Delivery Method"
                  v-model="order.deliveryType"
                  :options="deliveryTypes"
                  outlined
                  no-error-icon
                  hide-bottom-space
                  bg-color="white"
                  emit-value
                  map-options
                  lazy-rules
                  :rules="[_isValidType]"
                  @input="onSelDelType"
                />
              </li>
              <li class="q-mt-sm" v-if="order.deliveryType == 'delivery'">
                <span class="field-name block">Address</span>
                <q-input
                  type="textarea"
                  :rows="4"
                  textarea
                  no-error-icon
                  hide-bottom-space
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
              <li class="q-mt-sm">
                <span class="field-label q-mr-xs">Target Date</span>
                <q-icon size="17px" name="help" class="cursor-pointer q-mb-xs">
                  <q-tooltip
                    anchor="top middle"
                    self="bottom middle"
                    content-class="bg-primary text-white text-caption"
                  >
                    Select your desired date for pickup or delivery.
                  </q-tooltip>
                </q-icon>
                <q-input
                  outlined
                  no-error-icon
                  hide-bottom-space
                  bg-color="white"
                  class="field-value"
                  placeholder="Click the icons to select date..."
                  v-model="order.target"
                  lazy-rules
                  :rules="[
                    val =>
                      (val !== null && val.trim() !== '') || 'Date required.',
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
                          :navigation-min-year-month="today.yyyymm"
                          :options="optionsFn"
                          :events="worklistFn"
                          :event-color="workColorFn"
                          v-model="order.target"
                          mask="YYYY-MM-DD HH:mm"
                          @input="onSelDate"
                          @navigation="onNavigate"
                        />
                        <q-inner-loading :showing="fetchingDates">
                          <q-spinner color="primary" size="50px" />
                        </q-inner-loading>
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
                          v-model="order.target"
                          :minute-options="[0, 15, 30, 45]"
                          mask="YYYY-MM-DD HH:mm"
                          format24h
                          @input="onSelTime"
                        />
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
              </li>
              <li class="q-mt-sm">
                <span class="field-name block">Special Instructions</span>
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
      <div class="cart-wrapper">
        <router-link
          tag="div"
          class=" ls-sm text-uppercase cursor-pointer hover-primary inline-block q-mb-md"
          to="/basket"
        >
          Back to Cart
        </router-link>
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
              >
                <q-badge class="small-badge" color="primary">{{
                  item.quantity
                }}</q-badge>
              </q-img>
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
                <span v-if="opt.otherValue != null"
                  >({{ opt.otherValue }}) </span
                ><br />
              </div>
            </div>
            <div
              class="product-info text-weight-bold product-price text-right ls-sm"
            >
              {{ item.price }} PHP<br />
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
        <div>
          <div class="text-comment relative">
            <h6>Order Fulfillment Prediction*:</h6>
            <p v-if="loading">
              <q-spinner color="grey-8" size="40px" />
            </p>
            <p v-else-if="target_eval">
              <span class="block" v-html="target_eval"></span>
              <br />Your order's estimated mimimum lead time is
              <b>{{ basket.eta }} hours</b>. <br />(Order preparation starts 1-2
              days prior to your target) <br /><span class="text-caption">
                * The given estimate is an automated prediction feature of this
                system.
              </span>
            </p>
            <p v-else>
              Fill out the form to evaluate your order's ETA.
            </p>
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

  .cart-wrapper {
    flex: 0 0 480px;
    margin-top: 10px;
  }

  .cart {
    width: 100%;
    display: table;
    table-layout: auto;
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
    flex-direction: column-reverse;
  }
  .checkout-heading,
  .cart-wrapper {
    margin: 0 auto;
    max-width: 720px;
    padding-right: 0 !important;
    border-right: none !important;
    flex: 0 1 auto !important;
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
    },

    holidayList() {
      const dayList = new Set();
      this.holidays.map(item => {
        const start = this.findMaxDt(item.start, this.startOfMonth);
        const end = this.findMinDt(item.end, this.endOfMonth);
        for (
          let dt = start;
          dt.getTime() <= end.getTime();
          dt.setDate(dt.getDate() + 1)
        ) {
          dayList.add(this.toQDateFormat(dt));
        }
      });
      return [...dayList];
    },

    workList() {
      return this.workload.map(item => item._id);
    },

    target_eval() {
      if (!this.order.deliveryType || !this.order.target) return "";
      if (!this.isDaysAhead(this.order.target, 2)) return "";

      if (this.basket.eta && this.basket.stdER) {
        const type =
          this.order.deliveryType == "delivery" ? "delivered" : "picked up";
        // Within range
        if (this.basket.eta < 72) {
          return `<b>Looks good!</b> Your order can be ${type} at your desired schedule.`;
        } else {
          return `Sorry, your order may NOT be completed by your target date.<br/>
          Choose a less busy schedule or consider splitting your order.<br/>
          You may also continue placing your order and wait for the owner's decision.`;
        }
      }
      return "";
    }
  },

  created() {
    if (process.env.CLIENT) {
      this.getCartDetails();
      this.getProfile();
      this.getBusinessHolidays();
    }
  },

  mounted() {
    // this.order.target = this.today.yyyymmdd + " 00:00";
    this.startOfMonth = this.startDayOfMonth;
    this.endOfMonth = this.lastDayOfMonth;
  },

  data() {
    return {
      checkOutErr: "",
      loading: false,
      fetching: true,
      fetchingProfile: true,
      fetchingDates: true,
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
      startOfMonth: null,
      endOfMonth: null,
      holidays: [],
      workload: [],
      basket: {},
      profile: {},
      order: {
        deliveryType: null,
        shippingAddress: "",
        target: null,
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
      const fmt = dtpattern.test(val);
      if (!fmt) "Invalid date & time format";

      return (
        this.isDaysAhead(val, 2) ||
        "Please choose a future date. (at least 2 days in advance)"
      );
    },

    optionsFn(date) {
      return date > this.today.date && this.holidayList.indexOf(date) === -1;
    },

    worklistFn(date) {
      return date > this.today.date && this.workList.indexOf(date) !== -1;
    },

    workColorFn(date) {
      const item = this.workload[this.workList.indexOf(date)];
      return item && item.ordersNum >= 3 ? "primary" : "orange";
    },

    onSelTime(val, details) {
      if (details.year < this.today.year) {
        this.order.target =
          this.today.yyyymmdd + " " + details.hour + ":" + details.minute;
      }
      this.$refs.qTimeProxyS.hide();
    },

    async onSelDelType(val) {
      this.$refs.qDateProxyS.hide();

      try {
        this.checkOutErr = "";
        this.loading = true;
        const resp = await this.$store.dispatch("basket/checkETA", {
          target: this.order.target,
          type: val
        });
        this.basket.eta = resp;
      } catch (err) {
        this.checkOutErr = err;
      } finally {
        this.loading = false;
      }
    },

    async onSelDate(val, reason, details) {
      this.$refs.qDateProxyS.hide();
      if (!this.order.target || !this.order.deliveryType) return;
      try {
        this.checkOutErr = "";
        this.loading = true;
        const resp = await this.$store.dispatch("basket/checkETA", {
          target: val,
          type: this.order.deliveryType
        });
        this.basket.eta = resp;
      } catch (err) {
        this.checkOutErr = err;
      } finally {
        this.loading = false;
      }
    },

    async getBusinessHolidays(year = null, month = null) {
      try {
        this.checkOutErr = "";
        this.fetchingDates = true;
        const resp = await this.$store.dispatch("basket/fetchHolidays", {
          year,
          month
        });
        if (resp) {
          this.holidays = resp.holidays.slice();
          this.workload = resp.worklist.slice();
        }
      } catch (err) {
        this.checkOutErr = err;
      } finally {
        this.fetchingDates = false;
      }
    },

    async getCartDetails() {
      try {
        this.checkOutErr = "";
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

    async onNavigate(view) {
      try {
        const d = new Date(view.year, view.month - 1);
        this.startOfMonth = new Date(d.getFullYear(), d.getMonth(), 1);
        this.endOfMonth = new Date(d.getFullYear(), d.getMonth() + 1, 0);

        this.getBusinessHolidays(view.year, view.month);
      } catch (err) {
        this.checkOutErr = err;
      }
    },

    async onSubmit() {
      try {
        this.checkOutErr = "";
        this.loading = true;
        await this.$store.dispatch("basket/placeOrder", {
          order: this.order,
          price: this.total
        });
        this.showNotif(
          "info",
          "Order has been placed and subject for approval."
        );
        this.$router.push("/account").catch(err => {});
      } catch (err) {
        this.checkOutErr = err;
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>
