// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import VueSocial from '@blocklevel/vue-social'
import Router from 'vue-router'
//import VueResource from 'vue-resource'
import router from './router'
import LoadScript from 'vue-plugin-load-script';
import store from './store'
import Home from './components/Home';
import AppHeader from './components/AppHeader';
import UserProfile from './components/UserProfile'
import Spinner from './components/Spinner'
import axios from 'axios'
import VueAxios from 'vue-axios'
import lodash from 'lodash'
import VueLodash from 'vue-lodash'
import VueClipboards from 'vue-clipboards';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSweetalert2 from 'vue-sweetalert2';

Vue.use(VueLodash, lodash) // to do
Vue.use(VueAxios, axios)
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(Router);
Vue.use(LoadScript);
Vue.use(VueClipboards);
Vue.use(VueSweetalert2);


/* eslint-disable no-new */
new Vue({
	el: '#app',
	store,
	router,
  /*beforeMount: function () {
    window.Vue = this;
},*/
components: { App },
template: '<App/>',
})

