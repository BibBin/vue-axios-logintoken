import axios from 'axios'
import store from '../store/'
import router from '../router/'

// 默认配置
axios.defaults.baseURL = 'http://www.xxxx.com'//这里是放实际的URI，公司项目就不写啦
axios.defaults.headers.post['Content-Type'] = 'application/json'

export const request = (config) => {
  return axios(config)
}

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  store.dispatch('show_loading');
  if(store.state.global.token){
    config.headers.Authorization = 'Bearer '+ `${store.state.global.token}`;
  };
  return config;
}, function (error) {
  store.dispatch('hide_loading');
  return Promise.reject(error);
});


// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  store.dispatch('hide_loading');
  return response;
}, function (error) {

  if (error.response) {
    switch (error.response.status) {
      case 401:
        // 返回 401 清除token信息并跳转到登录页面
        $.toast('登录超时')
        store.dispatch('remove_token');
        router.replace({
          path: '/',
          query: {redirect: router.currentRoute.fullPath}
        })
    }
  }
  store.dispatch('hide_loading');
  return Promise.reject(error)   // 返回接口返回的错误信息
});
