export default {
    state() {
        return {
            cart: { items: [], total: 0, qty: 0 },
        }
    },
    getters: {
        getQuantity(state) {
            return state.cart.qty
        },
        getTotal(state) {
            console.log(state)
            return state.cart.total.toFixed(2).replace('-0', '0')
        },
        getItems(state) {
            return state.cart.items
        },
        getProductIndex: (state) => (id) => {
            return state.cart.items.findIndex(
                (ci) => ci.productId === id
            );
        }
    },
    mutations: {
        addProductToCart(state, productData) {
            state.cart.items.push(productData);
        },

        incrementProductQty(state, index) {
            state.cart.items[index].qty++
        },

        removeProductFromCart(state, index) {
            state.cart.items.splice(index, 1);
        },

        incrementCartQty(state) {
            state.cart.qty++
        },

        subtractFromCartQuantity(state, qty) {
            state.cart.qty -= qty;
        },

        addToTotal(state, amount) {
            state.cart.total += amount
        },

        subtractFromTotal(state, amount) {
            state.cart.total -= amount
        }
    },
    actions: {
        addProductToCart({ commit, getters }, productData) {
            const productInCartIndex = getters.getProductIndex(productData.id);

            if (productInCartIndex >= 0) {
                commit('incrementProductQty', productInCartIndex)
            } else {
                const newItem = {
                    productId: productData.id,
                    title: productData.title,
                    image: productData.image,
                    price: productData.price,
                    qty: 1,
                };
                commit('addProductToCart', newItem);
            }
            commit('incrementCartQty')
            commit('addToTotal', productData.price);
        },
        removeProductFromCart(ctx, prodId) {
            const productInCartIndex = ctx.getters.getProductIndex(prodId);
            const prodData = ctx.state.cart.items[productInCartIndex];
            ctx.commit('removeProductFromCart', productInCartIndex);
            ctx.commit('subtractFromCartQuantity', prodData.qty)
            ctx.commit('subtractFromTotal', prodData.price * prodData.qty)
        }
    }
}