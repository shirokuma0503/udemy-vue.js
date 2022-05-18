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
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions("count", ["increment", "decrement"])
  }
}
</script>