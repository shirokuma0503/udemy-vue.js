import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

router.beforeEach((to, from, next) => {
  next();
})

new Vue({
  router: router,
  store: store,
  render: h => h(App),
}).$mount('#app');
