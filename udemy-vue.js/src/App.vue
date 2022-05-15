<template>
  <div>
    <button>
      <router-link
        to="/"
        active-class="link-active"
        exact
      >TestHome</router-link>
    </button>
    <button>
      <router-link
        to="/users"
        active-class="link-active"
      >TestUsers</router-link>
    </button>
    <router-view></router-view>

    <button @click="myAnimation = 'slide'">slide</button>
    <button @click="myAnimation = 'fade'">fade</button>
    <h3>今のアニメーションは{{ myAnimation }}</h3>
    <br>

    <TransitionComponent>
      <ul>
        <transition-group name="fade">
          <li
            style="cursor: pointer;"
            v-for="(number, index) in numbers"
            :key="number"
            @click="remove(index)"
          >{{ number }}</li>
        </transition-group>
      </ul>
      <button @click="add">数を追加</button>
    </TransitionComponent>
    <br>

    <button @click="show = !show">表示／非表示</button>
    <br>
    <br>

    <transition
    :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <div class="circle" v-if="show"></div>
    </transition>
    <br>

    <button @click="myComponent = 'AComponent'">AComponent</button>
    <button @click="myComponent = 'BComponent'">BComponent</button>
    <transition name="fade" mode="out-in">
      <component :is="myComponent"></component>
    </transition>

    <transition name="fade" mode="out-in">
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
import AComponent from './components/AComponent.vue';
import BComponent from './components/BComponent.vue';
import TransitionComponent from './components/TransitionComponent.vue';

export default {
  components: {
    AComponent,
    BComponent,
    TransitionComponent
  },
  data() {
    return {
      show: true,
      myAnimation: 'slide',
      myComponent: 'AComponent',
      numbers: [0, 1, 2],
      nextNumber: 3
    };
  },
  methods: {
    beforeEnter(el) {
      // 現れる前
      el.style.transform = 'scale(0)'
    },
    enter(el, done) {
      // 現れる時
      let scale = 0;
      const interval = setInterval(() => {
        el.style.transform = `scale(${scale})`;
        scale += 0.1
        if (scale > 1) {
          clearInterval(interval);
          done();
        }
      }, 200);
    },
    leave(el, done) {
      // 消える時
      let scale = 1;
      const interval = setInterval(() => {
        el.style.transform = `scale(${scale})`;
        scale -= 0.1
        if (scale < 0) {
          clearInterval(interval);
          done();
        }
      }, 200);
    },
    randomIndex() {
      return Math.floor(Math.random() * this.numbers.length);
    },
    add() {
      this.numbers.splice(this.randomIndex(), 0, this.nextNumber);
      this.nextNumber += 1;
    },
    remove(index) {
      this.numbers.splice(index, 1);
    }
  }
};
</script>

<style scoped>
.link-active {
  font-size: 20px;
}

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

.fade-move {
  transition: transform 1s;
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

.circle {
  height: 200px;
  width: 200px;
  border: 2px solid brown;
  border-radius: 100px;
}
</style>
