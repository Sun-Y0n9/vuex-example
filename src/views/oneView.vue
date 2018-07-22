<template>
    <div class="oneViewCls">
        <top-nav></top-nav>
        <div class="content">
            <div class="hr"></div>
            <div class="btns">
                <button>第<span>一</span>页面按钮</button>
                <button @click="addCountInOneView">增加Count</button>
                <button @click="to2_1">跳至2.1</button>
                <button @click="to2_3">跳至2.3</button>
            </div>
            <div class="hr"></div>
            <div class="divCls">
                使用computed来接收store中的count : {{count}}
            </div> 
            <div class="divCls">
                使用data来接收store中的count {{countInData}}
            </div>
            <div class="hr"></div>
            <color-circle :cInfo="{bgColor:'#20b1aa',r:100}"></color-circle> 
        </div>
    </div>
</template>

<script>
import TopNav from "../components/topNav.vue"
import ColorCircle from "../components/colorCircle.vue"
export default {
    name: 'oneView',
    data () {
        return {
            countInData: this.$store.state.count,
            countInWatch: ""
        }
    },
    methods:{
        to2_1(){
            this.$router.push({name:"twoC1",params:{u:13}});
        },
        to2_3(){
            this.$router.push({name:"twoC3",query:{u:17}});
        },
        addCountInOneView(){
            this.$store.commit("addCount");
        }
    },
    components:{
        TopNav,
        ColorCircle
    },
    created(){

    },
    computed:{
        count(){
            return this.$store.state.count;
        }
    }
}
</script>

<style scoped type="text/css">

</style>
