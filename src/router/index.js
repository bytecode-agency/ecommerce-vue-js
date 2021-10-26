import { createRouter, createWebHistory } from "vue-router";

// import Cart from "../modules/cart";
import Home from "../modules/home";
import Blog from "../modules/blog";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
