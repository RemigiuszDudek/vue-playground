<template>
  <div>
    <the-header></the-header>
    <!--    <badge-list></badge-list>-->
    <!--    <user-info-->
    <!--        :full-name="activeUser.name"-->
    <!--        :info-text="activeUser.description"-->
    <!--        :role="activeUser.role"-->
    <!--    ></user-info>-->
    <button @click="selectComponent('active-goals')">ActiveGoals</button>
    <button @click="selectComponent('manage-goals')">ManageGoals</button>
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
// import BadgeList from "@/components/BadgeList.vue";
// import UserInfo from "@/components/UserInfo.vue";
import ActiveGoals from "@/components/ActiveGoals.vue";
import ManageGoals from "@/components/ManageGoals.vue";

export default {
  components: {
    // UserInfo, BadgeList,
    TheHeader,
    ActiveGoals, ManageGoals
  },
  data() {
    return {
      selectedComponent: 'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    selectComponent(component) {
      this.selectedComponent = component;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>