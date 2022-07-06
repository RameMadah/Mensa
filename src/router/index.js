import { createRouter, createWebHistory } from "vue-router";
import StartPage from "@/views/StartPage.vue";
import HomePage from "@/views/HomePage.vue";
import InfoPage from "@/views/InfoPage.vue";
const routes = [
  {
    path: "/",
    name: "StartPage",
    component: StartPage,
  },
  {
    path: "/HomePage",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/InfoPage",
    name: "InfoPage",
    component: InfoPage,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
