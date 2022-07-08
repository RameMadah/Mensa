import { createRouter, createWebHistory } from "vue-router";
import { LoginCallback } from "@okta/okta-vue";
import StartPage from "@/views/StartPage.vue";
import HomePage from "@/views/HomePage.vue";
import InfoPage from "@/views/InfoPage.vue";
import ProfileComponent from "@/views/ProfilePage.vue";
import Login from "@/views/LogIn.vue";

const routes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/login/callback",
    component: LoginCallback,
  },
  {
    path: "/profile",
    component: ProfileComponent,
    meta: {
      requiresAuth: true,
    },
  },
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
  linkActiveClass: "A",
  routes,
});

export default router;
