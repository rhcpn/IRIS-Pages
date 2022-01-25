<template lang="html">
  <div id="index">
    <login-form />
    <axios-interceptor />
  </div>
</template>

<script type="text/javascript">
import LoginForm from "./pages/login-form";

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
  methods: {}
};
</script>

<style lang="scss">
// @import ""
</style>
