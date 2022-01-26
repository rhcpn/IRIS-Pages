import Main from './Main';

export default {
    title: 'Common Component',
    component: Main
};

export const _Main= () => ({
    components: { Main },
    template: '<Main></Main>',
    methods: {
    }
});