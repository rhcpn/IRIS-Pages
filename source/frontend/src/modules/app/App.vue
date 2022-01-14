<template lang="html">
  <div id="app">
    <h1>Hello!! IRIS Pages World!!</h1>
    <a href="/logout"> LOG OUT!!! </a>
    <ul>
      <li>
        <router-link to="/app/page1">Page1</router-link>
      </li>
      <li>
        <router-link to="/app/page2">Page2</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "App",
  extends: {},
  props: {},
  computed: {},
  components: {},
  watch: {},
  methods: {}
};
</script>
