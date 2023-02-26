<template>
  <div id="app">
    <header>
      <strong>Vue Nutri</strong>
    </header>
    <article v-for="item in responseApi" :key="item.id"> 
      <strong>{{ item.titulo }}</strong>
      <img :src="item.capa" :alt="item.titulo" />
      <p>Categoria: {{ item.categoria }}</p>
      <p>{{ item.subtitulo }}</p>
      <button>Acessar</button>
    </article>
  </div>
</template>

<script>
import api from './services/api'

export default {
  name: 'App',
  data(){
    return{
      responseApi: [],
    }
  },
  async created(){ // quando a pag é criada
    const response = await api.get('?api=posts');
    this.responseApi = response.data;
  },
}
</script>

<style>

</style>
