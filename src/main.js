import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import Index from './components/pages/Index'
import MyProfile from './components/pages/MyProfile'
import MyPreferences from './components/pages/MyPreferences'
import MyTemplates from './components/pages/MyTemplates'
import MyDocuments from './components/pages/MyDocuments'
import MyPotentialJobs from './components/pages/MyPotentialJobs'
import MyMatches from './components/pages/MyMatches'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/my-profile',
      name: 'MyProfile',
      component: MyProfile
    },
    {
      path: '/my-templates',
      name: 'MyTemplates',
      component: MyTemplates
    },
    {
      path: '/my-documents',
      name: 'MyDocuments',
      component: MyDocuments
    },
    {
      path: '/my-potential-jobs',
      name: 'MyPotentialJobs',
      component: MyPotentialJobs
    },
    {
      path: '/my-preferences',
      name: 'MyPreferences',
      component: MyPreferences
    },
    {
      path: '/my-matches',
      name: 'MyMatches',
      component: MyMatches
    }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
