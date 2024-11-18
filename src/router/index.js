import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home2',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/anime/:id',
      name: 'anime',
      component: () => import('../views/AnimeView.vue'),
    },
    {
      path: "/",
      name: "Home",
      component: () => import('../views/TestHomeView.vue'),
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/testView.vue'),
    },
    {
      path: '/anime/:id/episodes',
      name: 'episodes',
      component: () => import('../views/EpisodesView.vue'),
    },
  ],
})

export default router
