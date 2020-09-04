import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    listCompanies: [
      {
        name: 'a',
        address: 'a',
        website: 'a',
        email: 'a'
      }
    ],
    newCompany: {
      name: '',
      address: '',
      website: '',
      email: ''
    },
    company_id: ''
  }
})

export default store
