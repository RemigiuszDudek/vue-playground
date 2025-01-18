<template>
  <base-card>
    <template #header>
      <h3>{{ fullName }}</h3>
      <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
    </template>
    <p>{{ infoText }}</p>
  </base-card>
</template>

<script>
import BaseCard from "@/components/BaseCard.vue";

export default {
  components: {BaseCard},
  props: ['fullName', 'infoText', 'role'],
};
</script>
