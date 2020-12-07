<template>
  <q-page class="mainpage">
    <!-- NAV -->
    <Navigation v-bind="{ opaque: true }"> </Navigation>

    <!-- LOGIN/REGISTER PAGE -->
    <div class="grid">
      <div class="separator-div">
        <h5 class="ls-sm text-primary">- or -</h5>
      </div>
      <div class="login text-grey-8">
        <h5 class="ls-sm text-primary">LOGIN</h5>
        <p class="text-subtitle1">Enter your e-mail and password:</p>
        <q-form ref="login-form" @submit.prevent.stop="onLogin">
          <p v-if="loginErr" class="error-msg text-negative bg-red-3 q-py-sm">
            {{ loginErr }}
          </p>
          <q-input
            class="q-mt-lg"
            input-class="text-comment"
            placeholder="E-mail"
            type="email"
            outlined
            dense
            v-model="login.email"
            lazy-rules
            :rules="[
              val => (val && val.length > 0) || 'Please type your email',
              _isValidEmail
            ]"
          />
          <q-input
            class="q-mt-sm"
            input-class="text-comment"
            placeholder="Password"
            type="password"
            outlined
            dense
            v-model="login.password"
            lazy-rules
            :rules="[
              val =>
                (val !== null && val !== '') || 'Please type your password',
              val =>
                val.length >= 6 || 'Password should have 6 or more characters'
            ]"
          />
          <q-btn
            :loading="loading"
            :disable="loading"
            class="full-width q-my-md"
            unelevated
            type="submit"
            color="red-6 ls-sm"
            size="16px"
            padding="sm lg"
            label="Login"
          />
          <router-link to="/account/reset" class="hover-dark">
            Forgot your Password? Click to reset.
          </router-link>
        </q-form>
      </div>
      <div class="register text-grey-8">
        <h5 class="ls-sm text-primary">REGISTER</h5>
        <p class="text-subtitle1">Fill out your information below:</p>
        <q-form ref="register-form" @submit.prevent.stop="onRegister">
          <p
            v-if="registerErr"
            class="error-msg text-negative bg-red-3 q-py-sm"
          >
            {{ registerErr }}
          </p>
          <q-input
            class="q-mt-lg"
            input-class="text-comment"
            placeholder="First name"
            type="text"
            outlined
            dense
            v-model="register.firstname"
            lazy-rules
            :rules="[
              val =>
                (val !== null && val !== '') || 'Please enter your first name.'
            ]"
          />
          <q-input
            class="q-mt-sm"
            input-class="text-comment"
            placeholder="Last name"
            type="text"
            outlined
            dense
            v-model="register.lastname"
            lazy-rules
            :rules="[
              val =>
                (val !== null && val !== '') || 'Please enter your last name.'
            ]"
          />
          <q-input
            class="q-mt-sm"
            input-class="text-comment"
            placeholder="E-mail"
            type="email"
            outlined
            dense
            v-model="register.email"
            lazy-rules
            :rules="[
              val => (val && val.length > 0) || 'Please type your email',
              _isValidEmail
            ]"
          />
          <q-input
            class="q-mt-sm"
            input-class="text-comment"
            placeholder="Password"
            type="password"
            outlined
            dense
            v-model="register.password"
            lazy-rules
            :rules="[
              val =>
                (val !== null && val !== '') || 'Please type your password',
              val =>
                val.length >= 6 || 'Password should have 6 or more characters'
            ]"
          />
          <q-checkbox
            class="q-mt-sm force-left text-field"
            dense
            v-model="register.reseller"
            label="Apply as Reseller (For Approval)"
            color="primary"
          />
          <q-btn
            :loading="rloading"
            class="full-width q-mt-lg"
            unelevated
            type="submit"
            color="red-6 ls-sm"
            size="16px"
            padding="sm lg"
            label="Create Account"
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
.grid {
  min-height: 85vh;
  display: grid;
  padding: 50px;
  grid-template-columns: 1fr 50px 1fr;
  grid-template-areas: "login separator-div register";
  grid-gap: 50px;
  align-content: center;

  & > div {
    width: 400px;
    text-align: center;
  }
  .separator-div {
    grid-area: separator-div;
    justify-self: center;
  }
  .login {
    grid-area: login;
    justify-self: end;
  }
  .register {
    grid-area: register;
    text-align: center;
    justify-self: start;

    .force-left {
      width: 100%;
      text-align: left !important;
    }
  }
}

@media (max-width: 1080px) {
  .grid {
    min-height: 80vh;
    grid-template-columns: 1fr;
    grid-template-areas:
      "login"
      "separator-div"
      "register";
    align-content: center;

    .separator-div {
      justify-self: center;
    }
    .login {
      justify-self: center;
    }
    .register {
      justify-self: center;
    }
  }
}
</style>
<script>
import HelperMixin from "../../mixins/helpers";
import Navigation from "../../components/Navigation";

export default {
  name: "Account",
  mixins: [HelperMixin],
  components: { Navigation },

  preFetch({ store, redirect }) {
    if (store.getters["auth/isAuthenticated"]) {
      redirect("/profile");
    }
  },

  meta() {
    return {
      title: "Account"
    };
  },
  created() {},
  mounted() {},
  data() {
    return {
      loginErr: "",
      loading: false,
      rloading: false,
      login: {
        email: "",
        password: ""
      },
      registerErr: "",
      register: {
        email: "",
        password: "",
        firstname: "",
        lastname: "",
        reseller: false
      }
    };
  },
  methods: {
    _isValidEmail(val) {
      const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(val) || "Invalid email format";
    },

    async onLogin() {
      this.loginErr = "";
      this.loading = true;
      try {
        await this.$store.dispatch("auth/signin", { ...this.login });
        if (this.$route.query.ref) {
          this.$router.push(this.$route.query.ref).catch(err => {});
        } else {
          this.$router.push("/").catch(err => {});
        }
      } catch (err) {
        this.loginErr = err;
      } finally {
        this.loading = false;
      }
    },

    async onRegister() {
      this.registerErr = "";
      this.rloading = true;
      try {
        await this.$store.dispatch("auth/register", { ...this.register });
        this.showNotif(
          "info",
          "Please verify your account before completing your purchase.",
          5000
        );
        this.$router.push("/").catch(err => {});
      } catch (err) {
        this.registerErr = err;
      } finally {
        this.rloading = false;
      }
    }
  }
};
</script>
