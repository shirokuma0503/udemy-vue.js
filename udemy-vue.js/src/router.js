import Vue from 'vue';
import Router from 'vue-router';
import TestHome from './views/TestHome.vue';
import TestUsers from './views/TestUsers.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {path: '/', component: TestHome},
    {path: '/users', component: TestUsers}
  ]
});