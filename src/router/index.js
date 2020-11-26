import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Groups from "../views/Groups.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/groups",
    name: "groups",
    component: Groups
  },
  {
    path: "/*",
    redirect: "/"
  }
];

const router = new VueRouter({
  routes
});

export default router;
