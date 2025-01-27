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
    }
})

export default store;