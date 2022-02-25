import TheHeader from '../components/the-header/the-header.vue';
import LoginForm from '../modules/login/components/login-form/login-form.vue';
import AgGridList from '../modules/main/report-list/components/ag-grid/ag-grid-list.vue';


export default {title: 'Common Component'}

const HeaderTemplate = () => ({
    components: { TheHeader },
    template: '<the-header />'
});

const LoginTemplate = () => ({
    components: { LoginForm },
    template: '<login-form />',
});

const ListTemplate = () => ({
    components: { AgGridList },
    template: '<ag-grid-list />',
});

export const Header = HeaderTemplate.bind({});
export const Login = LoginTemplate.bind({});
export const List = ListTemplate.bind({});

