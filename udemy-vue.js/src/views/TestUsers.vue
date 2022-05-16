<template>
  <div>
    <h1>TestUsers</h1>
    <router-link to="/users/1">ユーザー1</router-link>
    <router-link to="/users/2">ユーザー2</router-link>
    <hr>
    <h1>User No. {{ id }}</h1>
    <router-view></router-view>
    <div style="height: 1000px;"></div>
    <router-link
      id="next-user"
      :to="{ name: 'users-id-profile', params: { id: Number(id) + 1 }, query: { lang: 'ja', page: 2 }, hash: '#next-user' }"
    >次のユーザー</router-link>


  </div>
</template>

<script>
export default {
  props: ["id"],
  beforeRouteEnter(to, from, next) {
    next();
  },
  beforeRouteUpdate(to, from, next) {
    next();
  },
  beforeRouteLeave(to, from, next) {
    const isLeave = window.confirm("このページを離れますか？");
    if (isLeave) {
      next();
    } else {
      next(false);
    }
  },
}
</script>