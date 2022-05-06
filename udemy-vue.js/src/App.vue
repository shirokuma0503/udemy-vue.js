<template>
  <div>
    <GoodHeader>
      <p>①適当に書いたものは全部デフォルトslotへ</p>

      <template v-slot:slotTitle>
        <h1>slotで表示するヘッダー</h1>
      </template>

      <p>②適当に書いたものは全部デフォルトslotへ</p>

      <template v-slot:slotNumber>
        <p>合計のいいね（{{ number }}）</p>
      </template>

      <p>③適当に書いたものは全部デフォルトslotへ</p>
    </GoodHeader>
    <GoodNumber :good="number"></GoodNumber>
    <GoodNumber :good="number" @good-click="incrementNumber"></GoodNumber>
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
