<template>
    <div class="topNavCls">
        <router-link class='item' to="/one" tag="div">
            <span>壹</span>
            <left-top-text :info="{text:'路由1','bgColor':'#000',color:'#fff'}"></left-top-text>
        </router-link>
        <router-link class='item' to="/two" tag="div">
            <span>贰</span>
            <left-top-text :info="{text:'路由2','bgColor':'#000',color:'#fff'}"></left-top-text>
        </router-link>
        <router-link class='item' to="/thr" tag="div">
            <span>叁</span>
            <left-top-text :info="{text:'路由3','bgColor':'#000',color:'#fff'}"></left-top-text>
        </router-link>
        <router-link class='item' to="/fou" tag="div">
            <span>肆</span>
            <left-top-text :info="{text:'路由4','bgColor':'#000',color:'#fff'}"></left-top-text>
        </router-link>
    </div>
</template>

<script>
import leftTopText from "./leftTopText.vue"
export default {
    name: 'TopNav',
    data () {
        return {
           
        }
    },
    methods:{
    
    },
    components:{
        leftTopText
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
    position: relative;
  }
  .active-class{

  }
</style>
