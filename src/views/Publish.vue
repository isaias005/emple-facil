<template>
  <v-content class="home">
    <v-container class="fill-height">
      <v-row justify="center">
        <v-col cols="10">
          <v-card color="primary">
            <v-card-title class="justify-center white--text">Publica un trabajo</v-card-title>
            <v-form @submit.prevent="publishJob">
              <v-container>
                <v-row>
                  <v-col cols="6">
                    <v-text-field solo placeholder="Nombre de compañia" v-model="companyName" flat></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field solo placeholder="Numero de telefono" v-model="phoneNumber" flat></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    <v-text-field solo placeholder="Puesto" v-model="jobTitle" flat></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      solo
                      placeholder="Direccion de la compañia"
                      v-model="companyAddress"
                      flat
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      solo
                      placeholder="Descripcion del trabajo"
                      v-model="jobDescription"
                      flat
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field solo placeholder="Salario" v-model="jobSalary" flat></v-text-field>
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col cols="6">
                    <v-text-field solo placeholder="Email de contacto" v-model="email" flat></v-text-field>
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-btn
                    type="submit"
                    class="text-capitalize white--text"
                    color="#0E4380"
                    depressed
                    height="45"
                  >Publicar trabajo</v-btn>
                </v-row>
              </v-container>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    companyName: "",
    phoneNumber: "",
    email: "",
    jobTitle: "",
    companyAddress: "",
    jobDescription: "",
    jobSalary: ""
  }),
  methods: {
    publishJob() {
      this.$store.dispatch("publishJob", {
        companyName: this.companyName,
        phoneNumber: this.phoneNumber,
        email: this.email,
        jobTitle: this.jobTitle,
        companyAddress: this.companyAddress,
        jobDescription: this.jobDescription,
        jobDescription: this.jobDescription,
        jobSalary: this.jobSalary
      });
    }
  }
};
</script>

<style scoped>
</style>