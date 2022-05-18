<template>
  <div>
    <h1>TestHome</h1>
    <button @click="toTestUsers">TestUsersページへ</button>
    <p>{{ doubleCount }}</p>
    <input type="text" v-model="message">
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters("count", ["doubleCount"]),
    // message() {
    //   return this.$store.getters.message;
    // }
    message: {
      get() {
        return this.$store.getters.message;
      },
      set(value) {
        this.$store.dispatch("updateMessage", value);
      }
    }
  },
  methods: {
    toTestUsers() {
      this.$router.push({
        name: 'user-id-profile',
        params: { id: 1 }
      });
    }
  }
}
</script>