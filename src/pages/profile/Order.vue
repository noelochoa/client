<template>
  <q-page class="mainpage">
    <!-- NAV -->
    <Navigation v-bind="{ opaque: true }"> </Navigation>
    <!-- ORDER -->
    <div class="order text-grey-8">
      <div class="order-heading">
        <router-link
          tag="div"
          class=" ls-sm text-uppercase cursor-pointer hover-primary inline-block q-mb-md"
          to="/profile"
        >
          Back to Profile
        </router-link>
        <h4 class="text-primary ls-sm">Order Details</h4>
        <p class="text-subtitle1 q-mt-sm text-grey-7">
          <span>#{{ order.orderRef }}</span> placed at
          {{ toHumanDatetime(order.created) }}.
          <span class="block text-h6 text-capitalize text-primary">
            {{ order.statusName }}
          </span>
        </p>
        <p>
          Shipping Type:
          <span class="block text-capitalize">{{ order.deliveryType }}</span>
          Target:
          <span class="block text-capitalize">
            {{ toHumanDatetime(order.target) }}
          </span>
          <span class=" text-capitalize" v-if="order.shippingAddress">
            {{ order.shippingAddress }}<br />
          </span>
        </p>
      </div>
      <div class="order-details">
        <div class="table-header">
          <span class="ls-sm header-item">PRODUCT</span>
          <span class="ls-sm header-item"></span>
          <span class="ls-sm header-item text-center q-px-sm">QTY.</span>
          <span class="ls-sm header-item text-right">PRICE</span>
        </div>
        <div
          class="table-item text-grey-7"
          v-for="(item, idx) in order.products"
          :key="'product' + idx"
        >
          <div class="product-info product-img">
            <q-img
              :src="
                !isEmpty(item.product.images)
                  ? resolveAssetsUrl(_selectFirstImg(item.product.images))
                  : 'https://dummyimage.com/370x370/454345/fafafa.png&text=No+Img'
              "
              native-context-menu
              :ratio="1"
            />
          </div>
          <div class="product-info product-detail ls-sm">
            <router-link
              v-if="item.product.isActive"
              class="text-h6 text-primary product-link ls-sm overflow-ellipsis"
              :to="'/buy/' + item.product.seoname"
            >
              {{ item.product.name }}
            </router-link>
            <div class="text-h6 ls-sm overflow-ellipsis" v-else>
              {{ item.product.name }}
            </div>
            <div>{{ item.product.category.name }}</div>
            <div
              class="options"
              v-for="opt in item.options"
              :key="'key-' + opt._option"
            >
              {{ opt._option + ": " + opt._selected }}
              <span v-if="opt.otherValue != null">({{ opt.otherValue }}) </span
              ><br />
            </div>
          </div>
          <div class="product-info ls-sm text-center">{{ item.quantity }}</div>
          <div class="product-info text-right ls-sm">
            {{ item.finalPrice || item.price }} PHP
          </div>
        </div>
      </div>
      <div class="table-footer">
        <div class="footer-item">
          <span class="ls-sm text-primary">TOTAL: </span>
          <span class="ls-sm text-primary">{{ order.total }} PHP</span>
          <p>
            Displayed total have all discounts applied (if any) at order date.
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
.order {
  min-height: 65vh;
  font-size: 16px;
  max-width: 1200px;
  margin: 60px auto;
  padding: 0 80px;

  & > div {
    width: 100%;
  }
}
.order-details {
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
  .order {
    padding: 0 20px;
  }
}
</style>

<script>
import HelperMixin from "../../mixins/helpers";
import Navigation from "../../components/Navigation";

export default {
  name: "Order",
  mixins: [HelperMixin],
  components: { Navigation },

  meta() {
    return {
      title: "Order Details"
    };
  },

  computed: {},
  created() {
    if (process.env.CLIENT) {
      this.getOrderDetails();
    }
  },
  mounted() {},
  data() {
    return {
      fetchErr: "",
      loading: false,
      fetching: true,
      order: {}
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

    async getOrderDetails() {
      try {
        const resp = await this.$store.dispatch("auth/fetchOrderDetails", {
          orderID: this.$route.params.orderID
        });
        if (resp) {
          this.order = JSON.parse(JSON.stringify(resp));
          this.fetching = false;
        } else {
          this.showNotif("warning", "No response received.");
        }
      } catch (err) {
        this.fetchErr = err;
        this.showNotif(
          "warning",
          "An error has occurred. Could not retrieve order details."
        );
        //this.$router.push("/profile").catch(err => {});
      }
    }
  }
};
</script>
