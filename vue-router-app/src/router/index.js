import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const isLoggedIn = true

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/hello/:userName',
    name: 'hello',
    component: () => import('../views/HelloView'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView'),
    beforeEnter(to, from, next) {
      if (isLoggedIn === true) {
        console.log('already logged in')
        next({name: 'home'})
      } else {
        next()
      }
    }
  },
  {
    path: '/404',
    name: 'NotFound404',
    component: () => import('../views/NotFound404'),
  },
  {
    path: '/dog/:breed',
    name: 'dog',
    component: () => import('../views/DogView'),
  },
  {
    path: '*',
    redirect: '/404',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

// router.beforeEach((to, from, next) => {
//   const isLoggedIn = false
//   const authPages = ['hello']
//   const isAuthRequired = authPages.includes(to.name)

//   if (isAuthRequired && !isLoggedIn) {
//     console.log('move to Login!')
//     next({ name: 'login'})
//   } else {
//     console.log('move to to!')
//     next()
//   }
// })