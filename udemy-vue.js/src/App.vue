<template>
  <div>
    <div>
      <h2>インベントのフォーム</h2>
      <label for="title">タイトル</label>
      <input
        id="title"
        type="text"
        v-model="eventData.title"
      >

      <p>{{ eventData.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      eventData: {
        title: "タイトル"
      }
    }
  }
};
</script>

<style scoped></style>
