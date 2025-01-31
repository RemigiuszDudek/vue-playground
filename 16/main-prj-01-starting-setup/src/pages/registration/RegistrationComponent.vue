<script>
import BaseButton from "@/pages/ui/BaseButton.vue";

export default {
  components: { BaseButton },
  data() {
    return {
      name: '',
      expertises: [],
      newExpertises: '',
      pricePerHour: 0,
    }
  },
  methods: {
    register() {
      this.$store.dispatch('coaches/register', {
        name: this.name,
        expertises: this.expertises.concat(this.newExpertises.split(',')),
        pricePerHour: this.pricePerHour,
      }).then(() => {
        this.$router.push({ path: '/coaches' })
      })
    },
    getExpertise() {
      return this.$store.getters['coaches/getExpertises']
    },
  }
}
</script>

<template>
  <h2>Registration</h2>
  <form @submit.prevent="register">
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" required v-model="name"/>
    </div>
    <div>
      <label for="expertise">Expertise</label>
      <ul>
        <li :key="expertise" v-for="expertise in getExpertise()">
          <label>{{ expertise }}</label>
          <input type="checkbox" id="expertise" :value="expertise" v-model="expertises"/>
        </li>
      </ul>
      <input type="text" id="newExpertises" v-model="newExpertises"/>
    </div>
    <div>
      <label for="price">Price per hour</label>
      <input type="number" id="price" required v-model="pricePerHour"/>
    </div>
    <div>
      <base-button>Register</base-button>
    </div>
  </form>
</template>

<style scoped>

</style>