import Login from './Login';

export default {
  title: 'Common Component',
  component: Login
};

export const _Login= () => ({
  components: { Login },
  template: '<Login></Login>',
  methods: {
  }
});