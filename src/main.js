// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'
Vue.prototype.$ajax = axios
Vue.use(Vuex)
import {filterAgeGt18} from "./util/util.js"
Vue.prototype.f18 = filterAgeGt18;
const store = new Vuex.Store({
	state:{
		count:13,
		anotherCount:17,
		array:[
			{	
				name:"lis",
				age:19
			},
			{	
				name:"zhangs",
				age:2
			},
			{	
				name:"wangw",
				age:22
			},
			{	
				name:"zhaol",
				age:17
			}
		]
	},
	mutations:{
		addCount(state){
			state.count++;
		},
		pushDataToArrat(state){
			state.array.push({
				name:"sunq",
				age:100
			})
		}
	},
	getters:{
		gt18 : (state) => {
			let gt18Array = state.array.filter((e, i) => {
				return e.age > 18;
			});
			return gt18Array;
		},
		gt18MapGetters : (state) => {
			let gt18Array = state.array.filter((e, i) => {
				return e.age > 18;
			});
			return gt18Array;
		},
		gt18Length: (state, getters) => {
			return getters.gt18.length;
		},
		getSomeoneAge(state, getters){
			return (name) => {
				let oneData = state.array.find((ele) => {
					return ele.name == name;
				});
				let age = oneData ? oneData.age : "查无此人"
				return age; 
			}
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
