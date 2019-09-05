<template>
  <v-content class="home">
    <v-container fluid class="pa-0">
      <v-row>
        <v-col cols="12" class="py-0">
          <v-card color="primary" class="py-12" tile flat dark>
            <v-card-title class="display-1 justify-center">¿Buscas trabajo?</v-card-title>
            <v-form>
              <v-container>
                <v-row class="justify-center">
                  <v-col cols="4">
                    <v-text-field
                      placeholder="Puesto, palabras clave o empresa"
                      solo
                      light
                      flat
                      append-icon="search"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="4">
                    <v-text-field
                      placeholder="Provincia, ciudad o codigo postal"
                      solo
                      light
                      flat
                      append-icon="room"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="2" class>
                    <v-btn
                      class="text-capitalize"
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
    <v-container fluid>
      <v-row class="text-center">
        <v-col cols="12" class="pt-12">
          <span class="display-1">Resultados</span>
        </v-col>
      </v-row>
      <v-row class="pt-12">
        <v-col cols="3">
          <v-card>
            <v-card-title class="title">Filtrar resultados</v-card-title>
            <v-card-text>
              <div class="py-2">
                <span class="subtitle text--primary">Ordenar por</span>
                <v-radio-group class="mt-0">
                  <v-radio label="Fecha"></v-radio>
                  <v-radio label="Relevancia"></v-radio>
                </v-radio-group>
              </div>
              <div class="py-2">
                <span class="subtitle text--primary">Tipo de trabajo</span>
                <v-radio-group class="mt-0">
                  <v-radio label="Tiempo completo"></v-radio>
                  <v-radio label="Por contrato"></v-radio>
                  <v-radio label="Pasantía"></v-radio>
                </v-radio-group>
              </div>
              <div class="py-2">
                <span class="subtitle text--primary">Compensación</span>
                <v-radio-group class="mt-0">
                  <v-text-field
                    label="Salario mensual mínimo"
                    type="number"
                    append-icon="attach_money"
                  ></v-text-field>
                </v-radio-group>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card class="job-list">
            <template class="pa-0" v-for="(job,index) in searchedJobs">
              <v-card @click="previewJob(job)" class="py-5" tile outlined width="100%" :key="index">
                <v-card-title class="title">{{job.jobTitle}}</v-card-title>
                <v-card-text>
                  <div>
                    <span class="text--primary">{{job.companyName}}</span>
                    - {{job.companyAddress}}
                  </div>
                  <span class="primary--text" v-if="job.jobSalary">{{job.jobSalary}}</span>
                </v-card-text>
                <div class="mx-4 my-3">
                  <v-chip label color="primary">ReactJS</v-chip>
                  <v-chip class="ml-1" label color="primary">Contabilidad</v-chip>
                  <v-chip class="ml-1" label color="primary">Ingenieria</v-chip>
                  <v-chip class="ml-1" label color="primary">Administracion</v-chip>
                </div>
              </v-card>
            </template>
          </v-card>
        </v-col>
        <v-col cols="5">
          <v-card v-if="currentPreviewedJob">
            <v-card-title>{{currentPreviewedJob.jobTitle}}</v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              {{currentPreviewedJob.jobDescription}}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "Search",
  data: () => ({
    currentPreviewedJob:null
  }),
  computed: {
    searchedJobs() {
      return this.$store.getters.searchedJobs;
    }
  },
  methods:{
    previewJob(job){
      this.currentPreviewedJob = job
    }
  }
};
</script>

<style scoped>
.job-list .v-card.v-card--outlined {
  border-top: none;
  border-left: none;
  border-right: none;
}
</style>