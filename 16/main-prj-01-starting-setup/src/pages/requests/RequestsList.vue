<script>
import BaseCard from "@/pages/ui/BaseCard.vue";
import BaseButton from "@/pages/ui/BaseButton.vue";

export default {
  components: { BaseButton, BaseCard },
  computed: {
    requests() {
      return this.$store.getters['requests/getRequests']
    }
  }
}
</script>

<template>
  <base-card>
    <header>
      <h2>Requests list</h2>
      <base-button link mode="outline" to="/registration">Register new coach</base-button>
    </header>
    <ul>
      <li v-for="request in requests" :key="request.id">
        <base-card>
          <header>{{ $store.getters['coaches/getCoach'](request.coachId).name }}</header>
          <div>{{ request.email }}</div>
          <div class="message">{{ request.message }}</div>
        </base-card>
      </li>
    </ul>
  </base-card>
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