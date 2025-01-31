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
  <h2>Find your coach</h2>
  <span
      :key="expertise"
      :class="{ 'filter-option': true, 'active': this.selectedExpertises.includes(expertise) }"
      v-for="expertise in expertises">
    <label>{{ expertise }}</label>
    <input type="checkbox" name="expertises" :value="expertise" v-model="selectedExpertises"/>
  </span>

</template>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>