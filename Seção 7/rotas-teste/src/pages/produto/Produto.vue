<template>
  <div id="produto">
    <h1>Tela Produto</h1>
    <h1>Código do produto: <strong>{{ this.id }}</strong></h1>
    <button @click="irHome">Ir para a home</button>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Produto',
  props: ['id'],
  methods:{
    irHome(){
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>