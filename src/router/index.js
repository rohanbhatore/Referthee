import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    }
    /*{
      path: '/login',
      name: 'login',
      component: function (resolve) {
        require(['@/components/Login.vue'], resolve)
      }
    }*/
  ]
})
