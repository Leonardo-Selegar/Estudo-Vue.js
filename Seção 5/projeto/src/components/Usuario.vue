<template>
    <div id="usuario">
      <h2>{{ nome }}</h2>
      <button @click="curso">NOME CURSO</button>
    </div>
  </template>
   
  <script>
  export default {
    name: "UsuarioVue",
    props: {
      nome: {
        type: String,
        required: false,
      },
    },
    data() {
      return {
        nomeInfo: "",
      };
    },
    methods: {
      curso() {
        this.nomeInfo = "Aprendendo Matemática";
        this.$emit("nomeCurso", this.nomeInfo);
      },
    },
  };
  </script>
   
  <style scoped>
  h2 {
    color: red;
  }
  </style>