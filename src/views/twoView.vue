<template>
    <div class="twoViewCls">
    	<top-nav></top-nav>
        <div class="main">
            <left-nav></left-nav>
            <div class="twoRouterView">
                <router-view/>   
            </div>            
        </div>
    </div>
</template>

<script>
import TopNav from "../components/topNav.vue";
import LeftNav from "../components/leftNav.vue";
export default {
    name: 'twoView',
    data () {
        return {
         	
        }
    },
    methods:{
    
    },
    components:{
    	TopNav,
        LeftNav
    },
    created(){
    },
    mounted(){
    
    }
}
</script>

<style scoped type="text/css">
    .twoViewCls{
        height: 100%;
    }
    .main{
        height: calc(100% - 175px);
        display: flex;
    }
    .twoRouterView{
        flex:0 0 calc(100% - 250px);
        padding: 10px;
        box-sizing: border-box;
    }
</style>
