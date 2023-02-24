<template>
  <div id="app">
    <h1>Fazer Cadastro</h1>
    <div>
      <form action="">
        <label for="">Nome </label>
        <input type="text"  v-model="nome"><br>

        <label for="">Email </label>
        <input type="email" v-model="email" id=""><br>

        <label for="">Qtd Funcionarios </label>
        <input type="email" v-model="qtdfunc" id=""><br>

        <label for="">Opinião </label>
        <textarea v-model="opiniao"></textarea><br>

        <label for="">Tecnologias: </label><br>
        <label for="js">
          <input type="checkbox" v-model="tecnologias" value="javascript" id="js">
          JavaScript
        </label>
        <label for="css">
          <input type="checkbox" v-model="tecnologias" value="css" id="css">
          CSS
        </label>
        <label for="vue">
          <input type="checkbox" v-model="tecnologias" value="vue.js" id="vue">
          vue.js
        </label>
      </form>
    </div>
    <hr>
    <div class="item">
      <h2>Usuario Cadastrado</h2>
      <label for="">Nome: {{ nome }}</label><br>
      <label for="">Email: {{ email }}</label><br>
      <label for="">Qtd Funcionarios: {{ qtdfunc }}</label><br>
      <label for="">Sua opinião: {{ opiniao }}</label><br>
      <label for="">Tecnologias: </label><br>
      <ul>
        <li v-for="tech in tecnologias" :key="tech"> {{ tech }}</li>
      </ul>
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return{
      nome: '',
      email: '',
      qtdfunc: 0,
      opiniao: '',
      tecnologias: [],
    }
  }
}
</script>

<style>
  form{
    display: flex;
    flex-direction: column;
  }
</style>
