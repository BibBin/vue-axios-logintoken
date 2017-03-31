import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import global from './global/';

export default new Vuex.Store({
  modules: {
    global
  }
});
