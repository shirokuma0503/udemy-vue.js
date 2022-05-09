import Vue from 'vue';
import App from './App.vue';
import GoodNumber from './components/GoodNumber.vue';

Vue.component('GoodNumber', GoodNumber);
Vue.directive('border', function(el) {
  el.style.border = "2px solid black";
});

new Vue({
  render: h => h(App),
}).$mount('#app');
