import Vue from "vue";
import Vuex from 'vuex';
import { VueSvgIcon } from "@yzfe/vue-svgicon";
import "@yzfe/svgicon/lib/svgicon.css";


Vue.use(Vuex);
Vue.component("icon", VueSvgIcon);

export const decorators = [
    (story) => ({
        components: { story },
        template: '<div style="margin: 3em;"><story /></div>',
    }),
];