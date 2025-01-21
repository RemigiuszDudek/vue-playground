<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <ul>
        <survey-result
          v-for="result in savedResults"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  data() {
    return {
      savedResults: []
    }
  },
  components: {
    SurveyResult,
  },
  mounted() {
    this.loadExperiences();
  },
  methods: {
    async loadExperiences() {
      fetch('https://vue-http-playground-default-rtdb.europe-west1.firebasedatabase.app/surveys.json')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const results = [];
          for (const id in data) {
            results.push({
              id,
              name: data[id].userName,
              rating: data[id].rating,
            });
          }
          this.savedResults = results;
        });
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>