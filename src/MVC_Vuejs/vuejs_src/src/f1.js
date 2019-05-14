import Vue from 'vue'
import F1 from './Feature1.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(F1),
}).$mount('#f1App')
