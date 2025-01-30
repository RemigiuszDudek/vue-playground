import { createStore } from "vuex";
import coaches from './coaches'
import requests from "./requests";

const store = createStore({
    modules: { coaches, requests },
    actions: {
        loadState({ dispatch }) {
            return Promise.all([
                dispatch('coaches/loadCoaches'),
                dispatch('requests/loadRequests')
            ])
        }
    }
})

export default store;