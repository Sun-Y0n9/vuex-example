<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
	margin: 0;
	padding: 0;
}
html,body,#app{
	height: 100%;
}
.router-link-active{
	background: deeppink !important;
}
button{
	height: 55px;
	text-align: center;
	line-height: 55px;
	background: #317EF3;
	border:none;
	font-size: 16px;
	letter-spacing: 3px;
	cursor: pointer;
	padding: 0 15px;
}
button span{
	color: red;
}
.divCls{
	display: inline-block;
	height: 55px;
	line-height: 55px;
	padding: 0 20px;
	border:1px solid #dcdcdc;
	border-radius: 5px;
	text-align: center;
}
.smallText{
	padding: 10px;
	font-size: 14px;
	font-family: "楷体"
}
.hr{
	border-bottom: 1px solid #20b1aa;
	margin:5px 0;
}
li{
	list-style: none;
	font-size: 16px;
	border:1px solid #dcdcdc;
	width: 400px;
	padding: 10px 0;
	margin-bottom: 10px;
	box-sizing: border-box;
	padding-left: 15px;
}
.h2{
	text-align: center;
	padding: 10px 0;
	background: #dcdcdc;
	margin: 5px 0;
}
.h3{
	padding: 5px 0;
	text-align: center;
	background: #dcdcdd;
}
</style>
