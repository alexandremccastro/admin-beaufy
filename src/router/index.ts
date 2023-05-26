// Composables
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/layouts/Auth.vue'),
    children: [
      {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/auth/Login.vue'),
      },
      {
        path: '/register',
        name: 'Register',
        component: () => import('@/views/auth/Register.vue'),
      },
    ],
  },
  {
    path: '/',
    meta: { requiresAuth: true },
    component: () => import('@/views/layouts/Admin.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: import('@/views/pages/Home.vue'),
      },
      {
        path: '/widgets',
        name: 'Widgets',
        component: import('@/views/pages/Widgets.vue'),
      },
      {
        path: '/charts',
        name: 'Charts',
        component: import('@/views/pages/Charts.vue'),
      },
      {
        path: '/ui',
        name: 'UI',
        children: [
          {
            path: 'general',
            name: 'General',
            component: import('@/views/ui/General.vue'),
          },
          {
            path: 'buttons',
            name: 'Buttons',
            component: import('@/views/ui/Buttons.vue'),
          },
          {
            path: 'icons',
            name: 'Icons',
            component: import('@/views/ui/Icons.vue'),
          },
          {
            path: 'snackbars',
            name: 'Snackbars',
            component: import('@/views/ui/Snackbars.vue'),
          },
        ],
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
