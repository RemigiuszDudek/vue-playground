<script>

import BaseCard from "@/components/UI/BaseCard.vue";
import BaseButton from "@/components/UI/BaseButton.vue";
import BaseDialog from "@/components/UI/BaseDialog.vue";

export default {
  data() {
    return {
      isFormValid: true
    }
  },
  components: {
    BaseDialog,
    BaseCard,
    BaseButton
  },
  inject: ['addResource'],
  methods: {
    submitResource() {
      const title = this.$refs.title.value;
      const description = this.$refs.description.value;
      const link = this.$refs.link.value;

      if (title.trim() === '' || description.trim() === '' || link.trim() === '') {
        this.isFormValid = false;
        return;
      }

      this.addResource(title, description, link);
    }
  }
}
</script>

<template>
  <base-dialog v-if="!isFormValid" title="Invalid input" @close="isFormValid = true">
    <div>
      <p>Please make sure that all inputs have non-blank value</p>
    </div>
    <template v-slot:actions>
      <base-button @click="isFormValid = true">Ok</base-button>
    </template>
  </base-dialog>
  <base-card>
    <form @submit.prevent="submitResource">
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" id="title" name="title" ref="title"/>
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea rows="3" id="description" name="description" ref="description"/>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" name="input" type="url" ref="link"/>
      </div>
      <div>
        <base-button type="submit" mode="flat">Add Resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<style scoped>
label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input, textarea {
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border-radius: 6px;
  border: 1px solid #ccc;
}

input:focus, textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>