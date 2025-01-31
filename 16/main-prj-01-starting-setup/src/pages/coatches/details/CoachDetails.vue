<script>
export default {
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
  <h2>Coach details</h2>
  <div>name: {{ this.name }}</div>
  <div>price: {{ this.pricePerHour }}$</div>
  <div>expertises:
    <ul>
      <li
          :key="expertise"
          v-for="expertise in this.expertises">{{ expertise }}
      </li>
    </ul>
  </div>
  <router-link :to="{ name: 'coach-contact-form' }">Contact</router-link>
  <router-view></router-view>
</template>

<style scoped>

</style>