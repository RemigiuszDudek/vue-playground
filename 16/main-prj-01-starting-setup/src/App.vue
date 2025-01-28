<script>

import TheNavBar from "@/components/ui/TheNavBar.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { TheNavBar }
})

</script>

<template>
  <the-nav-bar></the-nav-bar>
  <main>
    <router-view></router-view>
  </main>
</template>

<style scoped>

</style>