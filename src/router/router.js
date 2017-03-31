const routes = [{
  path: '/',
  name: 'login',
  component: (resolve) => {
    require(['./../page/personal/login'], resolve)
    }
}, {
  path: '/register',
  name: 'register',
  component: (resolve) => {
    require(['./../page/personal/register'], resolve)
    }
},{
  path: '/resetpassword',
    name: 'reset-password',
    component: (resolve) => {
    require(['./../page/personal/resetPassword'], resolve)
  }
},{
  path: '/routerview',
  component: (resolve) => {
    require(['./../page/routerview/index'], resolve)
  },
  children:[
    {
      path: '',
      name: 'market',
      component: (resolve) => {
        require(['./../page/market/index'], resolve)
      }
    },
    {
      path: 'center',
      name: 'center',
      component: (resolve) => {
        require(['./../page/center/index'], resolve)
      }
    },
    {
      path: 'viewing',
      name: 'viewing',
      component: (resolve) => {
        require(['./../page/viewing/index'], resolve)
      }
    },
    {
      path: 'tool',
      name: 'tool',
      component: (resolve) => {
        require(['./../page/tool/index'], resolve)
      }
    }
  ]
}]

export default routes
