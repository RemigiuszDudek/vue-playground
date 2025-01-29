<script>
import CoachCard from "@/components/coatches/list/CoachCard.vue";

export default {
  components: { CoachCard },
  created() {
    return this.$store.dispatch('coaches/loadCoaches')
  }
}
</script>

<template>
  <h2>Coach list</h2>
  <ul>
    <coach-card
        :key="coach.id"
        :id="coach.id"
        :name="coach.name"
        :expertises="coach.expertises"
        :price-per-hour="coach.pricePerHour"
        v-for="coach in $store.getters['coaches/getCoaches']"></coach-card>
  </ul>
</template>

<style scoped>

</style>