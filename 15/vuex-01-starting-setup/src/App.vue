<template>
  <base-container title="Vuex">
    <h3>{{ this.$store.state.counter }}</h3>
    <button @click="increment">Add 1</button>
    <button @click="increase">Add 10</button>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';

export default {
  components: {
    BaseContainer,
  },
  methods: {
    increment() {
      this.$store.commit('increment')
    },
    increase() {
      this.$store.commit('increase', { value: 10 })
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>