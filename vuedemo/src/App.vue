<template>
  <div id="app">
    <img src="./assets/logo.png">

     <ul>
        <li><router-link to="/mods">跳转到组件示例</router-link></li>
        <li><router-link to="/hello">跳转到官方hello</router-link></li> 
    </ul>   
    <!-- 供路由使用的视图 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
/* 引入外部css的方法 */
@import "//res.suning.cn/public/v5/common/2.0.0/m-common.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
