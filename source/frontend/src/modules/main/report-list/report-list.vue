<template lang="html">
  <div id="list">
    <ag-grid-list :column-defs="columnDefs" :row-data="rowData"></ag-grid-list>
  </div>
</template>

<script type="text/javascript">
import AgGridList from "./components/ag-grid/ag-grid-list";

export default {
  name: "ReportList",
  extends: {},
  props: {},
  components: {
    AgGridList
  },
  data() {
    return {
      rowData: [],
      gridOptions: null
    };
  },
  beforeMount() {
    this.columnDefs = [
      {
        filed: "",
        checkboxSelection: true,
        headerCheckboxSelection: true,
        width: 80,
        sortable: false,
        cellStyle: { justifyContent: "center" }
      },
      {
        field: "categoryName",
        sortable: true,
        filter: false,
        width: 200,
        cellStyle: { justifyContent: "center" }
      },
      { field: "name", sortable: true, filter: false, width: 1100 },
      {
        field: "userId",
        sortable: true,
        filter: false,
        width: 260,
        cellStyle: { justifyContent: "center" }
      },
      {
        field: "editDate",
        sortable: true,
        filter: false,
        width: 230,
        cellStyle: { justifyContent: "center" }
      }
    ];

    fetch("http://localhost:3000/list")
      .then((result) => result.json())
      .then((rowData) => (this.rowData = rowData));
  },
  computed: {},
  watch: {},
  methods: {}
};
</script>

<style lang="scss"></style>
