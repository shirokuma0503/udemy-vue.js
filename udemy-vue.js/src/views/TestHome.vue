<template>
  <div>
    <h1>TestHome</h1>
    <button @click="toTestUsers">TestUsersページへ</button>
    <p>{{ doubleCount }}</p>
    <p>{{ testDoubleCount }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  // computed: mapGetters(["doubleCount"]),
  // computed: mapGetters({
  //   testDoubleCount: "doubleCount"
  // }),
  computed: {
    ...mapGetters(["doubleCount"])
  },
  methods: {
    toTestUsers() {
      this.$router.push({
        name: 'user-id-profile',
        params: { id: 1 }
      });
    }
  }
}
</script>