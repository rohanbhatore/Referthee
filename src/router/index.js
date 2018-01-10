import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import UserProfile from '@/components/UserProfile'

Vue.use(Router);

const router = new Router({
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
}
]
})

export default router
