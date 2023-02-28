import Vue from 'vue';
import Router from 'vue-router';

import Home from './pages/Home';
import Produto from './pages/produto/Produto';

/*
 Regisrando o router na instancia do Vue

 > Modelo HASH E HISTORY

 > Hash seusite.com/#/contato
 > History seusite.com/contato


 */
Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/produto',
            component: Produto
        }
    ]
});