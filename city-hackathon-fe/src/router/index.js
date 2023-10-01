import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/applications',
      name: 'applications',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PhaseOneView.vue')
    },
    {
      path: '/application/:appId',  // Define dynamic route parameter ':appId'
      name: 'application',
      component: () => import('../views/ApplicationView.vue')
    }
  ]
})

export default router
