import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("../pages/Home.vue");
const Sponsorship = () => import("../pages/Sponsorship.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { navForceDark: false, navHideMenu: false }, // transparente e com menus
    },
    {
      path: "/sponsorship",
      name: "sponsorship",
      component: Sponsorship,
      meta: { navForceDark: true, navHideMenu: true }, // sempre dark e sem menus
    },
  ],
  scrollBehavior(_to, _from, saved) {
    return saved ?? { top: 0 };
  },
});

export default router;
