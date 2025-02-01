<script>
import BaseButton from "@/pages/ui/BaseButton.vue";
import BaseCard from "@/pages/ui/BaseCard.vue";

export default {
  components: { BaseCard, BaseButton },
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
  <base-card>
    <h2>Registration</h2>
    <form @submit.prevent="register">
      <div class="form-control">
        <label for="name">Name</label>
        <input type="text" id="name" required v-model="name"/>
      </div>
      <div class="form-control">
        <label for="expertise">Expertise</label>
        <ul>
          <li :key="expertise" v-for="expertise in getExpertise()">
            <label>{{ expertise }}</label>
            <input type="checkbox" id="expertise" :value="expertise" v-model="expertises"/>
          </li>
        </ul>
        <input type="text" id="newExpertises" placeholder="Add coma-separated expertises if none of the above matches" v-model="newExpertises"/>
      </div>
      <div class="form-control">
        <label for="price">Price per hour</label>
        <input type="number" id="price" required v-model="pricePerHour"/>
      </div>
      <div>
        <base-button>Register</base-button>
      </div>
    </form>
  </base-card>
</template>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>