<template>
  <div id="app">
    <h1>Bem vindo ao meu primeiro projeto!</h1>
    <UsuarioTeste/>

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
  }
</script>

<style>

</style>