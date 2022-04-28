<template>
  <div>
    <p>合計の半分の数を表示（{{ halfNumber }}）</p>
  </div>
</template>

<script>
export default {
  props: ['good'],
  computed: {
    halfNumber() {
      return this.good / 2;
    }
  }
};
</script>

<style scoped>
  div {
    border: 5px solid #9db7b2;
  }
</style>