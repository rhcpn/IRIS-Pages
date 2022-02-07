import MainHeader from '../components/main-header/main-header.vue';
import LoginForm from '../modules/login/components/login-form/login-form.vue';

export default {title: 'Common Component'}

const HeaderTemplate = () => ({
    components: { MainHeader },
    template: '<main-header />'
});

const LoginTemplate = () => ({
    components: { LoginForm },
    template: '<login-form />',
});

export const Header = HeaderTemplate.bind({});
export const Login = LoginTemplate.bind({});
