import Vue from "vue";
import * as VueRouter from "vue-router";
import { createRouter, createWebHistory } from "vue-router";

import HelloWorld from "./components/HelloWorld.vue";
import PlanetList from "./components/PlanetList.vue";

const routes = [
  {
    path: "/",
    component: HelloWorld,
  },
  {
    path: "/planetlist",
    component: PlanetList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
