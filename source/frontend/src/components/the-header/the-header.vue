<template lang="html">
  <div class="header">
    <div to="/" class="header__logo">
      <router-link to="/">
        <img src="@/assets/style-product/images/logo.png" alt="" class="header__logo-img">
      </router-link>
    </div>
    <div class="header__logout">
      <a href="/logout" class="header__logout-inner">
        <button class="button button--icon button--link">
          <span class="button__text">gildong</span>
          <icon class="svg-icon" data="@/assets/style-core/images/icon/sign-out.svg"></icon>
        </button>
      </a>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "TheHeader",
  extends: {},
  props: {
    bar: {},
    foo: {},
    fooBar: {}
  },
  computed: {},
  components: {},
  watch: {},
  methods: {}
};
</script>

<style lang="scss">
@import "src/components/the-header/the-header";
</style>
