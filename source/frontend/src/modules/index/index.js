import Vue from "vue";
import api from "@/utils/api";
import i18n from "@/utils/i18n";
import * as Sentry from "@sentry/vue";
import { Integrations } from "@sentry/tracing";
import cookie from "vue-cookies";
import AxiosInterceptor from "@/components/common/axios-interceptor.vue";
import Index from "@modules/index/Index.vue";

// svg-icon
import { VueSvgIcon } from "@yzfe/vue-svgicon";
import "@yzfe/svgicon/lib/svgicon.css";

Vue.config.productionTip = false;

Vue.use(cookie);

Vue.prototype.$cookie = cookie;
Vue.prototype.$api = api;

Vue.component("axios-interceptor", AxiosInterceptor);
Vue.component("icon", VueSvgIcon);

Sentry.init({
  Vue,
  dsn:
    "https://c10f0211c0bb41af973f1f5ebf7fda60@o924939.ingest.sentry.io/6044951",
  integrations: [
    new Integrations.BrowserTracing({
      tracingOrigins: [/^\//]
    })
  ],
  tracesSampleRate: 1.0
});

new Vue({
  i18n,
  render: (h) => h(Index)
}).$mount("#index");
