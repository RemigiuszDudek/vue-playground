<script>
export default {
  props: ['id'],
  data() {
    return {
      coachName: '',
      email: '',
      message: ''
    }
  },
  methods: {
    sendMessage() {
      const message = {
        coachId: this.id,
        email: this.email,
        message: this.message
      }
      this.$store.dispatch('requests/addRequest', message)
          .then(() => {
            this.email = ''
            this.message = ''
          })
    }
  },
  beforeCreate() {
    this.$store.dispatch('coaches/loadCoach', this.id)
        .then(() => {
          const coach = (this.$store.getters['coaches/getCoach'](this.id))
          if (coach) {
            this.coachName = coach.name
          }
        })
  }
}

</script>

<template>
  <h2>Contact form</h2>
  <form @submit.prevent="sendMessage">
    <div>
      <label for="to">Coach</label>
      <input type="text" id="to" :value="coachName" readonly disabled>
    </div>
    <div>
      <label for="email">Your email</label>
      <input type="email" id="email" required v-model="email">
    </div>
    <div>
      <label for="message">Your message</label>
      <textarea id="message" rows="5" required v-model="message"></textarea>
    </div>
    <div>
      <button>Send message</button>
    </div>
  </form>
</template>

<style scoped>

</style>