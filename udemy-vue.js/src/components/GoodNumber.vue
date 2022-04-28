<template>
  <div>
    <p>合計の半分の数を表示（{{ good / 2 }}）</p>
  </div>
</template>

<script>
export default {
  props: ['good'],
};
</script>

<style scoped>
  div {
    border: 5px solid #9db7b2;
  }
</style>