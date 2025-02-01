<script>
import BaseCard from "@/pages/ui/BaseCard.vue";
import BaseBadge from "@/pages/ui/BaseBadge.vue";
import BaseButton from "@/pages/ui/BaseButton.vue";

export default {
  components: { BaseButton, BaseBadge, BaseCard },
  props: ['id'],
  data() {
    return {
      name: '',
      pricePerHour: '',
      expertises: []
    }
  },
  beforeCreate() {
    this.$store.dispatch('coaches/loadCoach', this.id)
        .then(() => {
          const coach = (this.$store.getters['coaches/getCoach'](this.id))
          if (coach) {
            this.name = coach.name
            this.pricePerHour = coach.pricePerHour
            this.expertises = coach.expertises
          }
        })
  }
}
</script>

<template>
  <base-card>
    <h2>{{ this.name }}</h2>
    <h3>{{ this.pricePerHour }}$</h3>
  </base-card>
  <base-card>
    <header>
      <h2>Interested? Reach out now!</h2>
      <base-button link :to="{ name: 'coach-contact-form' }" mode="outline">Contact</base-button>
    </header>
    <router-view></router-view>
  </base-card>
  <base-card>
    <ul>
      <base-badge
          :key="expertise"
          mode="elegant"
          v-for="expertise in this.expertises">{{ expertise }}
      </base-badge>
    </ul>
  </base-card>
</template>

<style scoped>

</style>