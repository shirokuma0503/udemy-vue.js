<template>
  <div>
    <slot name="slotTitle" :userName="user">
      <h1>slotの中身がない時に表示される</h1>
    </slot>

    <slot name="slotNumber"></slot>

    <slot></slot>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          firstName: "氏",
          lastName: "名"
        }
      }
    }
  }
</script>

<style scoped>
  div {
    background-color: #dcedec;
  }
</style>