<script>
import BaseButton from "@/components/ui/BaseButton.vue";

export default {
  components: { BaseButton },
  props: {
    id: String,
    name: String,
    expertises: Array,
    pricePerHour: Number
  },
  methods: {
    details() {
      this.$router.push({ name: 'coach-details', params: { id: this.id } })
    }
  }
}
</script>

<template>
  <base-card>
    <div>{{ this.name }}</div>
    <base-badge
        :key="expertise"
        mode="elegant"
        v-for="expertise in this.expertises">{{ expertise }}
    </base-badge>
    <div>{{ pricePerHour }} $</div>
    <div>
      <base-button>Contact</base-button>
      <base-button @click="this.details">View details</base-button>
    </div>
  </base-card>
</template>

<style scoped>

</style>