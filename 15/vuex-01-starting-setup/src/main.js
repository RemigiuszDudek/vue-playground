import { createApp } from 'vue';

import App from './App.vue';
import { createStore } from "vuex";

const app = createApp(App);

const counterModule = {
    state() {
        return {
            counter: 0,
        }
    },
    mutations: {
        increment(state) {
            state.counter++
        },
        increase(state, payload) {
            state.counter += payload.value
        },
    },
    actions: {
        // actions can be async
        increment(context) {
            context.commit('increment')
        },
        increase(context, payload) {
            context.commit('increase', payload)
        },
    },
    getters: {
        finalCounter(state) {
            return state.counter
        },
        normalizedCounter(_, getters) {
            const finalCounter = getters.finalCounter
            if (finalCounter > 100) {
                return 100
            }
            return finalCounter
        }
    }
}

const authenticationModule = {
    state() {
        return {
            authenticated: false
        }
    },
    mutations: {
        login(state) {
            state.authenticated = true
        },
        logout(state) {
            state.authenticated = false
        }
    },
    actions: {
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
    }
}

const store = createStore({
    modules: { authenticationModule, counterModule }
})

app.use(store);
app.mount('#app');
