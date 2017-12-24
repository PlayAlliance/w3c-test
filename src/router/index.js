import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/index'
import UniversalDetector from '@/pages/UniversalDetector/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/universal-detector',
      name: 'universal-detector',
      component: UniversalDetector,
    },
  ],
})
