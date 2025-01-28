import { createStore } from "vuex";
import coaches from './coaches'

const store = createStore({
    modules: { coaches }
})

export default store;