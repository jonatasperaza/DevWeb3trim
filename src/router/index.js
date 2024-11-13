import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/anime/:id',
      name: 'anime',
      component: () => import('../views/AnimeView.vue'),
    },
    {
      path: "/testHome",
      name: "testHome",
      component: () => import('../views/TestHomeView.vue'),
    }
  ],
})

export default router
