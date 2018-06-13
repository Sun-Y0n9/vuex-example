import Vue from "vue"
import Router from "vue-router"
import One from "../views/oneView.vue"
import Two from "../views/twoView.vue"
import Thr from "../views/thrView.vue"
import Fou from "../views/fouView.vue"
import TwoC1 from "../views/two/twoC1.vue"
import TwoC2 from "../views/two/twoC2.vue"
import TwoC3 from "../views/two/twoC3.vue"
import TwoC4 from "../views/two/twoC4.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      redirect:{name:"one"},
    },
    {
      path: "/one",
      name: "one",
      component: One
    },
    {
      path: "/two",
      name: "two",
      component: Two,
      redirect:{name:"twoC1"},
      children:[
      	{
      		path:"twoc1",
      		name:"twoC1",
      		component:TwoC1
      	},
      	{
      		path:"twoc2",
      		name:"twoC2",
      		component:TwoC2
      	},
      	{
      		path:"twoc3",
      		name:"twoC3",
      		component:TwoC3
      	},
      	{
      		path:"twoc4",
      		name:"twoC4",
      		component:TwoC4
      	}
      ]
    },
    {
      path: "/thr",
      name: "thr",
      component: Thr
    },
    {
      path: "/fou",
      name: "fou",
      component: Fou
    }
  ]
})
