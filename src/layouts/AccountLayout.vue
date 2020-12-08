<template>
  <q-layout view="lhh Lpr lfr">
    <q-header elevated>
      <q-toolbar id="psa-bar">
        <q-toolbar-title class="text-center header">
          <a v-if="psa.link" :href="psa.link" target="_blank">
            <h6 v-html="psa.message"></h6>
          </a>
          <h6 v-else v-html="psa.message"></h6>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer v-if="showFooter" class="bg-accent text-grey-8 footer">
      <div class="footer-content">
        <div class="footer-inner flex">
          <div class="about">
            <h6 class="ls-sm text-primary">ABOUT</h6>
            <p class="q-my-md">
              This is a collaborative web store project by Lorna's Bakeshop and
              Lutong Bahay sa Sawali Restaurant (Batangas City).
            </p>
          </div>
          <div class="links">
            <h6 class="ls-sm text-primary">LINKS</h6>
            <ul class="links q-my-md">
              <li class="block"><router-link to="/">HOME</router-link></li>
              <li class="block">
                <router-link to="/products">PRODUCTS</router-link>
              </li>
              <li class="block">
                <router-link to="/account">ACCOUNT</router-link>
              </li>
              <li class="block"><router-link to="/">CART</router-link></li>
            </ul>
          </div>
          <div class="sns">
            <h6 class="ls-sm text-primary">FOLLOW US</h6>
            <ul class="sns-buttons q-my-xs">
              <li class="facebook inline-block">
                <a
                  class="button--svg"
                  href="https://www.facebook.com/Lutong-Bahay-Sa-Sawali-Catering-Restaurant-147946615275109/"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="46"
                    height="46"
                    viewBox="0 0 46 46"
                    role="img"
                    aria-labelledby="facebook-icon"
                  >
                    <title id="facebook-icon">Facebook</title>
                    <path
                      fill="#3C599A"
                      d="M18.896 20.12h1.758v-1.708c0-.753.02-1.915.566-2.635.576-.762 1.368-1.28 2.73-1.28 2.218 0 3.15.316 3.15.316l-.438 2.605s-.73-.212-1.417-.212c-.684 0-1.296.245-1.296.93v1.985h2.803l-.194 2.547h-2.61v8.84h-3.297v-8.84h-1.758V20.12z"
                    />
                  </svg>
                </a>
              </li>
              <li class="instagram inline-block">
                <a
                  href="https://www.instagram.com/explore/locations/590263847/philippines/batangas-city/lutong-bahay-sa-sawali-restaurant/?hl=en"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="46"
                    height="46"
                    viewBox="0 0 46 46"
                    role="img"
                    aria-labelledby="instagram-icon"
                  >
                    <title id="instagram-icon">Instagram</title>
                    <path
                      fill="#5E6C89"
                      d="M29.76 29.03v-7.373h-1.537c.152.48.23.975.23 1.49 0 .958-.243 1.838-.73 2.647-.485.807-1.146 1.447-1.98 1.918-.834.47-1.744.705-2.73.705-1.495 0-2.773-.514-3.835-1.543-1.062-1.027-1.593-2.27-1.593-3.726 0-.517.076-1.013.228-1.49H16.21v7.373c0 .2.065.37.2.5.13.14.296.2.494.2H29.07c.188 0 .352-.06.488-.2s.202-.3.202-.49zm-3.233-6.064c0-.94-.343-1.743-1.03-2.406-.686-.664-1.515-.996-2.486-.996-.96 0-1.78.332-2.47.996-.68.663-1.03 1.466-1.03 2.406 0 .942.35 1.743 1.03 2.407s1.51.996 2.48.996c.975 0 1.8-.34 2.49-1s1.03-1.47 1.03-2.41zm3.233-4.097v-1.88c0-.22-.076-.4-.23-.56-.15-.158-.336-.235-.556-.235h-1.98c-.22 0-.406.08-.558.233-.15.155-.228.34-.228.552v1.876c0 .22.076.404.228.556s.337.23.558.23h1.98c.22 0 .406-.078.557-.23.16-.15.23-.338.23-.558zm1.98-2.37v12.99c0 .61-.22 1.14-.66 1.58-.44.44-.967.66-1.582.66H16.502c-.614 0-1.142-.22-1.582-.66-.44-.44-.66-.97-.66-1.586V16.5c0-.614.22-1.142.66-1.582.44-.44.967-.66 1.582-.66h12.996c.615 0 1.14.22 1.582.66.44.44.66.967.66 1.58z"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-copyright">© 2020 LMC <br />ALL RIGHTS RESERVED</div>
      </div>
    </q-footer>

    <q-page-container class="bg-secondary">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style lang="scss" scoped>
.footer {
  font-size: 16px;
}
.footer-content {
  padding: 40px 70px;
}
.footer-inner {
  --gap-x: 20px;
  --gap-y: 40px;
  display: flex;
  margin: 20px 60px 110px;

  & > div {
    flex: 0 1 380px;
    margin: 0 var(--gap-x) var(--gap-y) 0;
  }
  .about {
    font-size: 16px;
    padding-right: 20px;
  }
  .links,
  .sns {
    flex-basis: 200px;
  }
  .sns-buttons {
    margin-left: -16px;
  }
  .links li {
    margin-bottom: 16px;
  }
}
.footer-copyright {
  margin: 10px 60px;
  letter-spacing: 2.6px;
  color: $primary;
}

@media (min-width: 1130px) {
  .footer-inner {
    .sns {
      margin-left: auto;
    }
  }
}
</style>

<script>
export default {
  name: "AccountLayout",
  preFetch({ store, redirect }) {
    return store.dispatch("home/getPSA").catch(err => {
      redirect("/error500");
    });
  },
  computed: {
    psa() {
      let psa = this.$store.state.home.psa;
      if (psa)
        return {
          message: this.$sanitize(psa.message),
          link:
            psa.targetLink.indexOf("https") !== -1
              ? psa.targetLink
              : "https://" + psa.targetLink
        };
      return null;
    }
  },
  meta: {
    title: "Account",
    titleTemplate: title => `${title} | LMC Web Front`,
    // meta tags
    meta: {
      description: {
        name: "description",
        content: "Web Store Front for LMC"
      },
      keywords: { name: "keywords", content: "web store front lmc" },
      equiv: {
        "http-equiv": "Content-Type",
        content: "text/html; charset=UTF-8"
      }
    }
  },
  mounted() {
    // Deferred footer layout
    this.showFooter = true;
  },
  data() {
    return {
      showFooter: false,
      leftDrawerOpen: false
    };
  }
};
</script>
