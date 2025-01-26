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
        }
    },
    mutations: {
        addProductToCart(state, productData) {
            const productInCartIndex = state.cart.items.findIndex(
                (ci) => ci.productId === productData.id
            );

            if (productInCartIndex >= 0) {
                state.cart.items[productInCartIndex].qty++;
            } else {
                const newItem = {
                    productId: productData.id,
                    title: productData.title,
                    image: productData.image,
                    price: productData.price,
                    qty: 1,
                };
                state.cart.items.push(newItem);
            }
            state.cart.qty++;
            state.cart.total += productData.price;
        },

        removeProductFromCart(state, prodId) {
            console.log('mutation remove', prodId)
            const productInCartIndex = state.cart.items.findIndex(
                (cartItem) => cartItem.productId === prodId
            );
            const prodData = state.cart.items[productInCartIndex];
            state.cart.items.splice(productInCartIndex, 1);
            state.cart.qty -= prodData.qty;
            state.cart.total -= prodData.price * prodData.qty;
        },
    },
    actions: {
        addProductToCart(ctx, productData) {
            ctx.commit({
                type: 'addProductToCart',
                ...productData
            })
        },
        removeProductFromCart(ctx, prodId) {
            ctx.commit('removeProductFromCart', prodId)
        }
    }
}