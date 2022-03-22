<template lang="html">
  <div id="main">
    <the-header></the-header>
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/javascript">
import TheHeader from "@/components/the-header/the-header";

export default {
  name: "Main",
  extends: {},
  props: {},
  computed: {},
  components: {
    TheHeader
  },
  watch: {},
  methods: {}
};
</script>

<style lang="scss">
// @import ""
</style>
