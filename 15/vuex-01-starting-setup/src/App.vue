<template>
  <base-container title="Vuex" v-if="$store.getters.isAuthenticated">
    <h3>{{ this.$store.getters.normalizedCounter }}</h3>
    <h3>{{ this.$store.getters.finalCounter }}</h3>
    <button @click="increment">Add 1</button>
    <button @click="increase">Add 10</button>
  </base-container>
  <base-container>
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import UserAuth from "@/components/UserAuth.vue";

export default {
  components: {
    UserAuth,
    BaseContainer,
  },
  methods: {
    increment() {
      this.$store.dispatch('increment')
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