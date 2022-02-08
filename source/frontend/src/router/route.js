import Vue from "vue";
import VueRouter from "vue-router";

import Error from "@modules/error/Error.vue";
import ReportView from "@modules/main/report-view/report-view.vue";
import ReportList from "@modules/main/report-list/report-list";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    redirect: "./app"
  },
  {
    path: "/app",
    component: ReportList
  },
  {
    path: "/app/list",
    component: ReportList
  },
  {
    path: "/app/views",
    component: ReportView
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
