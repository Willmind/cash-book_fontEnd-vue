

<template>


  <router-view></router-view>
  <van-tabbar route>
    <van-tabbar-item replace to="/" icon="home-o">账单</van-tabbar-item>
    <van-tabbar-item replace to="/data" icon="chart-trending-o">统计</van-tabbar-item>
    <van-tabbar-item replace to="/login" icon="user-circle-o">我的</van-tabbar-item>
  </van-tabbar>

</template>

<script>
  import router from "./router";


  export default{
    data() {
      return {
        active: 0,
      };
    },
    mounted(){

    }
  }

</script>

<style>

</style>
