<template lang="html">
  <div class="report-slider">
    <ul class="report-slider__list">
      <!-- 선택되었을 경우, report-slider__item--selected 클래스 추가  -->
      <!--          :class="{'report-slider__item&#45;&#45;selected': selected(item)}"-->
      <li
          class="report-slider__item"
          v-for="(item, index) in reportDatas"
          :key="index"
      >
        <button class="report-slider__button" type="button"
                @click="$emit('send-report-id', item.thumbnailUrl)">
          <img :src="item.thumbnailUrl" alt="item.id">
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
    }
  },
  computed: {},
  components: {},
  watch: {},
  methods: {},
  created() {


  }
};
</script>

<style lang="scss">
@import "./report-slider.scss"
</style>
