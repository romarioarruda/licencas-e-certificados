import Vue from 'vue'
import VueRouter from 'vue-router'
// import axios from 'axios'

import routes from './routes'

Vue.use(VueRouter)

// axios.defaults.baseURL = 'http://localhost:8080/'

export default new VueRouter({
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes,
  mode: process.env.VUE_ROUTER_MODE,
  base: process.env.VUE_ROUTER_BASE
})