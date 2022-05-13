<template>
  <div>
    <h1>TestHome</h1>
    <button @click="toTestUsers">TestUsersページへ</button>
  </div>
</template>

<script>
export default {
  methods: {
    toTestUsers() {
      this.$router.push("TestUsers");
    }
  }
}
</script>