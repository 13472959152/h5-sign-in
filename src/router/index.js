import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "index" */ '../views/Home.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
