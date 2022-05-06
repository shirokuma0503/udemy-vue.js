<template>
  <div>
    <GoodHeader v-slot:default="slotProps">
      <h1>slotで表示するヘッダー</h1>
      <p>{{ slotProps }}</p>
      <p>{{ slotProps.userName.firstName }}</p>
      <p>{{ slotProps.userName.lastName }}</p>
    </GoodHeader>
  </div>
</template>

<script>
import GoodHeader from './components/GoodHeader.vue';

export default {
  components: {
    GoodHeader: GoodHeader,
  }
};
</script>

<style scoped></style>
