<template lang="html">
  <div class="header">
    <div class="header__logo">
      <img src="@/assets/style-product/images/logo.png" alt="" class="header__logo-img">
    </div>
    <div class="header__logout">
      <div class="header__logout-inner">
        <span>gildong</span>
        <icon class="svg-icon header__logout-icon" data="@/assets/style-core/images/icon/sign-out.svg"></icon>
      </div>
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
