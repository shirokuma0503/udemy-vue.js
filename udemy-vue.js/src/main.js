import Vue from 'vue';
import App from './App.vue';
import GoodNumber from './GoodNumber.vue'

Vue.config.productionTip = false
Vue.component('GoodNumber', GoodNumber);

new Vue({
  render: h => h(App),
}).$mount('#app')
