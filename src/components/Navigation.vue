<template>
  <div
    class="navigation"
    :class="{ 'opaque-nav': hover }"
    @mouseover="hover = true"
    @mouseleave="hover = opaque ? true : false"
  >
    <div>
      <ul class="left-nav">
        <li class="ls-sm">
          <router-link to="/" class="header-link hover-primary">
            <span class="default">HOME</span>
            <q-btn
              class="mobile no-hover-bg"
              flat
              padding="sm"
              :ripple="false"
              icon="home"
            />
          </router-link>
        </li>
        <li class="ls-sm">
          <router-link to="/products" class="header-link hover-primary">
            <span class="default">SHOP</span>
            <q-btn
              class="mobile no-hover-bg"
              flat
              padding="sm"
              :ripple="false"
              icon="store"
            />
          </router-link>
        </li>
      </ul>
    </div>
    <div>
      <ul class="right-nav">
        <li class="ls-sm">
          <router-link to="/account" class="header-link hover-primary">
            <span class="default">ACCOUNT</span>
            <q-btn
              class="mobile no-hover-bg"
              flat
              padding="sm"
              :ripple="false"
              icon="account_circle"
            />
          </router-link>
        </li>
        <li class="ls-sm">
          <a
            href="#"
            class="header-link hover-primary"
            @click.prevent.stop="showSearchDlg"
          >
            <span class="default">SEARCH</span>
            <q-btn
              class="mobile no-hover-bg"
              flat
              padding="sm"
              :ripple="false"
              icon="search"
            />
          </a>
        </li>
        <li class="ls-sm">
          <router-link to="/" class="header-link hover-primary">
            <span class="default">BASKET (0)</span>
            <q-btn
              class="mobile no-hover-bg"
              flat
              padding="sm"
              :ripple="false"
              icon="shopping_basket"
            />
          </router-link>
        </li>
      </ul>
    </div>
    <q-dialog
      v-model="showDlg"
      full-width
      position="top"
      content-class="nav-search"
      square
      maximized
      transition-show="fade"
      transition-hide="fade"
    >
      <div class="bg-secondary block">
        <q-form autofocus>
          <q-input
            class="q-pa-lg text-h5"
            input-class="ls-sm"
            type="text"
            spellcheck="false"
            placeholder="SEARCH..."
            v-model="search"
            :debounce="400"
            @input="searchProducts"
          >
            <template v-slot:before>
              <q-icon name="search" />
            </template>
            <template v-slot:append>
              <q-btn
                v-if="!!search"
                flat
                class="no-hover-bg"
                :ripple="false"
                icon="clear"
                @click="clearSearch"
              />
            </template>
          </q-input>
          <div class="search-results q-pa-lg text-grey-8" v-if="searchRes">
            <div class="section-label text-uppercase ls-sm">
              Products
            </div>
            <q-spinner
              size="24px"
              class="block"
              color="primary"
              v-if="fetching"
            />
            <p>{{ searchRes }}</p>
          </div>
        </q-form>
      </div>
    </q-dialog>
  </div>
</template>
<style lang="scss" scoped>
.navigation {
  height: 106px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: $link;
  transition: background 0.5s ease-out, color 0.25s ease-out;
}
.navigation div {
  flex: 0 1 auto;
}
.left-nav {
  margin-left: 24px;
}
.right-nav {
  margin-right: 24px;
}
.right-nav li,
.left-nav li {
  font-size: 14px;
  margin: 0 14px;
  display: inline-block;
  flex-grow: 0;
  flex-basis: 240px;
}
.mobile {
  display: none;
}
.opaque-nav {
  box-shadow: 0 0.1rem #eecfc8;
  background: $navbg;
  color: $dark;
}
.search-results {
  font-size: 16px;

  .section-label {
    line-height: 2.5em;
    width: 100%;
    border-bottom: 1px solid $line;
    margin: 0 0 40px;
  }
}

@media (max-width: 1220px) {
  .left-nav {
    margin-left: 8px;
  }
  .right-nav {
    margin-right: 8px;
  }
  .left-nav li,
  .right-nav li {
    margin: 0;
  }
  .mobile {
    display: inline-block;
  }
  .default {
    display: none;
  }
}
</style>
<script>
export default {
  name: "Navigation",
  props: {
    opaque: {
      type: Boolean,
      required: true,
      default: true
    }
  },
  data() {
    return {
      hover: this.opaque,
      showDlg: false,
      search: "",
      searchRes: "",
      fetching: false,
      sProducts: []
    };
  },
  methods: {
    clearSearch() {
      this.searchRes = this.search = "";
    },
    showSearchDlg() {
      this.showDlg = true;
    },
    async searchProducts(val) {
      try {
        this.searchRes = "";
        this.fetching = true;
        const res = await this.$store.dispatch("gallery/searchProducts", {
          search
        });
        this.searchRes = `${res.length} items found.`;
      } catch (err) {
        this.searchRes = "Error occurred while searching for products.";
      } finally {
        this.fetching = false;
      }
    }
  }
};
</script>
