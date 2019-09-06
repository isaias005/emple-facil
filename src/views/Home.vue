<template>
  <v-content class="home">
    <v-container fluid class="pa-0">
      <v-row>
        <v-col cols="12" class="py-0">
          <v-card color="primary" class="py-12" tile flat>
            <v-card-title class="display-1 justify-center white--text">¿Buscas trabajo?</v-card-title>
            <v-form>
              <v-container>
                <v-row class="justify-center">
                  <v-col cols="4">
                    <v-text-field
                      placeholder="Puesto, palabras clave o empresa"
                      solo
                      flat
                      append-icon="search"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="4">
                    <v-text-field
                      placeholder="Provincia, ciudad o codigo postal"
                      solo
                      flat
                      append-icon="room"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="2" class>
                    <v-btn
                      class="text-capitalize white--text"
                      color="#0E4380"
                      depressed
                      block
                      height="45"
                    >Buscar trabajo</v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row class="text-center pt-12">
        <v-col cols="12" class="pt-12">
          <span class="display-1">Consigue trabajo en una empresa</span>
        </v-col>
        <v-col cols="12">
          <span class="body-2">Construye un buen portafolio y consigue el trabajo de tus sueños</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-card class="pa-1">
            <v-img src="../assets/facebook-logo-2.jpg"></v-img>
            <v-card-title class="justify-center">Facebook</v-card-title>
          </v-card>
        </v-col>
        <v-col cols="2">
          <v-card class="pa-1">
            <v-img src="../assets/pinterest-logo.png"></v-img>
            <v-card-title class="justify-center">Pinterest</v-card-title>
          </v-card>
        </v-col>
        <v-col cols="2">
          <v-card class="pa-1">
            <v-img src="../assets/twitter-logo-2.jpg"></v-img>
            <v-card-title class="justify-center">Twitter</v-card-title>
          </v-card>
        </v-col>
        <v-col cols="2">
          <v-card class="pa-1">
            <v-img src="../assets/google-logo-2.jpg"></v-img>
            <v-card-title class="justify-center">Google</v-card-title>
          </v-card>
        </v-col>
        <v-col cols="2">
          <v-card class="pa-1">
            <v-img src="../assets/windows-logo.jpg"></v-img>
            <v-card-title class="justify-center">Windows</v-card-title>
          </v-card>
        </v-col>
        <v-col cols="2">
          <v-card class="pa-1">
            <v-img src="../assets/tesla-logo-2.jpg"></v-img>
            <v-card-title class="justify-center">Tesla</v-card-title>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="text-center pt-12">
        <v-col cols="12" class="pt-12">
          <span class="display-1">Publica empleos</span>
        </v-col>
        <v-col cols="12">
          <span class="body-2">Recibiras respuestas casi inmediatamente a tus publicaciones</span>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-btn color="primary" x-large class="text-capitalize">Publica un empleo</v-btn>
      </v-row>
      <v-row class="text-center pt-12">
        <v-col cols="12" class="pt-12">
          <span class="display-1">Publicaciones recientes</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3" v-for="(job, index) in recentJobs" :key="index">
          <v-card class="pa-1">
            <v-card-title class="justify-center">
              <span class="text-truncate">{{job.jobTitle}}</span>
            </v-card-title>
            <v-card-text class="text-center">
              <p>{{job.companyAddress}}</p>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn text color="primary" class="text-capitalize">Leer Más</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "Home",
  data: () => ({}),
  computed: {
    recentJobs() {
      return this.$store.getters.recentJobs;
    }
  }
};
</script>

<style scoped>
</style>