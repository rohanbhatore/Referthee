import Vue from 'vue'

import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import UserProfile from '@/components/UserProfile'
import Profile from '@/components/Profile'
import JobSearch from '@/components/JobSearch'
import JobDescription from '@/components/JobDescription'
Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
  {
    path: '/',
    name: 'home',
    component: Home,

    beforeEnter: (to, from, next) => {
      var login = router.app.$options.store.state.loggedIn

      console.log("beforeenetrerrouter" +login)
      if(login){
        next({
          path: '/user-profile',
          query: { redirect: to.fullPath }
        })
      } else {
        next({
          path: '/home',
        })
      }
    }
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/user-profile',
    name: 'user-profile',
    component: UserProfile,
  /*beforeEnter: (to, from, next) => {
    var login = router.app.$options.store.state.loggedIn
    console.log("user profikle vala" +login)

    if(login){
        next({
          path: '/user-profile',
          query: { redirect: to.fullPath }
        })
      } else {
        next({
          path: '/home',
        })
      }
    }*/
  },
  {
  path:'/profile/:profileId',
  name:'profile',
  component: Profile,
  
},
{

  path:'/job-search',
  name: 'job-search',
  component:JobSearch,
},
{
  path:'/job-description',
  name: 'job-description',
  component:JobDescription
}


  ]
})

export default router
