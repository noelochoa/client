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
        <div class="q-my-lg">
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
          <ul class="text-details text-comment">
            <li v-if="isEmpty(orders)">You have not placed any orders yet.</li>
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
  min-height: 640px;
  font-size: 16px;
  margin: 60px auto;
  max-width: 1420px;
  padding: 0 80px;

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
  gap: 20px;

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
    }
  },
  mounted() {},
  data() {
    return {
      loading: false,
      fetching: true,
      profile: {},
      orders: []
    };
  },
  methods: {
    ...mapActions("auth", ["fetchProfile", "signout", "sendCode", "sendSMS"]),
    async getProfile() {
      try {
        const resp = await this.fetchProfile();
        if (resp) {
          this.profile = { ...resp };
        }
        this.fetching = false;
      } catch (err) {
        this.$router.push("/account").catch(err => {});
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
        this.profile = {};
        this.$router.push("/account").catch(err => {});
      }
    }
  }
};
</script>
