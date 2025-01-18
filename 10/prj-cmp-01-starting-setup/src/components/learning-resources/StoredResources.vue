<script>
import LearningResource from "@/components/learning-resources/LearningResource.vue";
import {defineComponent} from "vue";

export default defineComponent({
  components: {LearningResource},
  inject: ['resources'],
})


</script>

<template>
  <ul>
    <learning-resource
        :id="resource.id"
        :title="resource.title"
        :description="resource.description"
        :link="resource.link"
        v-for="resource in this.resources" :key="resource.id"/>
  </ul>

</template>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>