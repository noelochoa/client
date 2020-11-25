<template>
  <q-page class="mainpage">
    <!-- NAV -->
    <Navigation v-bind="{ opaque: true }"> </Navigation>
    <!-- LOGIN/REGISTER PAGE -->
    <div class="flex flex-center">
      <h4>{{ user }}</h4>
      <h6>{{ profile.firstname }}</h6>
    </div>
  </q-page>
</template>

<style lang="scss" scoped></style>
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
      title: this.title || "My Profile"
    };
  },

  computed: {
    user() {
      return this.$store.state.auth.user;
    }
  },
  created() {
    if (process.env.CLIENT) {
      this.getProductDetails();
    }
  },
  mounted() {},
  data() {
    return {
      title: "",
      profile: {}
    };
  },
  methods: {
    ...mapActions("auth", ["fetchProfileDetails"]),
    async getProductDetails() {
      try {
        const resp = await this.fetchProfileDetails();
        if (resp) {
          this.profile = { ...resp };
        }
      } catch (err) {
        this.$router.push("/account").catch(err => {});
      }
    }
  }
};
</script>
