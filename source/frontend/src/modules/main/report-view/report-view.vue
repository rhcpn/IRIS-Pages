<template lang="html">
  <div class="report-view">
    <report-slider
        :report-list="reportList"
        :report-id="reportId"
        :img-url="imgUrl"
        @get-selected-report="getSelectedReport"
    ></report-slider>
    <report-screen
        :report-image-url="reportImageUrl"
        :report-id="reportId"
        :report-count="reportCount"
        :img-url="imgUrl"
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
import dbJson from "@/db/db.json"

export default {
  name: "ReportView",
  extends: {},
  props: {},
  computed: {
    reportCount() {
      return this.reportList.length
    },
  },
  components: {
    ReportScreen,
    ReportSlider
  },
  watch: {},
  data() {
    return {
      reportList: [],
      reportImageUrl: '',
      reportId: 0,
      imgUrl: 'http://192.168.102.202:9999/iris-studio-service/report/thumbnail/'
    }
  },
  methods: {
    goToFirstReport() {
      this.reportImageUrl = this.reportList[0].id;
      this.reportId = this.reportList.indexOf(this.reportList[0]);
    },

    goToLastReport() {
      this.reportImageUrl = this.reportList[this.reportList.length - 1].id;
      this.reportId = this.reportList.indexOf(this.reportList[this.reportList.length - 1]);
    },

    goToPreviousReport(row) {
      let previousNumber = row - 1;

      previousNumber < 0 ? previousNumber = 0 : '';

      this.reportImageUrl = this.reportList[previousNumber].id;
      this.reportId = this.reportList.indexOf(this.reportList[previousNumber]);
    },

    goToNextReport(row) {
      let NextNumber = row + 1;

      NextNumber >= this.reportList.length
          ?
          NextNumber = this.reportList.indexOf(this.reportList[this.reportList.length - 1])
          :
          '';

      this.reportImageUrl = this.reportList[NextNumber].id;
      this.reportId = this.reportList.indexOf(this.reportList[NextNumber]);
    },

    getSelectedReport(thumbnail, id) {
      this.reportImageUrl = thumbnail;
      this.reportId = id;
    },

    fetchReportList() {
      let loader = this.$loading.show(this.$constants.LOADER_CONFIG);

      this.reportList = dbJson.list;
      this.reportImageUrl = this.reportList[0].id;
      this.reportId = this.reportList.indexOf(this.reportList[0]);

      loader.hide();
    },

  },
  created() {
    this.fetchReportList();
  }
};
</script>

<style lang="scss">
@import "./report-view.scss"
</style>
