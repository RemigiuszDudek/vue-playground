<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    name: String,
    phone: String,
    email: String,
    isFavorite: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: {
    'toggle-favorite': function(friendId) {
      return typeof friendId === 'string';
    }
  },
  data() {
    return {
      isDetailsVisible: false,
    }
  },
  methods: {
    toggleDetails() {
      this.isDetailsVisible = !this.isDetailsVisible;
    },
    toggleFavorite() {
      this.$emit('toggle-favorite', this.id);
    }
  }
}
</script>

<template>
  <li :key="id">
    <h2>{{ name }} {{ this.isFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleDetails">{{ isDetailsVisible ? 'Hide' : 'Show' }} Details</button>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="$emit('delete-friend', id)">Delete</button>
    <ul v-if="isDetailsVisible">
      <li>
        <strong>Contact:</strong>
        {{ phone }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ email }}
      </li>
    </ul>
  </li>
</template>

<style scoped>

</style>