<template lang="html">
  <div id="list">
    <ag-grid-list></ag-grid-list>
  </div>
</template>

<script type="text/javascript">
import AgGridList from "./components/ag-grid/ag-grid-list";

export default {
  name: "ReportList",
  extends: {},
  props: {},
  computed: {},
  components: {
    AgGridList
  },
  watch: {},
  methods: {}
};
</script>

<style lang="scss">
@import "src/modules/main/report-list/components/ag-grid/ag-grid-list";
</style>
