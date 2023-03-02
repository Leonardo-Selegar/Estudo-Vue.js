<template>
  <div id="detalhe">
    <h2>Detalhe do produto</h2>
    <h1>Código do produto: <strong>{{ this.id }}</strong></h1>
  </div>
</template>

<script>

export default {
  name: 'ProductsDetails',
  props: ['id']
}
</script>

<style>

</style>