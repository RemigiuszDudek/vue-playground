export default {
    namespaced: true,
    state() {
        return {
            items: [], total: 0, qty: 0
        }
    },
    getters: {
        getQuantity(state) {
            return state.qty
        },
        getTotal(state) {
            console.log(state)
            return state.total.toFixed(2).replace('-0', '0')
        },
        getItems(state) {
            return state.items
        },
        getProductIndex: (state) => (id) => {
            return state.items.findIndex(
                (ci) => ci.productId === id
            );
        }
    },
    mutations: {
        addProductToCart(state, productData) {
            state.items.push(productData);
        },

        incrementProductQty(state, index) {
            state.items[index].qty++
        },

        removeProductFromCart(state, index) {
            state.items.splice(index, 1);
        },

        incrementCartQty(state) {
            state.qty++
        },

        subtractFromCartQuantity(state, qty) {
            state.qty -= qty;
        },

        addToTotal(state, amount) {
            state.total += amount
        },

        subtractFromTotal(state, amount) {
            state.total -= amount
        }
    },
    actions: {
        addProductToCart({ commit, getters, rootGetters }, productId) {
            const productData = rootGetters['products/getProduct'](productId)
            const productInCartIndex = getters.getProductIndex(productId);

            if (productInCartIndex >= 0) {
                commit('incrementProductQty', productInCartIndex)
            } else {
                commit('addProductToCart', {
                    productId: productData.id,
                    title: productData.title,
                    image: productData.image,
                    price: productData.price,
                    qty: 1,
                });
            }
            commit('incrementCartQty')
            commit('addToTotal', productData.price);
        },
        removeProductFromCart(ctx, prodId) {
            const productInCartIndex = ctx.getters.getProductIndex(prodId);
            const prodData = ctx.state.items[productInCartIndex];
            ctx.commit('removeProductFromCart', productInCartIndex);
            ctx.commit('subtractFromCartQuantity', prodData.qty)
            ctx.commit('subtractFromTotal', prodData.price * prodData.qty)
        }
    }
}