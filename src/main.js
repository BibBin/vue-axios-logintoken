// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './../src/router/index.js'
import App from './App'
import Vuex from 'vuex'
Vue.use(Vuex)
import store from './store/';


const FastClick = require('fastclick')
FastClick.attach(document.body)
//开启debug模式
//Vue.config.debug = true
//window.log = console.log

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
