<template>
  <div>
    <GoodHeader>
      <template v-slot:[title]>
        <h1>slotで表示するヘッダー</h1>
      </template>
    </GoodHeader>
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
      title: "slotTitle"
    }
  }
};
</script>

<style scoped></style>
