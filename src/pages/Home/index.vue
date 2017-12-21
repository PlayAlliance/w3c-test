<style lang="less">
@import './index.less';
</style>
<template>
  <div class="wrapper">
    <header class="north_miracle">
      <img class="logo" src="../../assets/logo-white.png" alt="w3c-test">
      <h1>{{title}}</h1>
      <p>{{info}}</p>
    </header>
    <main>
      <a v-for="card in cards" :class="`card-tpl ${card.class}`" :href="card.link">
        <h1>{{card.name}}</h1>
        <p>{{card.desc}}</p>
      </a>
    </main>
  </div>
</template>
<script>
  // import { os, browser } from '../../libs/env'
  import env from '../../libs/env'
  import cards from './cards'

  const { os, browser, platform, vendor } = env
  export default {
    name: 'Home',
    data() {
      // const n = navigator
      // const ua = n.ua
      const info = `${browser.name} ${browser.version}, ${os.name}, OS ${os.version},
      ${platform}, ${vendor}`
      return {
        title: 'W3C TEST BROWSER',
        cards,
        info,
      }
    },
  }
</script>

