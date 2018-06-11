import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

const vuexA = {
	state:{
		count:17
	}
}

const vuexB = {
	state:{
		count:13
	}
}

export default  new Vuex.Store({
  	modules: {
    	a: vuexA,
    	b: vuexB
  	}
})