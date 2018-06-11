<template>
    <div class="twoC3Cls">
      	<button>第<span>2.3</span>页面按钮</button>
        <button>路由参数 : {{u}}</button>
    </div>
</template>

<script>
export default {
    name: 'twoC3',
    data () {
        return {
         	u:""
        }
    },
    methods:{
    
    },
    components:{

    },
    created(){
        this.u = this.$route.query.u;
    }
}
</script>

<style scoped type="text/css">

</style>
