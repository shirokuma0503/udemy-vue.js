<template>
  <div>
    <GoodHeader>
      <template v-slot:slotTitle>
        <h1>slotで表示するヘッダー</h1>
      </template>
      <template v-slot:slotNumber>
        <p>合計のいいね（{{ number }}）</p>
      </template>
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
