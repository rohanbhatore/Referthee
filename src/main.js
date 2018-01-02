// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import VueSocial from '@blocklevel/vue-social'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import router from './router'
import LoadScript from 'vue-plugin-load-script';


export const bus = new Vue();


Vue.use(VueResource);
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(Router);
Vue.use(LoadScript);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})

	