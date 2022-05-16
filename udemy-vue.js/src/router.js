import Vue from 'vue';
import Router from 'vue-router';
// import TestHome from './views/TestHome.vue';
// import TestUsers from './views/TestUsers.vue';
// import UserProfile from './views/UserProfile.vue';
// import UserPost from './views/UserPost.vue';
// import HeaderHome from './views/HeaderHome.vue';
// import HeaderUser from './views/HeaderUser.vue';
const TestHome = () => import(/* webpackChunkName: "Home" */ "./views/TestHome.vue");
const TestUsers = () => import("./views/TestUsers.vue");
const UserProfile = () => import("./views/UserProfile.vue");
const UserPost = () => import("./views/UserPost.vue");
const HeaderHome = () => import("./views/HeaderHome.vue");
const HeaderUser = () => import("./views/HeaderUser.vue");

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/', components: {
        default: TestHome,
        header: HeaderHome
      }
    },
    {
      path: '/users/:id',
      components: {
        default: TestUsers,
        header: HeaderUser
      },
      props: {
        default: true,
        header: false
      },
      children: [
        {
          path: "profile",
          component: UserProfile,
          name: 'user-id-profile'
        },
        { path: "posts", component: UserPost }
      ]
    },
    {
      path: '/redirect',
      redirect: { path: '/' }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return new Promise(resolve => {
      this.app.$root.$on('triggerScroll', () => {
        let position = { x: 0, y: 100 };
        if (savedPosition) {
          position = savedPosition;
        }
        if (to.hash) {
          position = {
            selector: to.hash
          };
        }
        resolve(position);
      })
    })
  }
});