<template>
  <div>
    <router-view name="header"></router-view>
    <transition
      name="fade"
      mode="out-in"
      @before-enter="beforeEnter"
    >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  methods: {
    beforeEnter() {
      // 現れる前
      this.$root.$emit('triggerScroll');
    }
  }
};
</script>

<style scoped>
.fade-enter {
  /* 現れる最初の状態 */
  opacity: 0;
}
.fade-enter-active {
  /* 現れる時のトランジション状態 */
  transition: opacity 1s;
}
.fade-enter-to {
  /* 現れる時の最後の状態 */
  opacity: 1;
}
.fade-leave {
  /* 消える時の最初の状態 */
  opacity: 1;
}
.fade-leave-active {
  /* 消える時のトランジション状態 */
  transition: opacity 1s;
  position: absolute;
}
.fade-leave-to {
  /* 消える時の最後の状態 */
  opacity: 0;
}
</style>
