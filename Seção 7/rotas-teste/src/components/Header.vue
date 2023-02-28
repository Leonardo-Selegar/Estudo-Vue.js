<template>
  <nav id="header">
    <h1>Sujeito Programador</h1>
    <ul>
      <li>
        <router-link to="/" class="rota">Home</router-link>
      </li>
      <li>
        <router-link to="/produto" class="rota">Produto</router-link>
      </li>
    </ul>
    
  </nav>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Header'
}
</script>

<style scoped>
  @import '../styles/header.css';
</style>