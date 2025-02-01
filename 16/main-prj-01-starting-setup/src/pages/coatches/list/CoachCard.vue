<script>
import BaseButton from "@/pages/ui/BaseButton.vue";

export default {
  components: { BaseButton },
  props: {
    id: String,
    name: String,
    expertises: Array,
    pricePerHour: Number
  }
}
</script>

<template>
  <base-card>
    <h3>{{ this.name }}</h3>
    <h4>{{ pricePerHour }} $</h4>
    <base-badge
        :key="expertise"
        mode="elegant"
        v-for="expertise in this.expertises">{{ expertise }}
    </base-badge>
    <div class="actions">
      <base-button mode="outline" @click="$router.push({ name: 'coach-contact-form', params: { id: this.id } })">
        Contact
      </base-button>
      <base-button @click="this.$router.push({ name: 'coach-details', params: { id: this.id } })">
        View details
      </base-button>
    </div>
  </base-card>
</template>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>