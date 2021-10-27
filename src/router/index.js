import { createRouter, createWebHistory } from "vue-router";

import UserCart from "../modules/user-cart";
import Home from "../modules/home";
import Blog from "../modules/blog";
import ShoppingCategory from "../modules/shopping-category";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cart",
    name: "User Cart",
    component: UserCart,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/shopping-category",
    name: "ShoppingCategory",
    component: ShoppingCategory,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
