<template>
  <div>
    <p>合計の半分の数を表示（{{ halfNumber }}）</p>
    <button @click="increment">いいね＋1</button>
  </div>
</template>

<script>
export default {
  props: {
    good: {
      type: Number,
      required: true
    }
  },
  computed: {
    halfNumber() {
      return this.good / 2;
    }
  },
  methods: {
    increment() {
      this.$emit("good-click", this.good + 1);
    }
  }
};
</script>

<style scoped>
  div {
    border: 5px solid #9db7b2;
  }
</style>