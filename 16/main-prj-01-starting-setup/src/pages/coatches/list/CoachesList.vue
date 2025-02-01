<script>
import CoachCard from "@/pages/coatches/list/CoachCard.vue";
import CoachesFilter from "@/pages/coatches/list/CoachesFilter.vue";
import BaseButton from "@/pages/ui/BaseButton.vue";
import BaseCard from "@/pages/ui/BaseCard.vue";
import BaseSpinner from "@/pages/ui/BaseSpinner.vue";

export default {
  components: { BaseSpinner, BaseCard, BaseButton, CoachesFilter, CoachCard },
  data() {
    return {
      isLoading: false,
      filteredExpertises: [],
    }
  },
  computed: {
    filteredCoaches() {
      return this.filteredExpertises.length > 0
          ? this.coaches.filter(coach => this.filteredExpertises.some(expertise => coach.expertises.includes(expertise)))
          : this.coaches;
    },
    coaches() {
      return this.$store.getters['coaches/getCoaches']
    }
  },
  methods: {
    getExpertises() {
      return this.$store.getters['coaches/getExpertises']
    },
    filter(selectedExpertises) {
      this.filteredExpertises = selectedExpertises;
    },
    async refresh() {
      this.isLoading = true
      await this.$store.dispatch('coaches/loadCoaches')
      this.isLoading = false
    }
  },
  created() {
    return this.$store.dispatch('coaches/loadCoaches')
  }
}
</script>

<template>
  <coaches-filter :expertises="this.getExpertises()" @filter="filter"></coaches-filter>
  <base-card>
    <base-button @click="refresh" mode="outline">Refresh</base-button>
  </base-card>
  <base-spinner v-if="this.isLoading"></base-spinner>
  <ul v-else>
    <coach-card
        :key="coach.id"
        :id="coach.id"
        :name="coach.name"
        :expertises="coach.expertises"
        :selected-expertises="this.filteredExpertises"
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