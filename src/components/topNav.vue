<template>
    <div class="topNavCls">
        <router-link class='item' to="/one" tag="div">壹</router-link>
        <router-link class='item' to="/two" tag="div">贰</router-link>
        <router-link class='item' to="/thr" tag="div">叁</router-link>
        <router-link class='item' to="/fou" tag="div">肆</router-link>
    </div>
</template>

<script>
export default {
    name: 'TopNav',
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
  .topNavCls{
    display: flex;
    justify-content: space-between;
    height: 175px;
    background: #dcdcdc;
  }
  .topNavCls .item{
    flex: 0 0 250px;
    height: 175px;
    background: #20b1aa;
    font-size: 50px;
    color: #fff;
    text-align: center;
    line-height: 175px;
    cursor: pointer;
  }
  .active-class{

  }
</style>
