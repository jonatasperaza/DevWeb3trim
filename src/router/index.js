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
      path: "/test",
      name: "test",
      component: () => import('../views/testeHomeView.vue'),
    },
    {
      path: "/movie/:id",
      name: "movie",
      component: () => import('../views/MovieView.vue'),
    },
    {
      path: "/favorites",
      name: "favorites",
      component: () => import('../views/FavoritesView.vue'),
    }
  ],
})

export default router
