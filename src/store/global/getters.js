export default  {
  getToken(state) {
    return state.token && state.token ? state.token : '';
  }
};
