import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes
})
router.beforeEach((to, from, next) => {
  if (!window.localStorage.getItem('token') && to.path !== '/' && to.path !== '/register' && to.path !== '/resetpassword') {
    next('/');
  } else {
    if (window.localStorage.getItem('token') && to.path === '/') {
      next({
        path: '/routerview'
      });
    } else {
      next();
    }
  }
})

router.afterEach(transition => {
});
export default router
