<template>
  <div>
    <h1>HeaderHome.vue</h1>
    <button>
      <router-link
        :to="{ name: 'user-id-profile', params: { id: 1 }, query: { lang: 'ja', page: '2' }, hash: '#next-user' }"
        active-class="link-active"
        exact
      >TestUsers</router-link>
    </button>
    <button>
      <router-link
        to="/"
        active-class="link-active"
      >TestHome</router-link>
    </button>
    <hr>
    <button @click="increment(2)">+1</button>
    <button @click="decrement(2)">-1</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations(["increment", "decrement"])
    // increment() {
    //   this.$store.commit('increment', 2);
    // },
    // decrement() {
    //   this.$store.commit('decrement', 2);
    // }
  }
}
</script>