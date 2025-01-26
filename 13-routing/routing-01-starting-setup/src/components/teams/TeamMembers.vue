<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
          v-for="member in members"
          :key="member.id"
          :name="member.fullName"
          :role="member.role"
      ></user-item>
    </ul>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  created() {
    const team = this.teams.find((team) => team.id === this.teamId);
    const users = this.users.filter((user) => team.members.includes(user.id));

    this.teamName = team.name;
    this.sort = this.$route.query.sort;
    this.members = users.sort((a, b) => {
      const modifier = this.sort === 'asc' ? 1 : -1;
      return modifier * a.fullName.localeCompare(b.fullName);
    });
  },
  props: ['teamId'],
  inject: ['teams', 'users'],
  components: {
    UserItem
  },
  data() {
    return {
      teamName: null,
      members: null,
      sort: null
    };
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>