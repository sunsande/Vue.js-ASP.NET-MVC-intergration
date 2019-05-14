import Vue from 'vue'
import F1 from './Feature2.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(F1),
}).$mount('#f2App')
