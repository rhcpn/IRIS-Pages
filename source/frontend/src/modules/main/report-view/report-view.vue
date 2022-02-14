<template lang="html">
  <div class="report-view">
    <report-slider :report-datas="reportDatas" @send-report-id="sendReportId"></report-slider>
    <report-screen
        :report-datas="reportDatas"
        :report-image-url="reportImageUrl"
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
  computed: {},
  components: {
    ReportScreen,
    ReportSlider
  },
  watch: {},
  data() {
    return {
      reportDatas: [],
      reportImageUrl: ''
    }
  },
  methods: {
    sendReportId(item) {
      this.reportImageUrl = item;
    },

    // API 데이터 가져오기
    async getSampleData() {
      axios.get("https://jsonplaceholder.typicode.com/photos")
          .then((response) => {
            this.reportDatas = response.data
            this.reportImageUrl = response.data[0].thumbnailUrl
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
