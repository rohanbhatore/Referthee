import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import RequestReco from '@/components/RequestReco'


Vue.use(Router);

export default new Router({
  routes: [
  {
    path: '/',
    name: 'home',
    component: Home,
    /*children: [
         {
           path: 'requestreco',
           component: RequestReco
         }
       ]*/
  },
  {
    path: '/requestreco',
    name: 'request-reco',
    component: RequestReco
  }
  ]
})
