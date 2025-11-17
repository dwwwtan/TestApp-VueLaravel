import { createRouter, createWebHistory } from 'vue-router'

// Import các "trang" (views) của chúng ta
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      // meta: { requiresAuth: true } // Tạm thời comment, sau này sẽ dùng để bảo vệ
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
  ]
})

export default router