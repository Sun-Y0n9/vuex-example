<template>
    <div class="oneViewCls">
    	<top-nav></top-nav>
    	<hr>
      	<button>第<span>一</span>页面按钮</button>
    </div>
</template>

<script>
import TopNav from "../components/topNav.vue";
export default {
    name: 'oneView',
    data () {
        return {
         	
        }
    },
    methods:{
    
    },
    components:{
    	TopNav
    },
    created(){
    
    },
    mounted(){
    
    }
}
</script>

<style scoped type="text/css">

</style>
