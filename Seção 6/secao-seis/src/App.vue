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
      </form>
    </div>
    <hr>
    <div class="item">
      <h2>Usuario Cadastrado</h2>
      <label for="">Nome: {{ nome }}</label><br>
      <label for="">Email: {{ email }}</label><br>
      <label for="">Qtd Funcionarios: {{ qtdfunc }}</label><br>
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
    }
  }
}
</script>

<style>

</style>
