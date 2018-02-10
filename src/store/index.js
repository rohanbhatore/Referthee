import Vue from 'vue'
import Vuex from 'vuex'
import createMutationsSharer from 'vuex-shared-mutations'
import { state } from './state'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'
//import plugins from './plugins'

Vue.use(Vuex)

const store = new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
  	plugins:[createMutationsSharer({ predicate: ['UPDATE_USER', 'UPDATE_USERLOGIN', 'UPDATE_FIRSTNAME'] })]
})


export default store