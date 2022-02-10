<template lang="html">
  <div class="report-screen">
    <div class="report-screen__pick">
      <!--      <router-link to="/app/list">메인으로 이동</router-link>-->
      <img src="../../../../../assets/style-product/images/screen-sample.png" alt="보고서 화면">
    </div>
    <div class="report-screen__pagination">
      <div class="pagination">
        <button class="pagination__button button button--link" type="button">
          <icon class="svg-icon" data="@icon/chevron-double-left-medium.svg"></icon>
        </button>
        <button class="pagination__button button button--link" type="button">
          <icon class="svg-icon" data="@icon/chevron-left-medium.svg"></icon>
        </button>
        <span class="pagination__text">슬라이드 2 of 10</span>
        <button class="pagination__button button button--link" type="button">
          <icon class="svg-icon" data="@icon/chevron-right-medium.svg"></icon>
        </button>
        <button class="pagination__button button button--link" type="button">
          <icon class="svg-icon" data="@icon/chevron-double-right-medium.svg"></icon>
        </button>
      </div>
      <button class="report-screen__fit-button button button--link" type="button">
        <icon class="svg-icon" data="@icon/topology-original-size.svg"></icon>
      </button>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "ReportScreen",
  extends: {},
  props: {},
  computed: {},
  components: {},
  watch: {},
  methods: {}
};
</script>

<style lang="scss">
@import "./report-screen.scss"
</style>
