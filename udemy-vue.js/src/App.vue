<template>
  <div>
    <div>
      <h2>インベントのフォーム</h2>
      <label for="title">タイトル</label>
      <input
        id="title"
        type="text"
        v-model.lazy="eventData.title"
      >
      <p>{{ eventData.title }}</p>

      <label for="maxNumber">最大人数</label>
      <input
        id="maxNumber"
        type="number"
        v-model.number="eventData.maxNumber"
      >
      <p>{{ eventData.maxNumber }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      eventData: {
        title: "タイトル",
        maxNumber: 100
      }
    }
  }
};
</script>

<style scoped></style>
