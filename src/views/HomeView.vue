<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Hola Mundo</h1>
    <button @click="goToDaybook" class="btn btn-success">Boton 1</button>
    <button @click="goToDaybook" class="btn btn-secondary">Boton 2</button>
    <button @click="goToDaybook" class="btn btn-primary">Boton 3</button>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  methods: {
    goToDaybook() {
      this.$router.push({ name: "no-entry" });
    },
  },
};
</script>
