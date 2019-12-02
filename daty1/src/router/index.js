/*
 * @Author: 席鹏昊
 * @Date: 2019-11-29 19:30:44
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-01 19:46:51
 * @Description: 
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component:()=>import('../views/home.vue')
  },
  {
    path:"/details",
    component:()=>import("../views/details.vue")
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
