<template>
    <div id="UsuarioTeste">
        <h2>Olá: {{nome}}</h2>
    </div>
</template>

<script>
export default {
    name: 'UsuarioTeste',
    props: {
        nome: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped> /* esse css só funciona no Usuario*/
    h2{
        color: red;
    }
</style>