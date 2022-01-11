<template lang="html">
  <div>
    <form class="form login-form" @submit.prevent="submit">
      <icon data="@icon/user-setting.svg"></icon>
      <label for="username"> 사용자명1:</label><br />
      <input
        class="text-input"
        type="text"
        id="username"
        v-model="username"
        maxlength="10"
        required
      /><br />
      <icon data="@icon/key.svg"></icon>
      <label for="password">비밀번호:</label><br />
      <input
        class="text-input"
        type="password"
        id="password"
        v-model="password"
        maxlength="15"
        required
      /><br />
      <select id="locale" class="login_form-locale">
        <option value="korean">한국어</option>
        <option value="English">English</option></select
      ><br />
      <button type="submit" class="button button--primary button--lg w-12_12">
        로그인
      </button>
    </form>
  </div>
</template>

<script type="text/javascript">
import RSA from "rsajs";

export default {
  name: "Login",
  extends: {},
  props: {},
  data() {
    return {
      username: "",
      password: ""
    };
  },
  computed: {},
  components: {},
  watch: {},
  methods: {
    async submit() {
      let publicKey = await this.getPublicKey();
      let password = this.password;

      if (publicKey && publicKey !== "") {
        password = this.encrypt(publicKey, this.password);
      }

      let xAccessToken = await this.auth(this.username, password);
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
@import "Login.scss";
</style>
