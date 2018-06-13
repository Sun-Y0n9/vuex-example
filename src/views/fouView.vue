<template>
    <div class="fouViewCls">
    	<top-nav></top-nav>
        <div class="hr"></div>
        <div class="content">
            <div class="btns">
                <button>第<span>四</span>页面按钮</button>
            </div>
            <div class="hr"></div>
            <div class="a">
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
        </div>
    </div>
</template>

<script>
import TopNav from "../components/topNav.vue"
import { mapState } from 'vuex'
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
    quotes: 
}
</style>
