import Vue from "vue";
import VueRouter from "vue-router";

import Error from "@modules/error/Error.vue";
import Page1 from "@modules/app/pages/page1.vue";
import Page2 from "@modules/app/pages/page2.vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    redirect: "./app"
  },
  {
    path: "/app",
    component: Page1
  },
  {
    path: "/app/page1",
    component: Page1
  },
  {
    path: "/app/page2",
    component: Page2
  },
  {
    path: "*",
    component: Error
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.VUE_APP_PUBLIC_PATH,
  routes
});

export default router;
