import TheHeader from '../components/the-header/the-header.vue';
import LoginForm from '../modules/login/components/login-form/login-form.vue';
import TheModal from '../components/the-modal/the-modal.vue';
import ReportScreen from '../modules/main/report-view/components/report-screen/report-screen.vue'
import ReportSlider from '../modules/main/report-view/components/report-slider/report-slider.vue'
export default {title: 'Common Component'}

const HeaderTemplate = () => ({
    components: { TheHeader },
    template: '<the-header />'
});

const LoginTemplate = () => ({
    components: { LoginForm },
    template: '<login-form />',
});

const ModalTemplate = () => ({
    components: { TheModal },
    template: '<the-modal><template v-slot:header>Modal Header</template><template v-slot:body>MODAL Body</template></the-modal>',
});

const ReportScreenTemplate = () => ({
    components: { ReportScreen },
    template: '<report-screen />',
});

const ReportSliderTemplate = () => ({
    components: { ReportSlider },
    template: '<report-slider />',
});

export const Header = HeaderTemplate.bind({});
export const Login = LoginTemplate.bind({});
export const Modal = ModalTemplate.bind({});
export const Screen = ReportScreenTemplate.bind({});
export const Slider = ReportSliderTemplate.bind({});
