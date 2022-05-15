import Vue from 'vue';
import Router from 'vue-router';
import TestHome from './views/TestHome.vue';
import TestUsers from './views/TestUsers.vue';
import UserProfile from './views/UserProfile.vue';
import UserPost from './views/UserPost.vue';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: TestHome },
    { path: '/users/:id',
      component: TestUsers,
      props: true,
      children: [
        {
          path: "profile",
          component: UserProfile,
          name: 'user-id-profile'
        },
        { path: "posts", component: UserPost }
      ]
    }
  ]
});