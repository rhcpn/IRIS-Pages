<template>
  <div class="list-layout">
    <div class="list-layout__top-bar">
      <div class="list-layout__filter">
        <div class="checkbox">
          <input type="chckbox" class="checkbox__input" />
          <label for="" class="checkbox__label"></label>
        </div>
        <strong class="list-layout__filter-title">
          전체 보고서
          <em>30</em>
          개</strong
        >
      </div>
      <div class="list-layout__search-bar">
        <div class="text-input-group text-input-group--lg">
          <input
              type="text"
              class="text-input text-input--lg"
              placeholder="검색어를 입력해주세요."
              ref="search"
              @keyup="onQuickFilterChanged"
          />
          <button class="text-input-group__clear-button" @click="resetInput">
            <icon
                class="svg-icon svg-fill"
                data="@/assets/style-core/images/icon/close.svg"
            ></icon>
          </button>
          <button
              title="검색"
              class="text-input-group__search-button button button--icon button--tertiary button--lg"
          >
            <icon
                class="svg-icon svg-fill"
                data="@/assets/style-core/images/icon/search.svg"
            ></icon>
          </button>
        </div>
        <div class="list-layout__search-bar-button">
          <router-link to="/app/views">
            <button
                @click="getSelectedRows()"
                class="button button--lg button--primary"
            >
              <icon
                  class="svg-icon svg-fill"
                  data="@/assets/style-core/images/icon/eye.svg"
              ></icon>
              Show
            </button>
          </router-link>
        </div>
      </div>
    </div>
    <ag-grid-vue
        class="ag-theme-balham"
        :columnDefs="columnDefs"
        :rowData="rowData"
        :gridOptions="gridOptions"
        rowSelection="multiple"
    >
    </ag-grid-vue>
  </div>
</template>

<script>
import { AgGridVue } from "/node_modules/ag-grid-vue/lib/AgGridVue.js";

export default {
  name: "AgGridList",
  data() {
    return {
      columnDefs: null,
      rowData: [],
      columnApi: null,
      girdOptions: null,
    };
  },
  components: {
    AgGridVue
  },
  methods: {
    resetInput() {
      this.$refs["search"].value = "";
    },
    onQuickFilterChanged (event) {
      this.gridOptions.api.setQuickFilter(event.target.value)
    }
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

    fetch("http://localhost:3001/list")
        .then((result) => result.json())
        .then((rowData) => (this.rowData = rowData));
  }
};
</script>

<style lang="scss">
@import "node_modules/ag-grid-community/dist/styles/ag-grid";
@import "node_modules/ag-grid-community/dist/styles/ag-theme-balham";
@import "src/modules/main/report-list/components/ag-grid/ag-grid-list";
</style>
