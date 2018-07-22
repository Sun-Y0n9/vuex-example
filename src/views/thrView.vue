<template>
    <div class="htrViewCls">
    	<top-nav></top-nav>
    	<div class="content">
            <div class="hr"></div>
            <div class="btns">
                <button>一级路由叁</button> 
                <left-top-text :info="{text:'3','bgColor':'deeppink',color:'#fff'}"></left-top-text>
            </div>
            <div class="hr"></div>
            <div class="divCls">
                使用mapState辅助函数,传入数组将store中的变量,映射到组件内同名变量,显示store中的anotherCount : {{anotherCount}}
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
        
    },
    components:{
    	TopNav,
        LeftTopText
    },
    created(){
    
    },
    computed:mapState(["anotherCount"])
}
</script>

<style scoped type="text/css">
    .btns{
        position: relative;
    }
</style>
