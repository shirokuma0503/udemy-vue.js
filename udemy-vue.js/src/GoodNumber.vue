<template>
  <div>
    <p>いいね（{{ good }}）</p>
    <button @click="increment">いいね +１</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      good: 1
    };
  },
  methods: {
    increment() {
      return this.good += 1
    }
  }
};
</script>

<style></style>