<template>
  <div>
    <p v-border:solid.round="{width: '5px', color: 'brown'}">Home.vueです</p>
    <input>
  </div>
</template>

<script>
export default {
  directives: {
    border(el, binding) {
      el.style.borderWidth = binding.value.width;
      el.style.borderColor = binding.value.color;
      el.style.borderStyle = binding.arg;
      if (binding.modifiers.round) {
        el.style.borderRadius = "1rem";
      }
        }
      }
}
</script>