<template>
  <div>
    <h1>TestHome</h1>
    <button @click="toTestUsers">TestUsersページへ</button>
    <p>{{ count }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count;
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