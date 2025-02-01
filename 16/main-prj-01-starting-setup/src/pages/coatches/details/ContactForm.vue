<script>
import BaseButton from "@/pages/ui/BaseButton.vue";

export default {
  components: { BaseButton },
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
    <div class="form-control">
      <label for="to">Coach</label>
      <input type="text" id="to" :value="coachName" readonly disabled>
    </div>
    <div class="form-control">
      <label for="email">Your email</label>
      <input type="email" id="email" required v-model="email">
    </div>
    <div class="form-control">
      <label for="message">Your message</label>
      <textarea id="message" rows="5" required v-model="message"></textarea>
    </div>
    <div class="actions">
      <base-button mode="outline">Send message</base-button>
    </div>
  </form>
</template>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>