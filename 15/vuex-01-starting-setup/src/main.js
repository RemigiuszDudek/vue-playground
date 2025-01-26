import { createApp } from 'vue';

import App from './App.vue';
import { createStore } from "vuex";

const app = createApp(App);
const store = createStore({
    state() {
        return { counter: 0 }
    },
    mutations: {
        increment(state) {
            state.counter++
        },
        increase(state, payload) {
            state.counter += payload.value
        }
    }
})

app.use(store);
app.mount('#app');
