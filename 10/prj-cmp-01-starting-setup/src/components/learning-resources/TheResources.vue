<script>
import StoredResources from "@/components/learning-resources/StoredResources.vue";
import AddResource from "@/components/learning-resources/AddResource.vue";

export default {
  components: {StoredResources, AddResource},
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Vue.js - The Official Guide',
          description: 'The Official Guide to Vue.js',
          link: 'https://vuejs.org'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn how to use google',
          link: 'https://google.com'
        }
      ]

    }
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      removeResource: this.removeResource
    }
  },
  methods: {
    switchTab(tab) {
      console.log(tab);
      this.selectedTab = tab;
    },
    removeResource(resourceId) {
      const index = this.storedResources.findIndex(resource => resource.id === resourceId);
      this.storedResources.splice(index, 1);
    },
    addResource(title, description, link) {
      this.storedResources.unshift(
          {
            id: new Date().toISOString(),
            title,
            description,
            link
          }
      );
      this.selectedTab = 'stored-resources';
    }
  }
}
</script>

<template>
  <base-card>
    <base-button
        @click="switchTab('stored-resources')"
        :mode="this.selectedTab === 'stored-resources' ? null : 'flat'">
      Stored Resources
    </base-button>
    <base-button
        :mode="this.selectedTab === 'add-resource' ? null : 'flat'"
        @click="switchTab('add-resource')">
      Add Resource
    </base-button>
  </base-card>
  <keep-alive>
    <component :is="selectedTab" @add-resource="addResource"/>
  </keep-alive>
</template>

<style scoped>

</style>