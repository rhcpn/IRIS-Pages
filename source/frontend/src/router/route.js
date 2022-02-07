import Vue from "vue";
import VueRouter from "vue-router";

import Error from "@modules/error/Error.vue";
import Views from "@modules/main/views/Views.vue";
import List from "@modules/main/list/list";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    redirect: "./app"
  },
  {
    path: "/app",
    component: List
  },
  {
    path: "/app/list",
    component: List
  },
  {
    path: "/app/views",
    component: Views
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
