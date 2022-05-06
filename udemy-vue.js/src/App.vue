<template>
  <div>
    <GoodHeader>
      <h1>slotで表示しているヘッダー</h1>
    </GoodHeader>
    <GoodNumber :good="number"></GoodNumber>
    <GoodNumber :good="number" @good-click="incrementNumber"></GoodNumber>
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
  },
  methods: {
    incrementNumber(value) {
      this.number = value
    }
  }
};
</script>

<style scoped></style>
