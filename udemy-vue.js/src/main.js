import Vue from 'vue';
import App from './App.vue';
import router from './router';

router.beforeEach((to, from, next) => {
  next();
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app');
