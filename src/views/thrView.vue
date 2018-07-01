<template>
    <div class="htrViewCls">
    	<top-nav></top-nav>
        <div class="hr"></div>
    	<div class="content">
            <h2 class="h2">state部分</h2>
            <div class="divCls">
                使用mapState辅助函数,传入数组将store中的变量,映射到组件内同名变量,显示store中的anotherCount : {{anotherCount}}
            </div>   
            <div>
                <h2 class="h2">mutation部分</h2>
                <div class="btns">
                    <button @click="addCount">增加count</button> 
                    <button @click="changeA">给store中aObject增加一个键值对</button> 
                    <span>count : {{count}}</span>
                </div>
                <ul>
                    <li v-for="(v,k) in aObject">store中的对象aObject的 {{k}} 的值 : {{v}}</li> 
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import TopNav from "../components/topNav.vue"
import LeftTopText from "../components/leftTopText.vue"
import { mapState } from 'vuex'
export default {
    name: 'htrView',
    data () {
        return {
         	
        }
    },
    methods:{
        addCount(){
            //普通方式提交
            this.$store.commit("addCountWithObjParams", {
                num: Math.ceil(Math.random() * 10)
            });
            //对象方式提交
            this.$store.commit({
                type: "addCountWithObjParams",
                num: Math.ceil(Math.random() * 10)
            });
        },
        changeA(){
            this.$store.commit({
                type: "changeAvalue"
            });
        }
    },
    components:{
    	TopNav,
        LeftTopText
    },
    created(){
    
    },
    computed:mapState(["anotherCount","count", "aObject"])
}
</script>

<style scoped type="text/css">
    .btns{
        position: relative;
    }
</style>
