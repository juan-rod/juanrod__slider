import Vue from 'vue'
import Router from 'vue-router'
import { routes } from './routes'
import {vuex_mixin} from '../utils/mixins.js'
import {tilt} from '../utils/tilt.mixin.js'

Vue.use(Router)
Vue.mixin(vuex_mixin, tilt)
// Vue.mixin(vuex_mixin)

var router = new Router({
    base: '/',
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes
})
  
  
  
  
  export { router }