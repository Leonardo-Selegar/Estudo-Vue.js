<template>
  <div id="app">
    <header>
      <strong>Vue Nutri</strong>
    </header>
    <div v-if="loading" class="carregando">
      <h1>Carregando...</h1>
    </div>
    <article v-else v-for="item in responseApi" :key="item.id" class="post"> 
      <strong class="titulo">{{ item.titulo }}</strong>
      <img :src="item.capa" :alt="item.titulo" />
      <p class="categoria">Categoria: {{ item.categoria }}</p>
      <p class="subtitulo">{{ item.subtitulo }}</p>
      <button class="btn">Acessar</button>
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
      loading: true,
    }
  },
  async created(){ // quando a pag é criada
    const response = await api.get('?api=posts');
    this.responseApi = response.data;
    this.loading = false
  },
}
</script>

<style scoped>@import './styles/app.css';</style>
