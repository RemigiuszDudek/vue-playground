<script>
export default {
  props: {
    id: String,
    name: String,
    expertises: Array,
    pricePerHour: Number
  }
}
</script>

<template>
  <base-card>
    <div>{{ this.name }}</div>
    <base-badge
        :key="expertise"
        mode="elegant"
        v-for="expertise in this.expertises">{{ expertise }}
    </base-badge>
    <div>{{ pricePerHour }} $</div>
  </base-card>
</template>

<style scoped>

</style>