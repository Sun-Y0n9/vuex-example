<template>
    <div class="oneViewCls">
        <top-nav></top-nav>
        <div class="content">
            <div class="hr"></div>
            <div class="btns">
                <button>第<span>一</span>页面按钮</button>
                <button>增加Count</button>
                <button @click="to2_1">跳至2.1</button>
                <button @click="to2_3">跳至2.3</button>
            </div>
            <div class="hr"></div>
            <div class="divCls">
                store中的count : {{count}}
            </div> 
            <div class="hr"></div>
            <color-circle :cInfo="{bgColor:'#20b1aa',r:100}"></color-circle> 
            <div class="hr"></div>
            <h1>getters</h1>
            <div class="uls">
                <div>
                    <h3>使用getter</h3>
                    <ul>
                        <li v-for="item in gt18">{{item.name}} : {{item.age}}</li>
                    </ul>
                </div>
                <div>
                    <h3>组件内定义过滤函数</h3>
                    <ul>
                        <li v-for="item in ageArray">{{item.name}} : {{item.age}}</li>
                    </ul>
                </div>
                <div>
                    <h3>工具函数内定义过滤函数</h3>
                    <ul>
                        <li v-for="item in ageArrayUseUtilFunFilter">{{item.name}} : {{item.age}}</li>
                    </ul>
                </div>
                <div>
                    <h3>将工具函数引入,并挂到vue原型上,不建议使用此方式</h3>
                    <ul>
                        <li v-for="item in ageArrayUseVueProtoFilter">{{item.name}} : {{item.age}}</li>
                    </ul> 
                </div>               
            </div>
            <div>
                <h2>getter的第二个参数演示:</h2>
                <h3>通过getter2中,调用getter1,得到getter1过滤后数组的长度 {{gt18length}}</h3>
            </div>
            <div class="queryAge">
                <h3>根据姓名查询年龄</h3>
                <div>
                    <span>请输入姓名</span>
                    <input type="text" placeholder="请输入姓名" v-model="name">
                    <span> 年龄 : {{personName}}</span>
                </div>
            </div>
            <div>
                <button @click="pushDataToArray">向main.js中的array push一条数据, 看两种不同的调用方式的差异</button>
            </div>
        </div>
    </div>
</template>

<script>
import TopNav from "../components/topNav.vue"
import ColorCircle from "../components/colorCircle.vue"
import {filterAgeGt18} from "../util/util.js"
import { mapGetters } from 'vuex'
export default {
    name: 'oneView',
    data () {
        return {
            name:"wangw"
        }
    },
    methods:{
        to2_1(){
            this.$router.push({name:"twoC1",params:{u:13}});
        },
        to2_3(){
            this.$router.push({name:"twoC3",query:{u:17}});
        },
        filterAgeGt18(arr){
            return arr.filter((ele, ind) => {
                return ele.age > 18;
            });
        },
        pushDataToArray(){
            this.$store.commit('pushDataToArrat')
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
        },
        ageArray(){
            return this.filterAgeGt18(this.$store.state.array);
        },
        ageArrayUseUtilFunFilter(){
            return filterAgeGt18(this.$store.state.array);
        },
        ageArrayUseVueProtoFilter(){
            return this.f18(this.$store.state.array);
        },
        gt18(){
            return this.$store.getters.gt18;
        },
        gt18length(){
            return this.$store.getters.gt18Length;
        },
        personName(){
            return this.$store.getters.getSomeoneAge(this.name);
        },
        ...mapGetters(["gt18MapGetters"]),
        ...mapGetters({"aliasName":"gt18MapGetters"})
    }
}
</script>

<style scoped type="text/css">
    h1{
        text-align: center;
        background: #20b1aa;
    }
    .uls{
        display: flex;
        justify-content: space-around;
        border-bottom: 1px solid #dcdcdc;
        margin-bottom: 20px;
        box-sizing: border-box;
    }
    .uls > div{
        height: 200px;
        overflow: auto;
        box-sizing: border-box;
        border-right: 1px solid #dcdcdc;
        padding-right: 25px;
    }
    .uls > div:nth-child(4){
        border-right: none;
    }
    .uls > div h3{
        margin: 10px 0;
    }
    .queryAge{
        margin-top: 20px;
        font-size: 16px;
    }
    .queryAge > div{
        display: flex;
        margin: 10px 0;
    }
    .queryAge > div input{
        width: 255px;
        height: 40px;
        font-size: 16px;
        padding-left: 10px;
        box-sizing: border-box;
    }
    .queryAge > div span{
        line-height: 40px;
        padding-left: 15px;
    }
    .queryAge > div span:nth-child(1){
        padding-left: 0;
        padding-right: 15px;
    }
</style>
