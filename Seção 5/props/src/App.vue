<template>
  <div id="app">
    <h1>Bem vindo ao meu primeiro projeto!</h1>
    <button @click="entrar">Entrar</button>
    <UsuarioTeste :nome="nome"/>
  </div>
</template>

<script>
import UsuarioTeste from './components/UsuarioTeste.vue';

  export default{
    name: 'App',
    components:{
      UsuarioTeste
    },
    data(){
      return{
        nome:'Sujeito Programador'
      }
    },
    methods: {
      entrar() {
        this.nome = 'Curso Vue JS';
      }
    }
  }
</script>

<style>

</style>