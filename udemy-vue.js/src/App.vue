<template>
  <div>
    <GoodHeader></GoodHeader>
    <GoodNumber :good="number"></GoodNumber>
    <GoodNumber :good="number" test-props="複数のprops"></GoodNumber>
    <p>合計のいいね（{{ number }}）</p>
  </div>
</template>

<script>
import GoodHeader from './components/GoodHeader.vue';

export default {
  components: {
    GoodHeader: GoodHeader,
  },
  data() {
    return {
      number: 10
    };
  }
};
</script>

<style scoped></style>
