<template lang="html">
  <div id="list">
    <the-header></the-header>
    <button type="button" @click="openModal">모달 열기</button>
    <the-modal v-show="isOpenModal" @close-modal="closeModal">
      <template v-slot:body>
        <img src="../../../assets/style-product/images/screen-sample2.png" alt="미리보기">
      </template>
    </the-modal>
    <router-link to="/app/views">보고서 보기 화면으로 이동</router-link>
  </div>
</template>

<script type="text/javascript">
import TheHeader from "@/components/the-header/the-header";
import TheModal from "@/components/the-modal/the-modal"

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
  }
};
</script>

<style lang="scss">
// @import ""
</style>
