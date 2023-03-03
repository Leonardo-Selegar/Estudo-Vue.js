<template>
  <div id="editar">
    <h2>Editando produto {{ id }}</h2>
    <h1>Código do produto: <strong>{{ this.id }}</strong></h1>
    <h2>Nome do produto: {{ $route.query.nome }}</h2>
    <br>
    <h2>Quantidade disponível: {{ $route.query.qtd }}</h2>
  </div>
</template>a

<script>
export default {
  name: 'ProductEdit',
  props: ['id']
}
</script>

<style scoped>

</style>