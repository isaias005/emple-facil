<template>
  <v-bottom-navigation class="d-flex d-md-none" app grow mandatory>
    <v-btn to="/" color="primary" text exact>
      <span>Inicio</span>
      <v-icon>home</v-icon>
    </v-btn>
    <v-btn to="/search" color="teal darken-4" text exact>
      <span>Buscar Empleo</span>
      <v-icon>search</v-icon>
    </v-btn>
    <v-btn to="/publish" color="indigo darken-4" text exact>
      <span>Publicar Empleo</span>
      <v-icon>add</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: "BottomNavigation",
  data: () => ({}),
  computed: {
    currentLocation() {
      return this.$route.path;
    }
  }
};
</script>

<style scoped>
.v-bottom-navigation a.v-btn--router.v-btn--active::before {
  opacity: 0;
}
</style>