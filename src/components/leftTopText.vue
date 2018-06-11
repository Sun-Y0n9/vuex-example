<template>
    <div class="leftRightTextCls" id="leftRightTextCls" :style="{color:info.color,backgroundColor:info.bgColor}">
      	{{info.text}}
    </div>
</template>

<script>
export default {
    name: 'leftRightText',
	props:{
		info:{
			type:Object,
			default:() => {
				return {
	    			color:"#000",
	    			bgColor:"#fff",
	    			text:"角标"
				}
			}
		}
	}
}
</script>

<style scoped type="text/css">
	div.leftRightTextCls#leftRightTextCls{
		position: absolute;
		line-height: 1;	
		width: auto;
		height: auto;
		left: 0;
		top:0;
		font-size: 12px;
		padding: 5px;
		padding-left: 0;
		border-radius: 0 0 12px 0;
	}
</style>
