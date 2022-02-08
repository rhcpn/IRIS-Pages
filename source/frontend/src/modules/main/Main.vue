<template lang="html">
  <div id="main">
    <the-header></the-header>
    <router-link to="/app/list">메인으로 이동</router-link>
    <router-link to="/app/views">보고서 보기 화면으로 이동 </router-link>
    <router-view></router-view>
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
