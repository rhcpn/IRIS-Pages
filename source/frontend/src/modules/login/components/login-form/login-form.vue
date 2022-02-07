<template lang="html">
  <div>
    <form class="form login-form" @submit.prevent="submit">
      <icon data="@icon/user-setting.svg"></icon>
      <label for="username"> 사용자명1:</label><br/>
      <input
          class="text-input"
          type="text"
          id="username"
          v-model="username"
          maxlength="10"
          required
      /><br/>
      <icon data="@icon/key.svg"></icon>
      <label for="password">비밀번호:</label><br/>
      <input
          class="text-input"
          type="password"
          id="password"
          v-model="password"
          maxlength="15"
          required
      /><br/>
      <select id="locale" class="login_form-locale">
        <option value="korean">한국어</option>
        <option value="English">English</option>
      </select
      ><br/>
      <button type="submit" class="button button--primary button--lg w-12_12">
        로그인
      </button>
    </form>
  </div>
</template>

<script type="text/javascript">

export default {
  name: "LoginForm",
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
    submit() {
      if (this.username && this.password) {
        this.$emit("login", {
          username: this.username,
          password: this.password
        })
      }
    }
  }
};
</script>

<style lang="scss">
@import "login-form";
</style>
