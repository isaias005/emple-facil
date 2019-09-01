<template>
  <v-app class="app">
    <Navbar></Navbar>
    <router-view></router-view>
    <BottomNavigation></BottomNavigation>
  </v-app>
</template>

<script>
import Navbar from "./components/shared/Navbar";
import BottomNavigation from "./components/shared/BottomNavigation"
export default {
  name: "App",
  components: {
    Navbar,
    BottomNavigation
  },
  data: () => ({})
};
</script>

<style>
</style>