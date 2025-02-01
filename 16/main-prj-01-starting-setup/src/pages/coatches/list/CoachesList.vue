<script>
import CoachCard from "@/pages/coatches/list/CoachCard.vue";
import CoachesFilter from "@/pages/coatches/list/CoachesFilter.vue";

export default {
  components: { CoachesFilter, CoachCard },
  data() {
    return {
      coaches: [],
      filteredExpertises: [],
    }
  },
  computed: {
    filteredCoaches() {
      return this.filteredExpertises.length > 0
          ? this.coaches.filter(coach => this.filteredExpertises.some(expertise => coach.expertises.includes(expertise)))
          : this.coaches;
    }
  },
  methods: {
    getExpertises() {
      return this.$store.getters['coaches/getExpertises']
    },
    getCoaches() {
      return this.$store.getters['coaches/getCoaches']
    },
    filter(selectedExpertises) {
      this.filteredExpertises = selectedExpertises;
    }
  },
  created() {
    return this.$store.dispatch('coaches/loadCoaches')
        .then(() => {
          this.coaches = this.getCoaches()
        })
  }
}
</script>

<template>
  <coaches-filter :expertises="this.getExpertises()" @filter="filter"></coaches-filter>
  <ul>
    <coach-card
        :key="coach.id"
        :id="coach.id"
        :name="coach.name"
        :expertises="coach.expertises"
        :price-per-hour="coach.pricePerHour"
        v-for="coach in this.filteredCoaches"></coach-card>
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>