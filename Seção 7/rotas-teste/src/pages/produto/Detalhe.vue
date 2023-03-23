<template>
  <div id="detalhe">
    <h2>Detalhe do produto</h2>
    <h1>Código do produto: <strong>{{ this.id }}</strong></h1>
    <!--
      <router-link :to="`/produto/${id}/editar`">
        Editar produto: {{ id }}
      </router-link>
    -->
    <router-link
      :to="{name: 'editar', params: {id}, query: { nome: 'camiseta', qtd: 22}}"
    >
      Editar produto: {{ id }}
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'ProductsDetails',
  props: ['id'],
  beforeRouteEnter(to, from, next) {
    // beforeRouteEnter n pode acessar o this, pois nem criou o component ainda
    console.log('Antes de entrar na rota detalhe');
    next()
  }
}
</script>

<style scoped>

</style>