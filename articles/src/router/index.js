import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/IndexView')
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('../views/CreateView'),
  },
  {
    path: '/404-not-found',
    name: 'NotFound404',
    component: () => import('../views/NotFound404'),
  },
  {
    path: '/:id',
    name: 'detail',
    component: () => import('../views/DetailView'),
  },
  {
    path: '*',
    redirect: {name: 'NotFound404'},
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
