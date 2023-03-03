<template>
  <div id="meus-produt">
    <ul>
      <router-link class="li-router" tag="li" to="/produto/1">Adesivo</router-link>
      <router-link class="li-router" tag="li" to="/produto/2">Camisa</router-link>
      <router-link class="li-router" tag="li" to="/produto/3">MousePad</router-link>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .li-router{
    cursor: pointer;
  }
</style>