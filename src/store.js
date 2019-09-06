import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jobs: [
      {
        companyName: "Compañia",
        phoneNumber: "809-000-0000",
        email: "compañia@gmail.com",
        jobTitle: "Senior Frontend Engineer",
        companyAddress: "Calle #2 de compañia, Santo Domingo",
        jobDescription: "Hacer funciones en la compañia que son muy importantes para su funcionamiento correcto en el mercado laboral.",
        jobSalary: "$20000 - $40000"
      },
      {
        companyName: "Compañia",
        phoneNumber: "809-000-0000",
        email: "compañia@gmail.com",
        jobTitle: "Javascript Engineer",
        companyAddress: "Calle #1 de compañia, Santo Domingo",
        jobDescription: "Hacer funciones en la compañia que son muy importantes para su funcionamiento correcto en el mercado laboral.Hacer funciones en la compañia.",
        jobSalary: "$20000 - $40000"
      },
      {
        companyName: "Compañia",
        phoneNumber: "809-000-0000",
        email: "compañia@gmail.com",
        jobTitle: "Contador",
        companyAddress: "Calle #1 de compañia, Santo Domingo",
        jobDescription: "Hacer funciones en la compañia que son muy importantes para su funcionamiento correcto en el mercado laboral.Hacer funciones en la compañia.",
        jobSalary: "$20000 - $40000"
      },
      {
        companyName: "Compañia",
        phoneNumber: "809-000-0000",
        email: "compañia@gmail.com",
        jobTitle: "Albañil",
        companyAddress: "Calle #1 de compañia, Santo Domingo",
        jobDescription: "Hacer funciones en la compañia que son muy importantes para su funcionamiento correcto en el mercado laboral.Hacer funciones en la compañia.",
        jobSalary: "$20000 - $40000"
      },
      {
        companyName: "Compañia",
        phoneNumber: "809-000-0000",
        email: "compañia@gmail.com",
        jobTitle: "Software Engineer, Frontend",
        companyAddress: "Calle #1 de compañia, Santo Domingo",
        jobDescription: "Hacer funciones en la compañia que son muy importantes para su funcionamiento correcto en el mercado laboral.Hacer funciones en la compañia.",
        jobSalary: "$20000 - $40000"
      },
      {
        companyName: "Compañia",
        phoneNumber: "809-000-0000",
        email: "compañia@gmail.com",
        jobTitle: "Senior Full Stack Developer, Javascript [REMOTE]",
        companyAddress: "Calle #1 de compañia, Santo Domingo",
        jobDescription: "Hacer funciones en la compañia que son muy importantes para su funcionamiento correcto en el mercado laboral.Hacer funciones en la compañia.",
        jobSalary: "$20000 - $40000"
      },
      {
        companyName: "Compañia",
        phoneNumber: "809-000-0000",
        email: "compañia@gmail.com",
        jobTitle: "Lead Frontend Engineer - React",
        companyAddress: "Calle #1 de compañia, Santo Domingo",
        jobDescription: "Hacer funciones en la compañia que son muy importantes para su funcionamiento correcto en el mercado laboral.Hacer funciones en la compañia.",
        jobSalary: "$20000 - $40000"
      },
      {
        companyName: "Compañia",
        phoneNumber: "809-000-0000",
        email: "compañia@gmail.com",
        jobTitle: "Frontend Developer",
        companyAddress: "Calle #1 de compañia, Santo Domingo",
        jobDescription: "Hacer funciones en la compañia que son muy importantes para su funcionamiento correcto en el mercado laboral.Hacer funciones en la compañia.",
        jobSalary: "$20000 - $40000"
      }
    ]
  },
  mutations: {
    publishJob(state, payload) {
      state.jobs.push(payload)
    }
  },
  actions: {
    publishJob(context, payload) {
      context.commit('publishJob', payload);
    }
  },
  getters: {
    recentJobs: state => {
      return state.jobs.slice(0, 4)
    },
    searchedJobs: state => (searchedJobTitle,searchedJobAddress) => {
      if(searchedJobTitle && searchedJobTitle!=" "){
        return state.jobs.filter(job=>job.jobTitle.toLowerCase().includes(searchedJobTitle.toLowerCase()))
      }
    }
  }
})
