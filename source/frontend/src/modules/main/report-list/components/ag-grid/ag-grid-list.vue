<template>
  <ag-grid-vue class="ag-theme-balham"
               :columnDefs="columnDefs"
               :rowData="rowData">
  </ag-grid-vue>
</template>

<script>
import { AgGridVue } from "/node_modules/ag-grid-vue/lib/AgGridVue.js";

export default {
  name: "AgGridList",
  data() {
    return {
      columnDefs: null,
      rowData: null
    }
  },
  components: {
    AgGridVue
  },
  beforeMount() {
    this.columnDefs = [
      {field: 'make'},
      {field: 'model'},
      {field: 'price'}
    ];

    this.rowData = [
      {make: 'Toyota', model: 'Celica', price: 35000},
      {make: 'Ford', model: 'Mondeo', price: 32000},
      {make: 'Porsche', model: 'Boxter', price: 72000}
    ];
  }
}
</script>

<style lang="scss">
@import "node_modules/ag-grid-community/dist/styles/ag-grid";
</style>
