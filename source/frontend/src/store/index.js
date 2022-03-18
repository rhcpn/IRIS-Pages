import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        report_list: []
    },

    getters: {},

    mutations: {
        SET_REPORT_LIST(state, reportList) {
            state.report_list = reportList;
        },
    },

    actions: {
        async fetchReportList({commit}) {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/photos");
                // context.commit('전송할 mutations 함수 이름', 전송할 데이터);
                commit('SET_REPORT_LIST', response.data);
            } catch (err) {
                console.log(err);
            }
        }
    }
})

export default store;