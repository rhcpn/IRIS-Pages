<template lang="html">
  <div class="report-screen">
    <the-modal v-show="isOpenModal" @close-modal="isOpenModal = false">
      <template v-slot:body>
        <img :src="imgSrc" alt="보고서 전체보기">
      </template>
    </the-modal>
    <div class="report-screen__pick">
      <img :src="imgSrc" :alt="reportId">
    </div>
    <div class="report-screen__pagination">
      <div class="pagination">
        <button class="pagination__button button button--link" type="button" @click="$emit('go-to-first-report')">
          <icon class="svg-icon" data="@icon/chevron-double-left-medium.svg"></icon>
        </button>
        <button class="pagination__button button button--link" type="button" @click="goToPreviousReport(reportId)">
          <icon class="svg-icon" data="@icon/chevron-left-medium.svg"></icon>
        </button>
        <span class="pagination__text">{{ reportId + 1 }} of {{ reportCount }}</span>
        <button class="pagination__button button button--link" type="button" @click="goToNextReport(reportId)">
          <icon class="svg-icon" data="@icon/chevron-right-medium.svg"></icon>
        </button>
        <button class="pagination__button button button--link" type="button" @click="$emit('go-to-last-report')">
          <icon class="svg-icon" data="@icon/chevron-double-right-medium.svg"></icon>
        </button>
      </div>
      <button class="report-screen__fit-button button button--link" type="button" @click="isOpenModal = true">
        <icon class="svg-icon" data="@icon/topology-original-size.svg"></icon>
      </button>
    </div>
  </div>
</template>

<script type="text/javascript">

export default {
  name: "ReportScreen",
  extends: {},
  props: {
    reportImageUrl: {
      type: String,
      required: true
    },
    reportId: {
      type: Number,
      required: true
    },
    reportCount: {
      type: Number,
      required: true
    },
    imgUrl: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isOpenModal: false,
    }
  },
  computed: {
    imgSrc() {
      const noImage = require("@/assets/style-core/images/common/no-image.png");
      return (this.reportImageUrl == "") ? noImage : this.imgUrl + this.reportImageUrl;
    }
  },
  components: {},
  watch: {},
  methods: {
    goToNextReport(itemId) {
      let event = 'go-to-next-report'
      this.$emit(event, itemId)
    },

    goToPreviousReport(itemId) {
      let event = 'go-to-previous-report'
      this.$emit(event, itemId)
    },
  }
};
</script>

<style lang="scss">
@import "./report-screen.scss";
</style>
