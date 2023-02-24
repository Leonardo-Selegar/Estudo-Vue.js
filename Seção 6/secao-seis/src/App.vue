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
        </label><br>

        <label>Qual tipo de contratação:</label>
        <select v-model="contratoSelected">
          <option v-for="contrato in contratos" :key="contrato.id" :value="contrato.nome">{{contrato.nome}}</option>
        </select><br>

        <label>Qual seu nível: </label>
        <label for="basico">
          <input type="radio" value="basico" id="básico" v-model="nivel">
          Básico
        </label>
        <label for="intermediario">
          <input type="radio" value="intermediario" id="intermediario" v-model="nivel">
          Intermediário
        </label>
        <label for="avancado">
          <input type="radio" value="avançado" id="avancado" v-model="nivel">
          Avançado
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
      <label for="">Tipo de contratação: {{ contratoSelected }}</label><br>
      <label for="">O seu nível é: {{ nivel }}</label>
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
      contratos: [
        { id: 1, nome:'Freelancer'},
        { id: 2, nome:'CLT'},
        { id: 3, nome:'PJ'},
        { id: 4, nome: 'Remoto'}
      ],
      contratoSelected: 'Freelancer',
      nivel: 'basico',
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
