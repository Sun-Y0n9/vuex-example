// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'
Vue.prototype.$ajax = axios
Vue.use(Vuex)
const store = new Vuex.Store({
	state:{
		count:13,
		anotherCount:17
	},
	mutations:{
		addCount(state){
			state.count++;
		}
	}
});
// import store from './vuex'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
