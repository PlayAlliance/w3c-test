<style lang="less">
@import './styles/base.less';
#app {
  padding-bottom: 100px;
  background-color: #f7f7f7;
}
</style>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>
