<template lang="html">
  <div id="index">
    <Login />
    <axios-interceptor />
  </div>
</template>

<script type="text/javascript">
import Login from "./sample/Login";

export default {
  name: "Index",
  extends: {},
  props: {
    bar: {},
    foo: {},
    fooBar: {}
  },
  data: () => ({}),
  computed: {},
  components: {
    Login
  },
  watch: {},
  methods: {}
};
</script>

<style lang="scss">
// @import ""
</style>
