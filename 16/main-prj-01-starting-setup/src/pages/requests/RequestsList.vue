<script>
import BaseCard from "@/pages/ui/BaseCard.vue";

export default {
  components: { BaseCard },
  data() {
    return {
      requests: []
    }
  },
  created() {
    this.requests = this.$store.getters['requests/getRequests']
  }
}
</script>

<template>
  <h2>Requests list</h2>
  <ul>
    <li v-for="request in requests" :key="request.id">
      <base-card>
        <header>{{ $store.getters['coaches/getCoach'](request.coachId).name }}</header>
        <div>{{ request.email }}</div>
        <div class="message">{{ request.message }}</div>
      </base-card>
    </li>
  </ul>
</template>

<style scoped>
li {
  list-style: none;
}

header {
  font-size: 1.25rem;
  font-weight: bold;
}

.message {
  margin-top: 1rem;
}
</style>