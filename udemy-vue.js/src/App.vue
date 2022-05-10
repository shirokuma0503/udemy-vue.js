<template>
  <div>
    <button @click="myAnimation = 'slide'">slide</button>
    <button @click="myAnimation = 'fade'">fade</button>
    <h3>今のアニメーションは{{ myAnimation }}</h3>
    <button @click="show = !show">表示／非表示</button>

    <transition name="fade">
      <p v-if="show" key="show">show</p>
      <p v-if="!show" key="notShow">！</p>
    </transition>

    <transition
      appear
      enter-active-class="animate__animated animate__bounce"
      leave-active-class="animate__animated animate__rubberBand"
    >
      <p v-if="show"></p>
    </transition>

    <transition
      :name="myAnimation"
      appear>
      <p v-if="show"></p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      myAnimation: 'slide'
    };
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
}
.fade-leave-to {
  /* 消える時の最後の状態 */
  opacity: 0;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}
.slide-enter-active {
  /* 現れる時のトランジション状態 */
  animation: slide-in 1s;
  transition: opacity 1s;
}
.slide-leave-active {
  /* 消える時のトランジション状態 */
  animation: slide-in 1s reverse;
  transition: opacity 1s;
}
@keyframes slide-in {
  from {
    transform: translateX(100px);
  }
  to {
    transform: translate(0);
  }
}

p {
  height: 100px;
  width: 100px;
  background-color: brown;
}
</style>
