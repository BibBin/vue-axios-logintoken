import * as types from './mutations_types'
import Storage from '../../utils/localstorage'

const mutations  = {
    [types.SHOW_LOADING](state) {
        state.ajax_loading = true;
    },

    [types.HIDE_LOADING](state) {
        state.ajax_loading = false;
    },

    [types.UPDATE_TOKEN](state, user_db) {
      state.token = user_db.token || {};
      Storage.set('token', state.token);
    },

    [types.REMOVE_TOKEN](state, user_db) {
      Storage.remove('token', state.token);
      state.token = {};
    },
}

export default mutations
