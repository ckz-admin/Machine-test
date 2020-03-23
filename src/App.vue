<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>


<style lang="less">
  // @import url('../static/css/mp.css');
  #app {
    overflow: hidden;
    font-size: 0.7rem;
    font-family: "Microsoft Yahei";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #12181f;
    background-color: salmon;
    @media screen and (max-width: 768px) {
       overflow: hidden; 
       font-size: 0.5rem;
    }
  }
</style>

