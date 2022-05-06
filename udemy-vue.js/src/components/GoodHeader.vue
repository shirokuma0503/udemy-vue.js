<template>
  <div>
    <slot name="slotTitle">
      <h1>slotの中身がない時に表示される</h1>
    </slot>

    <slot name="slotNumber"></slot>
  </div>
</template>

<script>
</script>

<style scoped>
  div {
    background-color: #dcedec;
  }
</style>