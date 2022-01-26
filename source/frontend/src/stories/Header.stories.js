import Header from './Header';

export default {
    title: 'Common Component',
    component: Header
};

export const _Header= () => ({
    components: { Header },
    template: '<Header></Header>',
    methods: {
    }
});