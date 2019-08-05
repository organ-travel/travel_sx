import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'
import * as MetaData from './metaData'
import modules from './modules'

const debug = process.env.NODE_ENV !== 'production'
if (debug) {
  Vue.use(Vuex)
}
const state = {
  activeIndex: -1,
  MetaData
}
export default new Vuex.Store({
  strict: debug,
  state,
  getters,
  mutations,
  actions,
  modules
})
