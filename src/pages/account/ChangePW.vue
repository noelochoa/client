<template>
  <q-page class="mainpage">
    <!-- NAV -->
    <Navigation v-bind="{ opaque: true }"> </Navigation>
    <!-- Reset PW -->
    <div class="Reset flex text-grey-8">
      <div class="Reset-heading text-grey-8">
        <router-link
          tag="div"
          class=" ls-sm text-uppercase cursor-pointer hover-primary inline-block q-mb-md"
          to="/account"
        >
          Back to Login
        </router-link>
        <h4 class="text-primary ls-sm">Reset Password</h4>
        <p class="text-subtitle1 q-mt-sm">
          Fill out the following to reset your password:
        </p>
        <q-form
          ref="Reset-form"
          class="Reset-form"
          @submit.prevent.stop="onChange"
        >
          <p v-if="resetErr" class="error-msg text-negative bg-red-3 q-py-sm">
            {{ resetErr }}
          </p>
          <q-input
            class="q-mt-lg"
            input-class="text-comment"
            placeholder="E-mail"
            type="email"
            outlined
            dense
            v-model="profile.email"
            lazy-rules
            :rules="[
              val => (val && val.length > 0) || 'Please type your email',
              _isValidEmail
            ]"
          />
          <q-input
            class="q-mt-sm"
            input-class="text-comment text-uppercase ls-sm"
            placeholder="Code"
            outlined
            dense
            v-model="profile.token"
            lazy-rules
            :rules="[
              val =>
                (val !== null && val !== '') || 'Verification code required.',
              val =>
                val.length == 6 || 'Verification code should be 6 characters.'
            ]"
          />
          <q-input
            class="q-mt-sm"
            input-class="text-comment"
            placeholder="New Password (Min. 6 characters)"
            type="password"
            outlined
            dense
            v-model="profile.newpass"
            lazy-rules
            :rules="[
              val =>
                (val && val.length >= 6) ||
                'Please type your new password (6 or more characters).'
            ]"
          />
          <q-btn
            :loading="loading"
            :disable="loading"
            class="full-width q-mt-md"
            unelevated
            type="submit"
            color="red-6 ls-sm"
            size="16px"
            padding="sm lg"
            label="Confirm"
          />
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
.mainpage > div {
  width: 100%;
}
.Reset {
  height: 65vh;
  font-size: 16px;
  margin: 60px auto;
  max-width: 520px;
  padding: 0 80px;

  & > div {
    width: 100%;
  }

  .Reset-form {
    text-align: center;
  }
}
</style>

<script>
import HelperMixin from "../../mixins/helpers";
import Navigation from "../../components/Navigation";

export default {
  name: "Reset",
  mixins: [HelperMixin],
  components: { Navigation },

  meta() {
    return {
      title: "Reset Password"
    };
  },

  computed: {},
  created() {},
  mounted() {},
  data() {
    return {
      resetErr: "",
      loading: false,
      profile: {
        email: "",
        token: "",
        newpass: ""
      }
    };
  },
  methods: {
    _isValidEmail(val) {
      const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(val) || "Invalid email format";
    },

    async onChange() {
      this.resetErr = "";
      this.loading = true;
      try {
        const message = await this.$store.dispatch("auth/changePW", {
          ...this.profile
        });
        this.showNotif("info", message);
        this.$router.push("/profile").catch(err => {});
      } catch (err) {
        this.resetErr = err;
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>
