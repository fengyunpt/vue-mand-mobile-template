import Vue from 'vue'
import VueRouter from 'vue-router'

import Test from './modules/test'

Vue.use(VueRouter)

const commonRoutes = [
  { path: '/404', component: () => import('../components/routererror/404') },
  { path: '/401', component: () => import('../components/routererror/401') },
  // { path: '*', redirect: '/404' },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: "/login",
    name: "login",
    component: () => import('../views/Login'),
    meta: {
      title: '登录'
    }
  }, {
    path: "/home",
    name: "home",
    component: () => import('../views/Home'),
    meta: {
      title: '主页'
    }
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes: commonRoutes.concat(Test)
})

export default router
