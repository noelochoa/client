<template>
  <q-page class="mainpage">
    <!-- NAV -->
    <Navigation v-bind="{ opaque: true }"> </Navigation>
    <!-- EDIT -->
    <div class="edit flex text-grey-8">
      <div class="edit-heading text-grey-8">
        <router-link
          tag="div"
          class=" ls-sm text-uppercase cursor-pointer hover-primary inline-block q-mb-md"
          to="/profile"
        >
          Back to Profile
        </router-link>
        <h4 class="text-primary ls-sm">Edit Profile</h4>
        <p class="text-subtitle1 q-mt-sm">Fill out your information below:</p>
        <q-spinner size="32px" color="primary" v-if="fetching" />
        <q-form
          v-else-if="!isEmpty(profile)"
          ref="edit-form"
          class="edit-form"
          @submit.prevent.stop="onSubmit"
        >
          <p v-if="editErr" class="error-msg text-negative bg-red-3 q-py-sm">
            {{ editErr }}
          </p>
          <q-input
            class="q-mt-lg"
            input-class="text-field"
            placeholder="E-mail"
            type="email"
            outlined
            dense
            :readonly="true"
            v-model="profile.email"
          />
          <q-input
            class="q-mt-lg"
            input-class="text-field"
            placeholder="First name"
            type="text"
            outlined
            dense
            v-model="profile.firstname"
            lazy-rules
            :rules="[
              val =>
                (val !== null && val.trim() !== '') ||
                'Please enter your first name.'
            ]"
          />
          <q-input
            class="q-mt-sm"
            input-class="text-field"
            placeholder="Last name"
            type="text"
            outlined
            dense
            v-model="profile.lastname"
            lazy-rules
            :rules="[
              val =>
                (val !== null && val.trim() !== '') ||
                'Please enter your last name.'
            ]"
          />

          <q-input
            class="q-mt-sm"
            input-class="text-field"
            placeholder="Address"
            type="textarea"
            outlined
            dense
            v-model="profile.address"
            lazy-rules
            :rules="[
              val =>
                (val !== null && val.trim() !== '') ||
                'Please enter your address.'
            ]"
          />
          <q-input
            class="q-mt-sm"
            input-class="text-field"
            placeholder="Phone (+63) 000-000-0000"
            type="text"
            outlined
            dense
            v-model="profile.phonenumber"
            mask="(+##) ###-###-####"
            lazy-rules
            @input="_syncNotifSetting"
            :rules="[_isValidPhoneNum]"
          />
          <p class="text-left text-caption q-my-xs">
            Phone number has to be verified before sending SMS.
          </p>
          <p class="text-left q-mt-md">Order Notifications:</p>
          <q-toggle
            dense
            class="full-width q-pb-xs text-field no-pointer-events"
            disable
            v-model="profile.notification.isEmailAllowed"
            label="Receive by Email (Required)"
            color="primary"
          />
          <q-toggle
            dense
            class="full-width q-py-xs text-field"
            v-model="profile.notification.isSMSAllowed"
            label="Receive by SMS"
            color="primary"
            :disable="!profile.phonenumber"
          />
          <q-btn
            :loading="loading"
            :disable="loading"
            class="full-width q-mt-lg submit-btn"
            unelevated
            type="submit"
            color="red-6 ls-sm"
            size="16px"
            padding="sm lg"
            label="Save"
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
.edit {
  min-height: 65vh;
  font-size: 16px;
  margin: 60px auto;
  max-width: 520px;
  padding: 0 80px;

  & > div {
    width: 100%;
  }

  .edit-form {
    text-align: center;
  }
}
</style>

<script>
import HelperMixin from "../../mixins/helpers";
import Navigation from "../../components/Navigation";
import { mapActions } from "vuex";

export default {
  name: "Edit",
  mixins: [HelperMixin],
  components: { Navigation },

  meta() {
    return {
      title: "Edit Profile"
    };
  },

  computed: {
    resolvedPhone() {
      const val = this.profile.phonenumber;
      if (val && val !== "") {
        // +63 1234567890 E.164 Mobile Number format
        return val.replace(new RegExp(/[-()]/g), "");
      }
      return val;
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
      editErr: "",
      loading: false,
      fetching: true,
      profile: {}
    };
  },
  methods: {
    ...mapActions("auth", ["fetchProfile", "editProfile"]),
    _isValidPhoneNum(val) {
      if (!val) return true;
      const mobilePattern = /^\+\d{1,3}\s\d{1,14}(\s\d{1,13})?/;
      return (
        mobilePattern.test(this.resolvedPhone) || "Invalid mobile phone format"
      );
    },

    _syncNotifSetting(val) {
      if (!val) this.profile.notification.isSMSAllowed = false;
    },

    async getProfile() {
      try {
        const resp = await this.fetchProfile();
        if (resp) {
          this.profile = JSON.parse(JSON.stringify(resp));
          this.fetching = false;
        }
      } catch (err) {
        this.$router.push("/account").catch(err => {});
      }
    },

    async onSubmit() {
      try {
        this.loading = true;
        const resp = await this.editProfile({ ...this.profile });
        this.$router.push("/profile").catch(err => {});
      } catch (err) {
        this.editErr = err;
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>
