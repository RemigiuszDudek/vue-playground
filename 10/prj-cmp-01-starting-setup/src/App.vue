<script>
import TheHeader from "@/components/layouts/TheHeader.vue";
import TheResources from "@/components/learning-resources/TheResources.vue";

export default {
  components: {TheResources, TheHeader},
}
</script>

<template>
  <the-header title="Learning Resources"/>
  <the-resources/>
</template>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto Light', sans-serif;
}

body {
  margin: 0;
  padding: 0;
}
</style>