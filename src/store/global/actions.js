import * as types from './mutations_types';

const actions = {
	show_loading: ({
		commit
	}) => {
		return new Promise((resolve, reject) => {
			commit(types.SHOW_LOADING);
			resolve()
		});
	},

	hide_loading: ({
		commit
	}) => {
		return new Promise((resolve, reject) => {
			commit(types.HIDE_LOADING);
			resolve()
		});
	},

  update_token: ({commit}, {
    token
  }) => {
    return new Promise((resolve, reject) => {
      commit(types.UPDATE_TOKEN, {
        token
      });
      resolve()
    });
  },

  remove_token: ({commit}, {
    token
  }) => {
    return new Promise((resolve, reject) => {
      commit(types.REMOVE_TOKEN, {
        token
      });
      resolve()
    });
  },
}
export default actions
