import Vue from 'vue';
import App from './App.vue';
import GoodNumber from './components/GoodNumber.vue';

Vue.component('GoodNumber', GoodNumber);

new Vue({
  render: h => h(App),
}).$mount('#app');
