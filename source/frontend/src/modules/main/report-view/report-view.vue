<template lang="html">
  <div class="report-view">
    <report-slider
        :report-list="reportList"
        :report-id="reportId"
        @get-selected-report="getSelectedReport"
    ></report-slider>
    <report-screen
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
      reportId: 1,
    }
  },
  methods: {
    goToFirstReport() {
      this.reportImageUrl = this.reportList[0].thumbnailUrl;
      this.reportId = this.reportList[0].id;
    },

    goToLastReport() {
      this.reportImageUrl = this.reportList[this.reportList.length - 1].thumbnailUrl;
      this.reportId = this.reportList[this.reportList.length - 1].id;
    },

    goToPreviousReport(id) {
      let previousNumber = id - 2;

      previousNumber < 0 ? previousNumber = 0 : '';

      this.reportImageUrl = this.reportList[Number(previousNumber)].thumbnailUrl;
      this.reportId = this.reportList[Number(previousNumber)].id;
    },

    goToNextReport(id) {
      let NextNumber = id;

      NextNumber >= 5000 ? NextNumber = 4999 : '';

      this.reportImageUrl = this.reportList[Number(NextNumber)].thumbnailUrl;
      this.reportId = this.reportList[Number(NextNumber)].id;
    },

    getSelectedReport(thumbnail, id) {
      this.reportImageUrl = thumbnail;
      this.reportId = id;
    },

    fetchReportList() {
      let loader = this.$loading.show(this.$constants.LOADER_CONFIG);

      axios.get("https://jsonplaceholder.typicode.com/photos")
          .then(response => {
            this.reportList = response.data;
            this.reportImageUrl = this.reportList[0].thumbnailUrl;
            this.reportId = this.reportList[0].id;
          })
          .then(()=>{
              loader.hide()
          })
          .catch(error => {
            console.log(error)
          })
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
