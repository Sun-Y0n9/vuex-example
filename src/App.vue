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
</style>
