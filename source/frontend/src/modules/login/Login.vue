<template lang="html">
  <div id="index">
    <login-form @login="login"></login-form>
    <axios-interceptor />
  </div>
</template>

<script type="text/javascript">
import RSA from "rsajs";
import LoginForm from "@login/components/login-form/login-form";

export default {
  name: "Login",
  extends: {},
  props: {
    bar: {},
    foo: {},
    fooBar: {}
  },
  data: () => ({}),
  computed: {},
  components: {
    LoginForm
  },
  watch: {},
  methods: {
    async login(userInfo){

      let publicKey = await this.getPublicKey();
      let password = userInfo.password;

      if (publicKey && publicKey !== "") {
        password = this.encrypt(publicKey, userInfo.password);
      }

      let xAccessToken = await this.auth(userInfo.username, password);
      console.info(publicKey, xAccessToken);

      if (xAccessToken && xAccessToken !== "") {
      window.location.href = "app";
      }
    },

    async getPublicKey() {
      return this.$api.get("/api/authenticate/key");
    },

    async auth(username, password) {
      return this.$api.post("/api/authenticate", {
        username: username,
        password: password
      });
    },

    encrypt(key, source) {
      let rsa = new RSA();
      rsa.setKey(key);
      return rsa.encrypt(source);
    }
  }
};
</script>

<style lang="scss">
// @import ""
</style>
