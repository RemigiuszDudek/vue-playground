<script>
export default {
  props: {
    expertises: Array,
  },
  data() {
    return {
      selectedExpertises: [],
    };
  },
  watch: {
    selectedExpertises() {
      this.$emit('filter', this.selectedExpertises);
    },
  },
};

</script>

<template>
  <ul>
    <li :key="expertise" v-for="expertise in expertises">
      <label>{{ expertise }}</label>
      <input type="checkbox" name="expertises" :value="expertise" v-model="selectedExpertises"/>
    </li>
  </ul>

</template>

<style scoped>

</style>