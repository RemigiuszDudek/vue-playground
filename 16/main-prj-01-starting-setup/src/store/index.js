import {createStore} from "vuex";
import coaches from './coaches'
import requests from "./requests";
import auth from "./auth";

const store = createStore({
    modules: {coaches, requests, auth},
    actions: {
        loadState({dispatch}) {
            return Promise.all([
                dispatch('coaches/loadCoaches'),
                // dispatch('requests/loadRequests')
            ])
        }
    }
})

export default store;