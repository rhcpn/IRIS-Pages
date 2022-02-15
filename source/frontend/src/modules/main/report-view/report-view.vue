<template lang="html">
  <div class="report-view">
    <report-slider
        :report-datas="reportDatas"
        :report-id="reportId"
        @get-selected-report="getSelectedReport"
    ></report-slider>
    <report-screen
        :report-datas="reportDatas"
        :report-image-url="reportImageUrl"
        :report-id="reportId"
        :report-count="reportCount"
        @go-to-previous-report="goToPreviousReport"
        @go-to-next-report="goToNextReport"
        @go-to-first-report="goToFirstReport"
        @go-to-last-report="goToLastReport"
    ></report-screen>
  </div>
</template>

<script type="text/javascript">
import ReportScreen from "./components/report-screen/report-screen";
import ReportSlider from "./components/report-slider/report-slider";
import axios from "axios";

export default {
  name: "ReportView",
  extends: {},
  props: {},
  computed: {
    reportCount() {
      return this.reportDatas.length
    }
  },
  components: {
    ReportScreen,
    ReportSlider
  },
  watch: {},
  data() {
    return {
      reportDatas: [],
      reportImageUrl: '',
      reportId: 1,
    }
  },
  methods: {
    goToFirstReport() {
      this.reportImageUrl = this.reportDatas[0].thumbnailUrl;
      this.reportId = this.reportDatas[0].id;
    },

    goToLastReport() {
      this.reportImageUrl = this.reportDatas[this.reportDatas.length - 1].thumbnailUrl;
      this.reportId = this.reportDatas[this.reportDatas.length - 1].id;
    },

    goToPreviousReport(id) {
      let previousNumber = id - 2;

      previousNumber < 0 ? previousNumber = 0 : '';

      this.reportImageUrl = this.reportDatas[Number(previousNumber)].thumbnailUrl;
      this.reportId = this.reportDatas[Number(previousNumber)].id;
    },

    goToNextReport(id) {
      let NextNumber = id;

      NextNumber >= 5000 ? NextNumber = 4999 : '';

      this.reportImageUrl = this.reportDatas[Number(NextNumber)].thumbnailUrl;
      this.reportId = this.reportDatas[Number(NextNumber)].id;
    },

    getSelectedReport(thumbnail, id) {
      this.reportImageUrl = thumbnail;
      this.reportId = id;
    },

    getSampleData() {
      axios.get("https://jsonplaceholder.typicode.com/photos")
          .then((response) => {
            this.reportDatas = response.data;
            this.reportImageUrl = this.reportDatas[0].thumbnailUrl;
            this.reportId = this.reportDatas[0].id;
          })
          .catch((error) => {
            console.log(error)
          })
    },
  },
  created() {
    this.getSampleData();
  }
};
</script>

<style lang="scss">
@import "./report-view.scss"
</style>
