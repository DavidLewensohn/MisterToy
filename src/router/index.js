import { createRouter, createWebHistory } from 'vue-router'
import homeView from '../views/home.vue'
import toyApp from '../views/toy-app.vue'
import toyDetails from '../views/toy-details.vue'
import toyEdit from '../views/toy-edit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homeView
    },
    {
      path: '/toy',
      name: 'toy-app',
      component: toyApp
    },
    {
      path: '/toy/:id',
      name: 'toy-details',
      component: toyDetails
    },
    {
      path: '/toy/edit/:id',
      name: 'toy-edit',
      component: toyEdit
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/about.vue')
    }
  ]
})

export default router
