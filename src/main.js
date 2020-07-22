import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './globalstyle/styles.scss'
import markdown from './directives/markdown'

Vue.config.productionTip = false

Vue.directive('markdown', markdown)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')