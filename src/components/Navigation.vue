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
            HOME
          </router-link>
        </li>
        <li class="ls-sm">
          <router-link to="/products" class="header-link hover-primary">
            SHOP
          </router-link>
        </li>
      </ul>
    </div>
    <div>
      <ul class="right-nav">
        <li class="ls-sm">
          <router-link to="/account" class="header-link hover-primary">
            ACCOUNT
          </router-link>
        </li>
        <li class="ls-sm">
          <router-link to="/" class="header-link hover-primary">
            BASKET (0)
          </router-link>
        </li>
      </ul>
    </div>
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
.opaque-nav {
  box-shadow: 0 0.1rem #eecfc8;
  background: $navbg;
  color: $dark;
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
      hover: this.opaque
    };
  }
};
</script>
