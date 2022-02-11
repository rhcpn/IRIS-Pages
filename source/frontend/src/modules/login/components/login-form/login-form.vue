<template lang="html">
  <form class="form login-form" @submit.prevent="submit">
    <h1 class="login-form__title">Login</h1>
    <div class="login-form__input-box">
      <div class="login-form__label">
        <label for="username">User Name</label>
      </div>
      <input
          class="text-input text-input--lg"
          type="text"
          id="username"
          v-model="username"
          maxlength="10"
          required
          placeholder="User Email"
      />
      <div class="login-form__label">
        <label for="password">Password</label>
      </div>
      <input
          class="text-input text-input--lg"
          type="password"
          id="password"
          v-model="password"
          maxlength="15"
          required
          placeholder="Password"
      />
      <div class="login-form__option">
        <div class="checkbox">
          <input id="saveUser" type="checkbox" value="label"
                 class="checkbox__input login-form-option__save-username-check">
          <label for="saveUser" class="checkbox__label">
            <span class="login-form-option__save-username-check-lable-text">Remember me</span>
          </label>
        </div>
      </div>
    </div>
    <div class="login-form__button">
      <button type="submit" class="button button--primary button--lg w-12_12">
        LOGIN
      </button>
    </div>
  </form>
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
