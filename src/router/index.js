import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Groups from "../views/Groups.vue";
import Chat from "../views/Chat.vue";
import Members from "../views/Members.vue";

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
    path: "/chat/:userID/:chatID",
    name: "Chat",
    component: Chat
  },
  {
    path: "/members/:userID/:chatID",
    name: "Members",
    component: Members
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
