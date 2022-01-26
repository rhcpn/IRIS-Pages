<template>
  <header>
    <div class="wrapper">
      <div>
        <login-form/>
      </div>
    </div>
  </header>
</template>

<script>
import LoginForm from '../modules/login/components/login-form/login-form.vue';

export default {
  name: 'my-login',

  components: { LoginForm },

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
