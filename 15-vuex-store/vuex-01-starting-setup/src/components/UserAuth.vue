<script setup>

</script>

<template>
  <h2>Auth</h2>
  <button @click="$store.dispatch('login')">Login</button>
  <button @click="$store.dispatch('logout')">Logout</button>
</template>

<style scoped>

</style>