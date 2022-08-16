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
window.onload = function () {
  document.onkeydown = function () {
    const e = window.event || arguments[0]
    console.log(e.keyCode)
    if (e.keyCode === 123) {
      return false
    } else if ((e.ctrlKey) && (e.shiftKey) && (e.keyCode === 67)) {
      return false
    } else if ((e.shiftKey) && (e.keyCode === 121)) {
      return false
    }
  }
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
