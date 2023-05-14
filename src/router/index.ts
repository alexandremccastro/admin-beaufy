// Composables
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/views/layouts/Auth.vue"),
    children: [
      {
        path: "/login",
        name: "Login",
        component: () => import("@/views/auth/Login.vue"),
      },
      {
        path: "/register",
        name: "Register",
        component: () => import("@/views/auth/Register.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
