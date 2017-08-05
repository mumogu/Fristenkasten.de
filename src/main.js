import Vue from 'vue'
import App from './App.vue'
import Countdown from './Countdown.vue'

Vue.component('fk-countdown', Countdown)

new Vue({
  el: '#app',
  render: h => h(App)
})
