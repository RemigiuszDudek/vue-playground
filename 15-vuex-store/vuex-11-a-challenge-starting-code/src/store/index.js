import { createStore } from "vuex";
import productsComponent from "@/store/modules/productsComponent";
import cartComponent from "@/store/modules/cartComponent";

const store = createStore({
    modules: {
        products: productsComponent,
        cart: cartComponent
    },
    state() {
        return {
            isLoggedIn: false
        }
    },
    mutations: {
        login(state) {
            state.isLoggedIn = true;
        },
        logout(state) {
            state.isLoggedIn = false;
        },
    },
    actions: {
        login({ commit }) {
            commit('login')
        },
        logout({ commit }) {
            commit('logout');
        },
    },
    getters: {
        isAuthenticated(state) {
            return state.isLoggedIn
        }
    }
})

export default store;