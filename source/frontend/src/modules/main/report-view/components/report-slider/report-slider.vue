<template lang="html">
  <div class="report-slider">
    <ul class="report-slider__list">
      <li
          class="report-slider__item"
          v-for="(item, index) in reportList"
          :key="index"
          :class=" index  === reportId ? 'report-slider__item--selected' : ''"
      >
        <button class="report-slider__button" type="button" :title="index"
                @click="getSelectedReport(item, index)">
          <img :src="imgUrl + item.id" :alt="index">
        </button>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">

export default {
  name: "ReportSlider",
  data() {
    return {

    }
  },
  extends: {},
  props: {
    reportList: {
      type: Array,
      required: true,
    },
    reportId: {
      type: Number,
      required: true
    },
    imgUrl: {
      type: String,
      required: true
    }
  },
  computed: {
  },
  components: {},
  watch: {},
  methods: {
    getSelectedReport(item, index) {
      let event = 'get-selected-report';
      this.$emit(event, item.id, index);
    }
  },
  created() {


  }
};
</script>

<style lang="scss">
@import "./report-slider.scss"
</style>
