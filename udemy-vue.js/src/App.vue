<template>
  <div>
    <GoodHeader>
      <template>
        <h1>slotで表示するヘッダー</h1>
      </template>
    </GoodHeader>

    <button @click="currentComponent = 'TestHome'">TestHome</button>
    <button @click="currentComponent = 'TestAbout'">TestAbout</button>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
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
