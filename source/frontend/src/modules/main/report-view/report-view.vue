<template lang="html">
  <div class="report-view">
    <report-slider/>
    <report-screen/>
  </div>
</template>

<script type="text/javascript">
import ReportScreen from "./components/report-screen/report-screen";
import ReportSlider from "./components/report-slider/report-slider";

export default {
  name: "ReportView",
  extends: {},
  props: {},
  computed: {},
  components: {
    ReportScreen,
    ReportSlider
  },
  watch: {},
  methods: {}
};
</script>

<style lang="scss">
@import "./report-view.scss"
</style>
