<template lang="html">
  <div id="list">
    <the-header></the-header>
    <button type="button" @click="isOpenModal = true">모달 열기</button>
    <the-modal v-show="isOpenModal" @close-modal="isOpenModal = false">
      <template v-slot:body>
        <img src="../../../assets/style-product/images/screen-sample2.png" alt="미리보기">
      </template>
    </the-modal>
    <router-link to="/app/views">보고서 보기 화면으로 이동</router-link>
  </div>
</template>

<script type="text/javascript">
import TheHeader from "@/components/the-header/the-header";

export default {
  name: "ReportList",
  extends: {},
  data(){
    return{
    isOpenModal: false
    }
  },
  props: {},
  computed: {
  },
  components: {
    TheHeader,
  },
  watch: {},
  methods: {
  }
};
</script>

<style lang="scss">
// @import ""
</style>
