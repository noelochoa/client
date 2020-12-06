<template>
  <q-page class="mainpage">
    <!-- NAV -->
    <Navigation v-bind="{ opaque: true }"> </Navigation>
    <!-- PROFILE -->
    <div class="profile text-grey-8">
      <div class="profile-heading ">
        <div
          class="logout ls-sm text-uppercase cursor-pointer hover-primary"
          @click="onLogout"
        >
          Logout
        </div>
        <div class="q-my-lg" v-if="user">
          <h4 class="text-primary">Welcome, {{ user.firstname }}!</h4>
          <h6 class="text-capitalize q-my-sm">
            {{ user.type }}
            <span v-if="user.type == 'reseller'">
              {{ user.status.isResellerApproved ? "(Approved)" : "(Pending)" }}
            </span>
          </h6>
          <p v-if="user.status.isVerified" class="q-my-sm">
            Your account has been verified.
          </p>
          <p v-else class="q-my-sm">
            Your account is NOT yet verified. Please check your registered email
            for the verification code or click 'Resend'.
          </p>
          <q-btn
            class="q-mt-sm"
            :loading="loading"
            :disable="loading"
            unelevated
            v-if="!user.status.isVerified"
            color="red-6 ls-sm"
            size="16px"
            padding="sm lg"
            label="Resend"
            @click="resendCode"
          />
        </div>
      </div>
      <div class="profile-details q-mt-lg">
        <div class="section orders">
          <div class="section-label text-uppercase ls-sm">My Orders</div>
          <q-spinner
            size="24px"
            class="block"
            color="primary"
            v-if="fetchingOrders"
          />
          <ul class="order-details text-comment" v-else-if="!isEmpty(orders)">
            <li
              v-for="(order, oidx) in orders"
              :key="'order-' + oidx"
              class="q-my-md q-pb-md flex order-detail"
            >
              <div class="q-mr-md">
                <div class="block text-grey-6">
                  ORDER #
                </div>
                <div>
                  <router-link
                    class="block hover-primary cursor-pointer"
                    :to="'/profile/orders/' + order.id"
                  >
                    {{ order.orderRef }}
                  </router-link>
                </div>
              </div>
              <div class="q-mr-md">
                <div class="block text-grey-6">
                  ORDER STATUS
                </div>
                <div class="block text-capitalize">
                  {{ order.status.status }}
                </div>
              </div>
              <div class="q-mr-md">
                <div class="block text-grey-6">
                  DATE PLACED
                </div>
                <div class="block">
                  {{ toHumanDate(order.created) }}
                </div>
              </div>
              <div class="q-mr-md cursor-pointer">
                <div class="block text-grey-6">
                  SHIPPING TYPE
                </div>
                <div class="block text-capitalize">
                  {{ order.deliveryType }}
                  <q-icon
                    name="keyboard_arrow_down"
                    v-if="order.deliveryType"
                  />
                </div>
                <q-tooltip content-class="q-pa-md detail-tooltip bg-secondary">
                  <div>
                    <span class="block text-grey-6" v-if="order.target">
                      TARGET
                    </span>
                    {{ toHumanDatetime(order.target) }}<br />
                    <span
                      class="block text-grey-6"
                      v-if="order.shippingAddress"
                    >
                      ADDRESS
                    </span>
                    {{ order.shippingAddress }}
                  </div>
                </q-tooltip>
              </div>
              <div class="q-mr-md">
                <div class="block text-grey-6">
                  ORDER TOTAL
                </div>
                <div class="block text-capitalize">{{ order.total }} PHP</div>
              </div>
            </li>
          </ul>
          <ul class="text-details text-comment" v-else>
            <li>You have not placed any orders yet.</li>
          </ul>
        </div>
        <div class="section details">
          <div class="section-label text-uppercase ls-sm">Account Details</div>
          <q-spinner
            size="24px"
            class="block"
            color="primary"
            v-if="fetching"
          />
          <ul class="text-details text-comment" v-else-if="!isEmpty(profile)">
            <li>{{ profile.lastname + " " + profile.firstname }}</li>
            <li>
              <span class="text-italic">{{ profile.email }}</span
              ><br />
              {{ profile.address }}<br />
              {{ profile.phonenumber }}
              <a
                class="hover-primary cursor-pointer"
                @click="verifySMS"
                v-if="!profile.status.isSMSVerified && profile.phonenumber"
              >
                (Verify)
              </a>
              <span v-else-if="profile.phonenumber">(Verified)</span>
            </li>
            <li>
              <span class="block q-mt-md">Order Notifications:</span>
              <q-toggle
                dense
                class="full-width q-py-xs no-pointer-events"
                :value="profile.notification.isEmailAllowed"
                label="Receive by Email allowed"
                color="primary"
              />
              <q-toggle
                dense
                class="full-width q-py-xs no-pointer-events"
                :value="profile.notification.isSMSAllowed"
                label="Receive by SMS allowed"
                color="primary"
              />
            </li>
          </ul>
          <q-btn
            class="q-mt-md edit-btn"
            unelevated
            color="red-6 ls-sm text-edit"
            size="16px"
            padding="sm lg"
            label="Edit"
            :disable="fetching"
            :to="'/profile/edit'"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
.mainpage > div {
  width: 100%;
}
.profile {
  min-height: 720px;
  font-size: 16px;
  max-width: 1420px;
  padding: 0 80px;
  margin: 60px auto;
  margin-bottom: 80px;

  & > div {
    width: 100%;
  }
  .logout {
    display: inline-block;
  }
  .profile-heading {
    margin-bottom: 80px;
  }
}

.profile-details {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 32px;

  .section {
    .section-label {
      line-height: 2.5em;
      width: 100%;
      border-bottom: 1px solid $line;
      margin: 0 0 40px;
    }
  }

  .orders {
    flex: 1 1 680px;

    .order-details {
      line-height: 1.65em;

      .order-detail {
        justify-content: space-between;
        border-bottom: 1px solid $line;
      }
    }
  }

  .details {
    flex-basis: 320px;
    .text-details {
      line-height: 1.65em;
    }
  }
}
</style>

<script>
import HelperMixin from "../../mixins/helpers";
import Navigation from "../../components/Navigation";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Profile",
  mixins: [HelperMixin],
  components: { Navigation },

  preFetch({ store, redirect }) {
    if (!store.getters["auth/isAuthenticated"]) {
      redirect("/account");
    }
  },

  meta() {
    return {
      title: "My Profile"
    };
  },

  computed: {
    user() {
      return this.$store.state.auth.user;
    }
  },
  created() {
    if (process.env.CLIENT) {
      this.getProfile();
      this.getOrders();
    }
  },
  mounted() {},
  data() {
    return {
      loading: false,
      fetching: true,
      fetchingOrders: true,
      profile: {},
      orders: []
    };
  },
  methods: {
    ...mapActions("auth", [
      "fetchProfile",
      "fetchOrders",
      "signout",
      "sendCode",
      "sendSMS"
    ]),
    async getProfile() {
      try {
        const resp = await this.fetchProfile();
        if (resp) {
          this.profile = { ...resp };
        }
      } catch (err) {
        this.$router.push("/account").catch(err => {});
      } finally {
        this.fetching = false;
      }
    },

    async getOrders() {
      try {
        const resp = await this.fetchOrders();
        if (resp) {
          this.orders = resp.slice();
        }
      } catch (err) {
        this.showNotif("negative", err);
      } finally {
        this.fetchingOrders = false;
      }
    },

    async resendCode() {
      try {
        this.loading = true;
        await this.sendCode();
        this.showNotif("info", "Verification code is sent to your email.");
        this.$router.push("/profile/verify").catch(err => {});
      } catch (err) {
        this.showNotif("negative", err);
      } finally {
        this.loading = false;
      }
    },

    async verifySMS() {
      try {
        await this.sendSMS();
        this.showNotif("info", "Verification code is sent to your phone.");
        this.$router.push("/profile/verifySMS").catch(err => {});
      } catch (err) {
        this.showNotif("negative", err);
      }
    },

    async onLogout() {
      try {
        await this.signout();
      } catch (err) {
      } finally {
        this.$router.push("/account").catch(err => {});
      }
    }
  }
};
</script>
