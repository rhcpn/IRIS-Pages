<template>
  <header>
    <div class="wrapper">
      <div>
        <login/>
      </div>
      <div>
        <my-button size="small" @onClick="onLogout" label="Log out" v-if="user" />
        <my-button size="small" @onClick="onLogin" label="Log in" v-if="!user" />
        <my-button primary size="small" @onClick="onCreateAccount" label="Sign up" v-if="!user" />
      </div>
    </div>
  </header>
</template>

<script>
import './header.css';
import MyButton from './Button.vue';
import Login from '../components/login'

export default {
  name: 'my-header',

  components: { MyButton, Login },

  props: {
    user: {
      type: Object,
    },
  },

  methods: {
    onLogin() {
      this.$emit('onLogin');
    },
    onLogout() {
      this.$emit('onLogout');
    },
    onCreateAccount() {
      this.$emit('onCreateAccount');
    },
  },
};
</script>
