import Vue from "vue";
import * as VueRouter from "vue-router";
import { createRouter, createWebHistory } from "vue-router";

import Home from "./components/Home.vue";
import PlanetList from "./components/PlanetList.vue";
import ConstellationList from "./components/ConstellationList.vue";
import PlanetDetail from "./components/PlanetDetail.vue";
import ConstellationDetail from "./components/ConstellationDetail.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/planetlist",
    component: PlanetList,
  },
  {
    path: "/constellationlist",
    component: ConstellationList,
  },
  {
    path: "/planetdetail/:id",
    component: PlanetDetail,
  },
  {
    path: "/constellationdetail/:id",
    component: ConstellationDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
