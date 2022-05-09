<template>
  <div>
    <p v-border:solid.round="{width: '5px', color: 'brown'}">Home.vueです</p>
    <input>

    <h2>{{ title | upperCase }}</h2>
    <h2>{{ subTitle | lowerCase }}</h2>

    <CountNumber></CountNumber>
  </div>
</template>

<script>
import CountNumber from "./CountNumber.vue";
import { countNumber } from "@/countNumber";
export default {
  mixins: [countNumber],
  components: {
    CountNumber
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