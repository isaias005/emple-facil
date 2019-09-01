<template>
  <v-app-bar app elevate-on-scroll class="pa-0">
    <router-link to="/">
      <v-img alt="Emplefacil logo" src="../../assets/logo.png" max-width="150" max-height="50"></v-img>
    </router-link>
    <div class="flex-grow-1"></div>
    <v-toolbar-items class="d-none d-md-flex">
      <v-btn text color="primary" class="text-capitalize" @click="home=true" to="/" exact>
        <v-icon left size="25">home</v-icon>Inicio
      </v-btn>
      <v-btn text color="primary" class="text-capitalize" to="/search" exact>
        <v-icon left size="25">search</v-icon>Buscar Empleo
      </v-btn>
      <v-btn text color="primary" class="text-capitalize" to="/publish" exact>
        <v-icon left size="25">add</v-icon>Publicar Empleo
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({})
};
</script>

<style scoped>
</style>