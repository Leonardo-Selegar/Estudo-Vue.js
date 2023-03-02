<template>
  <div id="produto">
    <h1>Tela Produto</h1>
    <br/>
    <router-view/>
    <button @click="irHome">Ir para a home</button>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Produto',
  methods:{
    irHome(){
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>