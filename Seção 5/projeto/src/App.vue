<template>
  <div id="app">

    <h1>Bem vindo ao meu primeiro projeto!</h1>
    <p>Componente App:  {{nome}}</p>

    <button @click="entrar">Entrar</button>

    <Usuario :nome="nome" @nomeCurso="nome = $event" />

  </div>
</template>

<script>
import Usuario from './components/Usuario';

  export default{
    name: 'App',
    components:{
      Usuario
    },
    data(){
      return{
        nome:'Sujeito Programador'
      }
    },
    methods:{
      entrar(){
        this.nome = 'Curso Vue JS';
      }
    }
  }
</script>

<style scped>

</style>
