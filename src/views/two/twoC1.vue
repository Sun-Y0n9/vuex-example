<template>
    <div class="twoC1Cls">
        <div class="hr"></div>
        <div>
            <h2 class="h2">state部分</h2>
            <button @click="addLocalCount">点击增加本组件的threeCount</button> 
            <div class="divCls">
                store中的count : {{count}}
            </div> 
            <div class="divCls">
                store中的count : {{anyVar}} -
            </div>
            <div class="divCls">
                使用别名显示store中的anotherCount : {{localCountA}}
            </div> 
            <div class="divCls">
                获得store中的count,并与本组件中的变量相加 : {{useCountWithComponentVar}}
            </div>
            <div class="divCls">
                获得store中的count,并与本组件中的变量相乘 : {{normalFunction}}
            </div> 
        </div>
        <div class="btns">
            <h2 class="h2">mutation部分, 提交mutation并传递参数</h2>
            <button @click="addCount">传递参数增加count</button>
            <button>路由参数 : {{u}}</button>
        </div>
        <div>
            <h2 class="h2">action部分</h2>
            <div>
                <button @click="getTop250Action">点击获取top250数据Action</button>
                <button @click="getTop250Mutation">点击获取top250数据Mutation</button>
                <span>豆瓣电影top250排在第一位的电影是 : {{tName}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'twoC1',
    data () {
        return {
         	u:"",
            localCount:15
        }
    },
    methods:{
        addLocalCount(){
            this.localCount++;
        },
        addCount(){
            this.$store.commit("addCountWithParams", Math.ceil(Math.random() * 20));
        },
        getTop250Action(){
            this.$store.dispatch('top250FirstName');
        },
        getTop250Mutation(){
            this.$store.commit("del");
        }
    },
    components:{

    },
    created(){
        this.u = this.$route.params.u;
    },
    computed: mapState({
        count: s => s.count,
        anyVar: s => s.count,
        localCountA: "count",
        useCountWithComponentVar (state) {
          return state.count + this.localCount;
        },
        normalFunction: function(state){
            return state.count * this.localCount;
        },
        tName : s => s.tName
    })
}
</script>

<style scoped type="text/css">
    div{
        font-size: 14px;
    }
</style>
