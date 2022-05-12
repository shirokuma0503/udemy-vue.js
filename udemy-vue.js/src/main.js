import Vue from 'vue';
import App from './App.vue';
import GoodNumber from './components/GoodNumber.vue';
import router from './router';

Vue.component('GoodNumber', GoodNumber);
// カスタムディレクティブの登録
// Vue.directive('border', function(el, binding) {
//   el.style.borderWidth = binding.value.width;
//   el.style.borderColor = binding.value.color;
//   el.style.borderStyle = binding.arg;
//   if (binding.modifiers.round) {
//     el.style.borderRadius = "1rem";
//   }
// });
// filter
Vue.filter("upperCase", function(value) {
  return value.toUpperCase();
});
// mixin
// Vue.mixin({
//   created() {
//     console.log("global mixin");
//   }
// });

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app');
