import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.config.productionTip = false
Vue.use(Vant)
document.addEventListener('contextmenu', function (e) {
  e.preventDefault()
})
document.addEventListener('selectstart', function (event) {
  event.preventDefault()
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
