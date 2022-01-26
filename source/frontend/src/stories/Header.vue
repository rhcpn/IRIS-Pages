<template>
  <header>
    <div class="wrapper">
      <div>
        <main-header/>
      </div>
    </div>
  </header>
</template>

<script>
import MainHeader from '../components/main-header/main-header.vue';

export default {
  name: 'header',

  components: { MainHeader },

  props: {
    user: {
      type: Object,
    },
  },

  methods: {
  },
};
</script>

<style lang="scss">
@import './stories.scss';
</style>
