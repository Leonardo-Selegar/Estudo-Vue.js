<template>
  <div id="ComponentUsuario">
    <h1>Componente App :)</h1>
    <slot name="titulo"></slot>
    <slot name="user"></slot>
    <slot name="titulo"></slot>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ComponentUsuario',
}
</script>

<style scoped>
  p{
    color: red;
  }
</style>