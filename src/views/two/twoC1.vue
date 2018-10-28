<template>
    <div class="twoC1Cls">
        <div class="hr"></div>
        <div>
            <h2 class="h2">state部分</h2>
            <button @click="addLocalCount">点击增加本组件的threeCount</button> 
            <div class="divCls">
                store中的count : {{count}}
            </div> 
            <div class="divCls">
                store中的count : {{anyVar}} -
            </div>
            <div class="divCls">
                使用别名显示store中的anotherCount : {{localCountA}}
            </div> 
            <div class="divCls">
                获得store中的count,并与本组件中的变量相加 : {{useCountWithComponentVar}}
            </div>
            <div class="divCls">
                获得store中的count,并与本组件中的变量相乘 : {{normalFunction}}
            </div> 
        </div>
        <div class="btns">
            <h2 class="h2">mutation部分, 提交mutation并传递参数</h2>
            <button @click="addCount">传递参数增加count</button>
            <button>路由参数 : {{u}}</button>
        </div>
        <div>
            <h2 class="h2">action部分</h2>
            <div class="smallBtns">
                <button @click="getTop250Action">点击获取top250数据Action</button>
                <button @click="getTop250Mutation">点击获取top250数据Mutation</button>
                <span>豆瓣电影top250排在第一位的电影是 : {{tName}}</span>
            </div>
            <div class="fsz0">
                <input class="inputMovie" @keyup="input1_250" placeholder="请输入1-250的数字" type="text" v-model.number="Ranking">
                <button class="searchBtn" @click="searchMovie">查询</button>
                <button class="searchBtnById" @click="searchMovieById">依据搜索结果的ID再次获取电影信息</button>
                <div class="flexdiv">
                    <div class="l">
                        <div>
                            <span>电影名称: {{ searchResult.original_title }}</span>
                        </div>
                        <div >
                            <span>主演: </span>
                            <span v-for="item in searchResult.casts">{{item.name}} </span>
                        </div>
                        <div >
                            <span>导演: </span>
                            <span v-for="item in searchResult.directors">{{item.name}} </span>
                        </div>
                        <div >
                            <span>类型: </span>
                            <span v-for="item in searchResult.genres">{{item}} </span>
                        </div>
                        <div>
                            <img class="img" :src="searchResult.images && searchResult.images.medium" alt="">
                        </div>
                    </div>
                    <div class="r">
                        <div>id {{movieMsg.id}}</div>
                        <div>年份 {{movieMsg.year}}</div>
                        <div>中文名称 {{movieMsg.title}}</div>
                        <div>英文名称 {{movieMsg.original_title}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapActions } from 'vuex'
export default {
    name: 'twoC1',
    data () {
        return {
         	u:"",
            localCount:15,
            Ranking:"",
            movieMsg:""
        }
    },
    methods:{
        addLocalCount(){
            this.localCount++;
        },
        addCount(){
            this.$store.commit("addCountWithParams", Math.ceil(Math.random() * 20));
        },
        getTop250Action(){
            this.$store.dispatch('top250FirstName');
        },
        getTop250Mutation(){
            this.$store.commit("del");
        },
        searchMovie(){
            // this.$store.dispatch("getMoviesRankingInDouban", this.Ranking);
            this.$store.dispatch({
                type:"getMoviesRankingInDouban",
                number: this.Ranking
            });
        },
        searchMovieById(){
            this.$store.dispatch({
                type:"getMoviesRankingInDouban",
                number: this.Ranking
            })
            .then(() => {
                this.getMovieMsgById();
            })
            .catch((err) => {
                console.log(err);
            })
        },
        input1_250(){
            if(this.Ranking == ""){
                this.Ranking = "";
            }else if(this.Ranking < 1){
                this.Ranking = 1;
            }else if(this.Ranking > 250){
                this.Ranking = this.Ranking.slice(0, -1);
            }else if(!/^\d/.test(this.Ranking)){
                this.Ranking = "";
            }
        },
        getMovieMsgById(id){
            this.$ajax.get("v2/movie/subject/" + this.$store.state.searchResult.id)
                .then((res) => {
                    this.movieMsg = res.data;
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    },
    components:{

    },
    created(){
        this.u = this.$route.params.u;
    },
    computed: mapState({
        count: s => s.count,
        anyVar: s => s.count,
        localCountA: "count",
        useCountWithComponentVar (state) {
          return state.count + this.localCount;
        },
        normalFunction: function(state){
            return state.count * this.localCount;
        },
        tName : s => s.tName,
        searchResult: s => s.searchResult
    })
}
</script>

<style scoped type="text/css">
    div{
        font-size: 14px;
    }
    .img{
        width: 130px;
    }
    .inputMovie{
        width: 230px;
        height: 55px;
        box-sizing: border-box;
        border: 1px solid #317EF3;
        border-right: none;
        padding-left: 12px;
        font-size: 14px;
        outline: none;
        box-sizing: border-box;
        vertical-align: bottom;
    }
    .searchBtn{
        box-sizing: border-box;
    }
    .fsz0{
        font-size: 0;
    }
    .fsz0 div{
        font-size: 14px;
    }
    .searchBtnById{
        margin-left: 10px;
    }
    .flexdiv{
        display: flex;
    }
    .r{
        width: 400px;
        margin-left: 50px;
    }
    .smallBtns button{
        padding: 0;
        font-size: 12px;
    }
    .smallBtns{
        font-size: 12px;
    }
</style>
