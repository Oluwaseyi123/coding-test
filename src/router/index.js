// import path from "path/posix";
import { createRouter, createWebHashHistory } from "vue-router";
import ViewOne from "../views/ViewOne.vue";

const routes = [
  {
    path: "/",
    redirect: {
      name: "Home",
    },
  },
  {
    path: "/view-one",
    props: true,
    name: "Home",
    component: ViewOne,
  },
  {
    path: "/view-one/domain/:domain/page/:page",
    props: true,
    name: "View Two",
    component: () =>
      import("../views/ViewTwo.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
