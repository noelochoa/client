<template>
  <q-page class="mainpage">
    <!-- NAV -->
    <Navigation v-bind="{ opaque: true }"> </Navigation>
    <!-- CHECKOUT FORM -->
    <div class="checkout text-grey-8">
      <div class="basket-heading">
        <h4 class="text-primary text-center ls-sm">Checkout</h4>
        <p class="q-mt-lg text-center">{{ fetchErr }}</p>
      </div>
      <div v-if="fetching" class="q-mt-lg text-center">
        <q-spinner size="50px" color="primary" />
      </div>
      <div v-else>
        {{ basket }}
      </div>
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
.mainpage > div {
  width: 100%;
}
.checkout {
  min-height: 65vh;
  font-size: 16px;
  max-width: 1200px;
  margin: 60px auto;
  padding: 0 80px;

  & > div {
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
