<script setup>

</script>

<template>
  <button @click="$store.dispatch('login')">Login</button>
  <button @click="$store.dispatch('logout')">Logout</button>
</template>

<style scoped>

</style>