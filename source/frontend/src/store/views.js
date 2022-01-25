import Vue from "vue";
import Vuex from "vuex";
import slideshow from "./views/slideshow";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        slideshow
    }
})

/*
  dev 모드에서 refresh 없이 vuex 소스 hotUpdate 되도록 추가
  아래 소스의 accept, const, modules 에 해당 모듈을 추가해줘야 함
  기존에는 인벤토리와 같이 path 가 / 인 경우가 아니면 개발시 소스 수정할때마다
  브라우저에서 / path 로 접근해야지만 수정된 소스가 브라우저에 반영됨.

  hotUpdate 적용시 refresh 없이 수정된 소스가 브라우저에 바로 적용됨.
*/
if (module.hot) {
    // accept actions and mutations as hot modules
    module.hot.accept(["./views/slideshow"], () => {
        // require the updated modules
        // have to add .default here due to babel 6 module output
        // const newMutations = require('./mutations').default
        const slideshow = require("./views/slideshow").default;

        // swap in the new actions and mutations
        store.hotUpdate({
            modules: {
                slideshow
            }
        });
    });
}

export default store;


