<script>
import FriendContact from "@/components/FriendContact.vue";
import NewFriend from "@/components/NewFriend.vue";

export default {
  components: {FriendContact, NewFriend},
  data() {
    return {
      friends: [
        {id: 'manuel', name: 'Manuel Lorenz', phone: '01234 5678 991', email: 'manuel@local.com', isFavorite: false},
        {id: 'julie', name: 'Julie Jones', phone: '09876 543 221', email: 'julie@local.com', isFavorite: false},
        {id: 'romeo', name: 'Romeo Jones', phone: '09999 888 771', email: 'romeo@local.com', isFavorite: false}
      ]
    }
  },
  methods: {
    toggleFavorite(friendId) {
      const friend = this.friends.find(friend => friend.id === friendId);
      friend.isFavorite = !friend.isFavorite;
    },
    addFriend(newFriend) {
      this.friends.push({
        id: newFriend.id,
        name: newFriend.name,
        phone: newFriend.phone,
        email: newFriend.email,
        isFavorite: false
      });
    },
    deleteFriend(friendId) {
      this.friends = this.friends.filter(friend => friend.id !== friendId);
    }
  }
}
</script>

<template>
  <header><h1>My Friends</h1></header>
  <ul>
    <new-friend @add-friend="addFriend"/>
    <friend-contact v-for="friend in friends"
                    :key="friend.id"
                    :id="friend.id"
                    :name="friend.name"
                    :phone="friend.phone"
                    :is-favorite="friend.isFavorite"
                    :email="friend.email"
                    @toggle-favorite="toggleFavorite"
                    @delete-friend="deleteFriend"/>
  </ul>
</template>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li,
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

label {
  font-weight: bold;
}

label, input {
  text-align: center;
  max-width: 40rem;
  margin-bottom: 0.5rem;
  display: block;
  width: 100%;
}

#app input {
  font: inherit;
  border: 1px solid #ccc;
}

#app input:focus {
  outline: none;
  border-color: #1b995e;
  background-color: #d7fdeb;
}
</style>