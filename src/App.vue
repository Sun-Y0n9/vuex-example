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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
*{
	margin: 0;
	padding: 0;
}
button{
	width: 150px;
	height: 55px;
	border-radius: 5px;
	text-align: center;
	line-height: 55px;
	background: #317EF3;
	border:none;
	font-size: 16px;
	letter-spacing: 3px;
}
button span{
	color: red;
}
html,body,#app{
	height: 100%;
}
</style>
