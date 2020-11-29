<template>
  <q-page class="mainpage">
    <!-- NAV -->
    <Navigation v-bind="{ opaque: true }"> </Navigation>
    <!-- VERIFY -->
    <div class="verify flex text-grey-8">
      <div class="verify-heading text-grey-8">
        <router-link
          tag="div"
          class=" ls-sm text-uppercase cursor-pointer hover-primary inline-block q-mb-md"
          to="/profile"
        >
          Back to Profile
        </router-link>
        <h4 class="text-primary ls-sm">Verify Account</h4>
        <p class="text-subtitle1 q-mt-sm">Fill out your information below:</p>
        <q-form
          ref="verify-form"
          class="verify-form"
          @submit.prevent.stop="onVerify"
        >
          <p v-if="verifyErr" class="error-msg text-negative bg-red-3 q-py-sm">
            {{ verifyErr }}
          </p>
          <q-input
            class="q-mt-lg"
            input-class="text-comment"
            placeholder="E-mail"
            type="email"
            outlined
            dense
            :readonly="!!user"
            v-model="verify.email"
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
            v-model="verify.token"
            lazy-rules
            :rules="[
              val =>
                (val !== null && val !== '') || 'Verification code required.',
              val =>
                val.length == 6 || 'Verification code should be 6 characters.'
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
            label="Verify"
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
.verify {
  height: 65vh;
  font-size: 16px;
  margin: 60px auto;
  max-width: 520px;
  padding: 0 80px;

  & > div {
    width: 100%;
  }

  .verify-form {
    text-align: center;
  }
}
</style>

<script>
import HelperMixin from "../../mixins/helpers";
import Navigation from "../../components/Navigation";

export default {
  name: "Verify",
  mixins: [HelperMixin],
  components: { Navigation },

  meta() {
    return {
      title: "Verify Account"
    };
  },

  computed: {
    user() {
      if (this.$store.getters["auth/isAuthenticated"]) {
        return this.$store.state.auth.user;
      }
      return false;
    }
  },
  created() {
    if (this.user) {
      this.verify.email = this.user.email;
    }
  },
  mounted() {},
  data() {
    return {
      verifyErr: "",
      loading: false,
      verify: {
        token: "",
        email: ""
      }
    };
  },
  methods: {
    _isValidEmail(val) {
      const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(val) || "Invalid email format";
    },

    async onVerify() {
      this.loading = true;
      try {
        const message = await this.$store.dispatch("auth/verify", {
          ...this.verify
        });
        this.showNotif("positive", message);
        this.$router.push("/profile").catch(err => {});
      } catch (err) {
        this.verifyErr = err;
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>
