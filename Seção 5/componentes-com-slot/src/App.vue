<template>
  <div id="app">
    <h1>Componente App :)</h1>
    <ComponentUsuario>
      <strong slot="titulo">Bem vindo!!!</strong>
      <p slot="user">Meu nome é: {{ nome }}</p>
      <h1>nome usuario</h1>
    </ComponentUsuario>
  </div>
</template>

<script>
import ComponentUsuario from './components/Usuario.vue';
export default {
  name: 'App',
  components:{
    ComponentUsuario,
  },
  data(){
    return{
      nome: 'Sujeito Programador'
    }
  }
}
</script>

<style scoped>
 p{
  color: blue;
 }
</style>
