<template>
    <div class="leftNavCls">
        <router-link class="item" tag="div" to="/two/twoc1">贰点壹</router-link>
        <router-link class="item" tag="div" to="/two/twoc2">贰点贰</router-link>
        <router-link class="item" tag="div" to="/two/twoc3">贰点叁</router-link>
        <router-link class="item" tag="div" to="/two/twoc4">贰点肆</router-link>
    </div>
</template>

<script>
export default {
    name: 'leftNav',
    data () {
        return {
           
        }
    },
    methods:{
    
    },
    components:{

    },
    created(){
    
    },
    mounted(){
    
    }
}
</script>

<style scoped type="text/css">
  .leftNavCls{
    width: 250px;
    height: 100%;
    background: #ccc;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .leftNavCls .item{
    height: 160px;
    line-height: 160px;
    text-align: center;
    font-size: 25px;
    width: 100%;
    background: #62b900;
    cursor: pointer;
  }
</style>
