<template>
  <div>
    <h2>{{ title | upperCase }}</h2>
    <h2>{{ subTitle | lowerCase }}</h2>
  </div>
</template>

<script>
import { countNumber } from "@/countNumber";

export default {
  mixins: [countNumber]
}
</script>