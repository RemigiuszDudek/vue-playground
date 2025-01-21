<script>
export default {
  props: {
    modelValue: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      activeRating: this.modelValue
    }
  },
  methods: {
    setActiveRating(rating) {
      this.activeRating = rating;
      this.$emit('update:modelValue', rating);
    }
  },
  emits: ['update:modelValue'],
}
</script>

<template>
<ul>
  <li :class="{active: this.activeRating === 'poor'}"><button type="button" @click="this.setActiveRating('poor')">Poor</button></li>
  <li :class="{active: this.activeRating === 'average'}"><button type="button" @click="this.setActiveRating('average')">Average</button></li>
  <li :class="{active: this.activeRating === 'great'}"><button type="button" @click="this.setActiveRating('great')">Great</button></li>
</ul>
</template>

<style scoped>
.active {
  border-color: #a00078;
}

.active button {
  color: #a00078;
}

ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid #cccccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>