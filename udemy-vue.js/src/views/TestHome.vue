<template>
  <div>
    <h1>TestHome</h1>
    <button @click="toTestUsers">TestUsersページへ</button>
    <p>{{ doubleCount }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    doubleCount() {
      return this.$store.getters.doubleCount;
    }
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