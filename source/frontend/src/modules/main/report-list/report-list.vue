<template lang="html">
  <div id="list">
  <the-header></the-header>
  <router-link to="/app/views">보고서 보기 화면으로 이동 </router-link>
  </div>
</template>

<script type="text/javascript">
import TheHeader from "@/components/the-header/the-header";

export default {
  name: "ReportList",
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
