import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import menuRouter from "../modules/menu/router/index";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName:"login"*/ "@/modules/auth/views/LogIn"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () =>
      import(/* webpackChunkName:"signup" */ "@/modules/auth/views/SignUp"),
  },
  {
    path: "/forgot",
    name: "forgot",
    component: () =>
      import(
        /* webpackChunkName:"ForgetPassword" */ "@/modules/auth/layouts/ForgetPassword"
      ),
  },
  ...menuRouter,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
