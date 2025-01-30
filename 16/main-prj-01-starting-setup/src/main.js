import { createApp } from 'vue';
import router from './router'
import App from './App.vue'
import store from "@/store";
import BaseBadge from "@/pages/ui/BaseBadge.vue";
import BaseCard from "@/pages/ui/BaseCard.vue";

const app = createApp(App)

app.use(store)
app.use(router)
app.component('base-badge', BaseBadge);
app.component('base-card', BaseCard);

store.dispatch('loadState').then(() => {
    app.mount('#app')
})
