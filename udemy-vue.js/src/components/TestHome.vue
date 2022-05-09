<template>
  <div>
    <p v-border:solid.round="{width: '5px', color: 'brown'}">Home.vueです</p>
    <input>

    <h2>{{ title | upperCase }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "welcome"
    }
  },
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