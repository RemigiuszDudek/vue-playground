<script>

import BaseButton from "@/components/UI/BaseButton.vue";

export default {
  components: {BaseButton},
  props: {
    id: String,
    title: String,
    description: String,
    link: String
  }
}
</script>

<template>
  <li>
    <base-card>
      <header>
        <h3>{{ title }}</h3>
        <base-button mode="flat">Delete</base-button>
      </header>
      <p>{{ description }}</p>
      <nav>
        <a :href="link" target="_blank">View resource</a>
      </nav>
    </base-card>
  </li>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

li {
  margin: auto;
  max-width: 40rem;
}

h3 {
  font-size: 1.5rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  color: #ce5c00;
  text-decoration: none;
}

a:hover, a:active {
  color: #c89300;
}
</style>