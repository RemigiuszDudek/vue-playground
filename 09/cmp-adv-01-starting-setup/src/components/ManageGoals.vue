<script>
import ErrorAlert from "@/components/ErrorAlert.vue";

export default {
  components: {ErrorAlert},
  data() {
    return {
      inputIsValid: true,
    };
  },
  methods: {
    addGoal() {
      const enteredValue = this.$refs.goal.value;
      console.log(`value: ${enteredValue}`);
      if (enteredValue.trim().length === 0) {
        this.inputIsValid = false;
        console.log(`inputIsValid: ${this.inputIsValid}`);
      }
    },
  },
};
</script>

<template>
  <div>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal">
    <button @click="addGoal">Add Goal</button>
    <teleport to="body">
      <error-alert v-if="!inputIsValid">
        <h2>Invalid Input!</h2>
        <p>Please enter a non-empty value!</p>
        <button @click="inputIsValid = true">Okay</button>
      </error-alert>
    </teleport>
  </div>
</template>

<style scoped>

</style>