<script>
export default {
  emits: {
    'delete-friend': function (friendId) {
      return typeof friendId === 'string';
    },
    'add-friend': function (newFriend) {
      return typeof newFriend.id === 'string';
    }
  },
  data() {
    return {
      name: '',
      phone: '',
      email: ''
    }
  },
  methods: {
    addFriend() {
      const newFriend = {
        id: new Date().toISOString(),
        name: this.name,
        phone: this.phone,
        email: this.email
      };
      this.$emit('add-friend', newFriend);
      this.name = '';
      this.phone = '';
      this.email = '';
    }
  }
}
</script>

<template>
  <form @submit.prevent="addFriend">
    <div>
      <label for="name">Name</label>
      <input v-model="name" type="text" id="name" name="name">
    </div>
    <div>
      <label for="phone">Phone</label>
      <input v-model="phone" type="text" id="phone" name="phone">
    </div>
    <div>
      <label for="email">Email</label>
      <input v-model="email" type="text" id="email" name="email">
    </div>
    <button type="submit">Add Friend</button>
  </form>
</template>