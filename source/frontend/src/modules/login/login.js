import Vue from "vue";
import store from "@/store/login";
import api from "@/utils/api";
import i18n from "@/utils/i18n";
import cookie from "vue-cookies";
import AxiosInterceptor from "@/components/common/axios-interceptor.vue";
import Login from "@modules/login/Login.vue";

// svg-icon
import { VueSvgIcon } from "@yzfe/vue-svgicon";
import "@yzfe/svgicon/lib/svgicon.css";

Vue.config.productionTip = false;

Vue.use(cookie);

Vue.prototype.$cookie = cookie;
Vue.prototype.$api = api;

Vue.component("axios-interceptor", AxiosInterceptor);
Vue.component("icon", VueSvgIcon);

new Vue({
  store,
  i18n,
  render: (h) => h(Login)
}).$mount("#index");
