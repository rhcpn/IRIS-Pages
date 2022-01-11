import Vue from "vue";
import i18n from "@/utils/i18n";
import Error from "@modules/error/Error.vue";

Vue.config.productionTip = false;

new Vue({
  i18n,
  render: (h) => h(Error)
}).$mount("#error");
