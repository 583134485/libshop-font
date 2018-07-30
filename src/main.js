// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import 'normalize.css/normalize.css'// A modern alternative to CSS resets ??
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss' // global css

// import locale from 'element-ui/lib/locale/lang/en' // lang i18n

// import './mock/mock'

Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // 等价于 router: router
  store, // 使用store
  // components: { App },
  // template: '<App/>'
  render: h => h(App)
})
