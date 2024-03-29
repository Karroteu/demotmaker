import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/create',
    name: 'Create',
    component: () => import(/* webpackChunkName: "about" */ '../views/Create.vue')
  },
  {
    path: '/discover',
    name: 'Discover',
    component: () => import(/* webpackChunkName: "about" */ '../views/Discover.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
