import { createApp } from 'vue';

import router from './router.js';
import productsComponent from './store/productsComponent';
import cartComponent from './store/cartComponent';
import App from './App.vue';
import BaseBadge from './components/ui/BaseBadge.vue';
import { createStore } from "vuex";

const app = createApp(App)
const store = createStore({
    modules: {
        products: productsComponent,
        cart: cartComponent
    }
})

app.use(router);
app.use(store)
app.component('base-badge', BaseBadge);

app.mount('#app');
