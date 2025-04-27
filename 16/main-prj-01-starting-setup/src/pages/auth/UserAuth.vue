<script>

import BaseButton from "@/pages/ui/BaseButton.vue";
import {defineComponent} from "vue";
import BaseDialog from "@/pages/ui/BaseDialog.vue";

export default defineComponent({
  components: {BaseDialog, BaseButton},
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      mode: 'login',
      isLoading: false,
      error: null
    }
  },
  computed: {
    submitButtonCaption() {
      return this.mode === 'login' ? 'Login' : 'Sign-up'
    },
    switchModeButtonCaption() {
      return this.mode === 'login' ? 'Sign-up instead' : 'Login instead'
    }
  },
  methods: {
    switchMode() {
      this.mode = this.mode === 'login' ? 'signup' : 'login'
    },
    async submitForm() {
      this.formIsValid = true;
      if (!this.email.includes('@') || !this.email.trim() || this.password.length < 6) {
        this.formIsValid = false;
        return;
      }

      this.isLoading = true;
      try {
        if (this.mode === 'login') {
          await this.$store.dispatch('login', {
            email: this.email,
            password: this.password
          })
        } else {
          await this.$store.dispatch('signup', {
            email: this.email,
            password: this.password
          })
        }
      } catch (e) {
        this.error = e.message || `Failed to ${this.mode}`
      }

      this.isLoading = false;
    }
  },
})

</script>

<template>
  <div>
    <base-dialog title="Authentication failed" v-if="error">
      <template #header>
        <p>{{ error }}</p>
      </template>
      <template #actions>
        <base-button @click="error = null">Close</base-button>
      </template>
    </base-dialog>
    <base-card v-else>
      <form @submit.prevent="submitForm">
        <div class="form-control">
          <label for="email">Email</label>
          <input type="email" id="email" v-model.trim="email" required/>
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input type="password" id="password" v-model.trim="password" required/>
        </div>
        <p v-if="!formIsValid">Please provide valid email and password (must to have at least 6 chars)</p>
        <base-button mode="outline">{{ submitButtonCaption }}</base-button>
        <base-button mode="flat" @click="switchMode">{{ switchModeButtonCaption }}</base-button>
      </form>
    </base-card>
  </div>
</template>

<style>
form {
  margin: 1rem;
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
</style>