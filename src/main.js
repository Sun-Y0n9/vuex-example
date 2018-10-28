// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'
Vue.prototype.$ajax = axios
Vue.use(Vuex)
import { filterAgeGt18 } from "./util/util.js"
Vue.prototype.f18 = filterAgeGt18;
const store = new Vuex.Store({
    state: {
        count: 13,
        anotherCount: 17,
        aObject: {
            a: 147
        },
        tName: "",
        array: [{
                name: "lis",
                age: 19
            },
            {
                name: "zhangs",
                age: 2
            },
            {
                name: "wangw",
                age: 22
            },
            {
                name: "zhaol",
                age: 17
            }
        ],
        searchResult: {}
    },
    mutations: {
        addCount(state) {
            state.count++;
        },
        addCountWithParams(state, params) {
            state.count += params;
        },
        addCountWithObjParams(state, params) {
            state.count += params.num;
        },
        changeAvalue(state) {
            // state.aObject.b = 149;
            Vue.set(state.aObject, "b", 149);
            console.log(state.aObject);
        },
        changeTname(state, name) {
            state.tName = name;
        },
        pushDataToArrat(state) {
            state.array.push({
                name: "sunq",
                age: 100
            })
        },
        del(state) {
            axios({
                    method: "get",
                    url: "/v2/movie/top250"
                })
                .then(res => {
                    console.log(res);
                    state.tName = res.data.subjects[0].title;
                })
                .catch(err => {
                    console.log(err, "获取豆瓣数据失败");
                })
        },
        haveRestult(state, ret) {
            state.searchResult = ret;
        }
    },
    getters: {
        gt18: (state) => {
            let gt18Array = state.array.filter((e, i) => {
                return e.age > 18;
            });
            return gt18Array;
        },
        gt18MapGetters: (state) => {
            let gt18Array = state.array.filter((e, i) => {
                return e.age > 18;
            });
            return gt18Array;
        },
        gt18Length: (state, getters) => {
            return getters.gt18.length;
        },
        getSomeoneAge(state, getters) {
            return (name) => {
                let oneData = state.array.find((ele) => {
                    return ele.name == name;
                });
                let age = oneData ? oneData.age : "查无此人"
                return age;
            }
        }
    },
    actions: {
        top250FirstName(context) {
            axios({
                    method: "get",
                    url: "/v2/movie/top250"
                })
                .then(res => {
                    context.commit("changeTname", res.data.subjects[0].title)
                })
                .catch(err => {
                    console.log(err, "获取豆瓣数据失败");
                })
        },
        getMoviesRankingInDouban({ commit, state }, number) {
            return new Promise((resolve, reject) => {
                let num = number.number - 1 === 0 ? 0 : number.number - 1 || 1;
                console.log(num)
                axios({
                        method: "get",
                        url: "v2/movie/top250?start=" + num + "&count=1"
                    })
                    .then(res => {
                        commit("haveRestult", res.data.subjects[0] || {});
                        resolve();
                    })
                    .catch(err => {
                        console.log(err, "获取豆瓣数据失败");
                        reject()
                    })
            })
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