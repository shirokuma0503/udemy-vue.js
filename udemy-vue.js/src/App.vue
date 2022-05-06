<template>
  <div>
    <GoodHeader>
      <template>
        <h1>slotで表示するヘッダー</h1>
      </template>
    </GoodHeader>

    <component :is="currentComponent"></component>
  </div>
</template>

<script>
import GoodHeader from './components/GoodHeader.vue';
import TestHome from './components/TestHome.vue';

export default {
  components: {
    GoodHeader: GoodHeader,
    TestHome: TestHome
  },
  data() {
    return {
      currentComponent: "TestHome"
    }
  }
};
</script>

<style scoped></style>
