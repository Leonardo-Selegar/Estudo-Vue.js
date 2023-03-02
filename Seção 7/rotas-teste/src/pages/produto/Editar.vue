<template>
  <div id="editar">
    <h2>Editar produto</h2>
    <h1>Código do produto: <strong>{{ this.id }}</strong></h1>
  </div>
</template>

<script>
export default {
  name: 'ProductEdit',
  props: ['id']
}
</script>

<style>

</style>