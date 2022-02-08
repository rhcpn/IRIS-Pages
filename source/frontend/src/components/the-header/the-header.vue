<template lang="html">
  <div>
    <strong> 헤더 컴포넌트 ~</strong>
    <a href="/logout"> LOG OUT!!! </a>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "TheHeader",
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
 @import "src/components/the-header/the-header";
</style>
