import Vue from 'vue'
import Router from 'vue-router'
import CompanyIndex from '@/components/company/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'company-index',
      component: CompanyIndex
    }
  ]
})
