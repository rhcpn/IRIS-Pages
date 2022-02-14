<template lang="html">
  <div class="report-screen">
    <the-modal v-show="isOpenModal" @close-modal="closeModal">
      <template v-slot:body>
        <img :src="reportImageUrl" alt="보고서 화면">
      </template>
    </the-modal>
    <div class="report-screen__pick">
      <img :src="reportImageUrl" alt="보고서 화면">
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
      <button class="report-screen__fit-button button button--link" type="button" @click="openModal">
        <icon class="svg-icon" data="@icon/topology-original-size.svg"></icon>
      </button>
    </div>
  </div>
</template>

<script type="text/javascript">
import TheModal from "@/components/the-modal/the-modal"

export default {
  name: "ReportScreen",
  extends: {},
  props: {
    reportDatas: {
      type: Array,
      required: true,
    },
    reportImageUrl: {
      type: String,
      required: true
    }
  },
  data(){
    return {
      isOpenModal: false
    }
  },
  computed: {},
  components: {
    TheModal
  },
  watch: {},
  methods: {
    openModal(){
      this.isOpenModal = true;
    },
    closeModal(){
      this.isOpenModal = false;
    }
  },

};
</script>

<style lang="scss">
@import "./report-screen.scss"
</style>
