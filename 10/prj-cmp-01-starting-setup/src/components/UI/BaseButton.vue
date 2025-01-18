<script>
export default {
  props: {
    mode: String
  }
}
</script>

<template>
  <button :class="mode">
    <slot/>
  </button>
</template>

<style scoped>
button {
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
}

button:hover, button:active {
  background-color: #270041;
  border-color: #270041;
}

.flat {
  background-color: transparent;
  border: none;
  color: #3a0061;
}

.flat:hover, .flat:active {
  background-color: #edd2ff;
}
</style>