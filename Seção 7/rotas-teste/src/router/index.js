import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home.vue';
import Produto from '../pages/produto/Produto';
import MeusProdutos from '../pages/produto/MeusProdutos.vue';
import Editar from '../pages/produto/Editar.vue';
import Detalhe from '../pages/produto/Detalhe.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/produto',
    name: 'produto',
    component: Produto,
    beforeEnter: (to, from, next) => { console.log('ANTES DA ROTA PRODUTO'); next()},
    children: [
      {path: '', component: MeusProdutos},
      {path: ':id', component: Detalhe, props: true},
      {path: ':id/editar', component: Editar, props: true, name: 'editar' },
    ]
  },
  {
    path: '*',
    name: 'home',
    component: Home
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//router.beforeEach((to, from, next) => {
//  console.log('CHAMADO ANTES DAS ROTAS');
//  next();
//})

export default router
