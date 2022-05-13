<template>
  <div>
    <h1>TestUsers</h1>
    <button @click="toTestHome">TestHomeページへ</button>
  </div>
</template>

<script>
export default {
  methods: {
    toTestHome() {
      this.$router.push("TestHome");
    }
  }
}
</script>