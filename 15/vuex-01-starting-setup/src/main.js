import { createApp } from 'vue';

import App from './App.vue';
import { createStore } from "vuex";

const app = createApp(App);
const store = createStore({
    state() {
        return {
            counter: 0,
            authenticated: false
        }
    },
    mutations: {
        increment(state) {
            state.counter++
        },
        increase(state, payload) {
            state.counter += payload.value
        },
        login(state) {
            state.authenticated = true
        },
        logout(state) {
            state.authenticated = false
        }
    },
    actions: {
        // actions can be async
        increment(context) {
            context.commit('increment')
        },
        increase(context, payload) {
            context.commit('increase', payload)
        },
        login(context) {
            context.commit('login')
        },
        logout(context) {
            context.commit('logout')
        }
    },
    getters: {
        isAuthenticated(state) {
            return state.authenticated
        },
        finalCounter(state) {
            return state.counter
        },
        normalizedCounter(_, getters) {
            const finalCounter = getters.finalCounter
            if (finalCounter>100) {
                return 100
            }
            return finalCounter
        }

    }
})

app.use(store);
app.mount('#app');
