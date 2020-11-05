<template>
  <q-layout view="lhh Lpr lff">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="text-center header">
          <h6>ANNOUNCEMENT</h6>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer class="bg-accent text-dark footer">
      <div class="q-pa-lg">
        <div class=""></div>
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
  font-size: 13px;
}
.footer-copyright {
  font-family: Futura-PT;
  font-weight: 600;
  letter-spacing: 2.6px;
  color: $primary;
}
</style>

<script>
export default {
  name: "MainLayout",
  meta: {
    title: "Home",
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
  data() {
    return {
      leftDrawerOpen: false
    };
  }
};
</script>
