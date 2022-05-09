import Vue from 'vue';
import App from './App.vue';
import GoodNumber from './components/GoodNumber.vue';

Vue.component('GoodNumber', GoodNumber);
Vue.directive('border', function(el, binding) {
  el.style.border = "2px solid black";
  el.style.borderWidth = binding.value;
});

new Vue({
  render: h => h(App),
}).$mount('#app');
