<script>
import Vue from "vue";
import LoadingOverlay from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

/**
 * AXIOS의 Interceptor 설정 및
 * Request - Response 간의 자동 Preloader 기능 지원
 * @displayName Axios-Interceptor
 */
export default {
  name: "AxiosInterceptor",
  components: {
    "loading-overlay": LoadingOverlay
  },
  template: " ",
  data() {
    return {
      loader: null,
      requestCount: 0
    };
  },
  created() {
    Vue.use(LoadingOverlay);
    let api = Vue.prototype.$api;
    api.interceptors.request.use(this.requestSuccess, this.requestError);
    api.interceptors.response.use(this.responseSuccess, this.responseError);
  },
  methods: {
    getErrorMessage(message) {
      if (message === null || message === "") {
        message = "여기에 시스템 에러 메세지를 넣어야 함";
      }
      return message;
    },
    requestSuccess(config) {
      this.showLoader(config);
      return config;
    },
    requestError(error) {
      return Promise.reject(error);
    },
    responseSuccess(response) {
      this.hideLoader();

      let data = response.data;
      if (data.hasOwnProperty("result") && data.result === 0) {
        alert(this.getErrorMessage(data.errorMessage));
        return Promise.reject(response);
      }

      return data.data;
    },
    responseError(error) {
      this.hideLoader();
      alert(this.getErrorMessage(error));
      return Promise.reject(error);
    },
    showLoader(config) {
      if (config.noLoader) {
        return;
      }
      if (this.requestCount === 0) {
        this.loader = this.$loading.show({
          //container: this.$refs.loadingContainer,
          //canCancel: true, // default false
          //onCancel: this.yourMethodName,
          //color: "#000000",
          //width: 64,
          //height: 64,
          //backgroundColor: "#ffffff",
          //opacity: 0.5,
          //zIndex: 999,
          loader: "spinner"
        });
      }

      this.requestCount++;
    },
    hideLoader() {
      this.requestCount--;
      if (this.requestCount === 0) {
        this.loader.hide();
      }
    }
  }
};
</script>
