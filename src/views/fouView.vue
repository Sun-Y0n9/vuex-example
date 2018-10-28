<template>
    <div class="fouViewCls">
    	<top-nav></top-nav>
        <div class="hr"></div>
        <div class="content">
            <div class="a">
                <h2 class="h2">state的mapState部分</h2>
                <div class="smallText">mapState函数的返回值是一个对象, computed也是一个对象,使用扩展运算符将两个对象合并.</div>
                <div class="divCls">
                    <input type="text" v-model="inputText">
                </div> 
                <div class="divCls">
                    模块内的计算属性localComputedCount : {{localComputedCount}}
                </div> 
                <div class="divCls">
                    使用扩展运算符,将store中所有变量,混入本地组件的计算属性中count : {{count}}, anotherCount : {{anotherCount}}
                </div>
            </div>
            <div>
                <h2 class="h2">mutation的辅助函数的使用</h2>
                <div>
                    <button @click="addCount">增加Count</button>
                    <button @click="add">还是增加Count</button>
                </div>
                <div>
                    <span class="count">count的值 : {{count}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TopNav from "../components/topNav.vue"
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'
var localComputed = {
    localComputedCount(){
        return this.inputText + "--" +Math.random()
    }
}
var blend = (local, mapState) => {
    var obj = {};
    for(var k in local){
        obj[k] = local[k];
    }
    for(var k in mapState){
        obj[k] = mapState[k];
    }
    return obj;
};
export default {
    name: 'fouView',
    data () {
        return {
         	inputText:""
        }
    },
    methods:{
        ...mapMutations([
          'addCount',
        ]),
        ...mapMutations({
          add: 'addCount'
        })
    },
    components:{
    	TopNav
    },
    created(){

    },
    computed:{
        localComputedCount(){
            return this.inputText + "--" +Math.random()
        },
        ...mapState(["count","anotherCount"])
    }
    // computed: blend(localComputed, mapState(["count","anotherCount"]))
}
</script>

<style scoped type="text/css">
.divCls input{
    width: 175px;
    height: 35px;
    border:none;
    padding-left: 10px;
    outline: none;
}
span.count{
    font-size: 30px;
}

</style>
