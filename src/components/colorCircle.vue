<template>
    <div class="circle" :style="cStyles">
      
    </div>
</template>

<script>
export default {
    name: 'colorCircle',
    data () {
        return {
         	cStyles:{
                background:this.cInfo.bgColor,
                width:this.cInfo.r + "px",
                height:this.cInfo.r + "px"
            }
        }
    },
    props:{
            cInfo:{
            type:Object,
            default:() => {
                return {
                    bgColor:"#333",
                    r:50
                }
            }
        }
    },
    computed(){
        
    }
}
</script>

<style scoped type="text/css">
    .circle{
       border-radius: 50%; 
       display: inline-block;
    }
</style>
