<template lang="html">
  <div>
    <strong> 헤더 컴포넌트 ~</strong>
    <a href="/logout"> LOG OUT!!! </a>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "main-header",
  extends: {},
  props: {
    bar: {},
    foo: {},
    fooBar: {}
  },
  computed: {},
  components: {},
  watch: {},
  methods: {}
};
</script>

<style lang="scss">
 @import "./main-header";
</style>
