import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Searcher from '@/views/Searcher.vue'
import Fighters from '@/views/Fighters.vue'
import FoundFighter from '@/views/FoundFighter.vue'
import NotFound from '@/views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
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
  },
  {
  path:'*', //ruta que no existen
  component:NotFound,
  },
]

const router = new VueRouter({
  routes
})

export default router
