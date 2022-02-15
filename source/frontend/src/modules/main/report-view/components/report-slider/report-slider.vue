<template lang="html">
  <div class="report-slider">
    <ul class="report-slider__list">
      <li
          class="report-slider__item"
          v-for="(item, index) in reportDatas"
          :key="index"
          :class=" item.id  === reportId ? 'report-slider__item--selected' : ''"
      >
        <button class="report-slider__button" type="button"
                @click="getSelectedReport(item)">
          <img :src="item.thumbnailUrl" :alt="item.id">
        </button>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">

export default {
  name: "ReportSlider",
  data() {
    return {}
  },
  extends: {},
  props: {
    reportDatas: {
      type: Array,
      required: true,
    },
    reportId: {
      type: Number,
      required: true
    }
  },
  computed: {},
  components: {},
  watch: {},
  methods: {
    getSelectedReport(item) {
      let event = 'get-selected-report';
      this.$emit(event, item.thumbnailUrl, item.id);
    }
  },
  created() {


  }
};
</script>

<style lang="scss">
@import "./report-slider.scss"
</style>
