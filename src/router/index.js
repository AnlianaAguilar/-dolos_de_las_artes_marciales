import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Searcher from '@/views/Searcher.vue'
import Fighters from '@/views/Fighters.vue'
import FoundFighter from '@/views/FoundFighter.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    path: '/',
    name: 'peleadores',
    component: Fighters,
  },
  {
    path: '/buscador',
    name:'buscador',
    component: Searcher,
  },
  {
    path:'/peleador_encontrado/:id', //ruta dinamica
    component:FoundFighter,
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
