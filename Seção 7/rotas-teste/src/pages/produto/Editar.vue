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
  props: ['id'],
  beforeRouteLeave(to, from, next){
    // chama antes de sair da rota e pode acessar o this
    const response = window.confirm('Você realmente deseja sair da pagina?');
    response ? next() : next(false);
  }
}
</script>

<style scoped>

</style>