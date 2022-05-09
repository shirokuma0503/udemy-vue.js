<template>
  <div>
    <p v-border:solid.round="{width: '5px', color: 'brown'}">Home.vueです</p>
    <input>

    <h2>{{ title | upperCase }}</h2>
    <h2>{{ subTitle | lowerCase }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "welcome",
      subTitle: "WELCOME"
    }
  },
  filters: {
    lowerCase(value) {
      return value.toLowerCase();
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