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

      <label for="host">主催者</label>
      <input
        id="host"
        type="text"
        v-model.trim="eventData.host"
      >
      <p>{{ eventData.host }}</p>

      <label for="detail">イベントの内容</label>
      <textarea
        id="detail"
        cols="30"
        rows="3"
        v-model="eventData.detail"></textarea>
      <p style="white-space: pre;">{{ eventData.detail }}</p>
      <pre>{{ eventData.detail }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      eventData: {
        title: "タイトル",
        maxNumber: 100,
        host: "田中",
        detail: ""
      }
    }
  }
};
</script>

<style scoped></style>
