<style lang="less" scoped>
@import './index.less';
</style>
<template>
  <div class="wrapper">
    <aside class="side-bar purple_blue">
      <img class="logo" src="../../assets/logo-white.png" alt="w3c-test">
      <h1>{{title}}</h1>
      <p class="footer">应用信息抓取自<a href="http://sj.qq.com/myapp/" target="_blank">腾讯应用宝</a></p>
    </aside>
    <main class="flex-main">
      <div v-for="(item, idx) in apps"  class="app-wrapper" :key="idx">
        <div :class="`app-ctx x${item.class}`">
          <img class="app-icon" :src="item.img.replace('http:','')" />
          <p class="app-name">{{item.name}}</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import apps from './apps'

export default {
  name: 'hello',
  data() {
    return {
      apps,
      title: 'W3C TEST BROWSER',
      msg: 'Welcome to Your Vue.js PWA',
    }
  },
}
</script>
