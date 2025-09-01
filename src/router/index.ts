import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: () => import('@/layout/index.vue'),
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('@/views/home.vue'),
        }
      ]
    }
  ],
})

export default router
