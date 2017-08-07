import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import mods from '@/components/mods'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mods',
      component: mods
    },
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
