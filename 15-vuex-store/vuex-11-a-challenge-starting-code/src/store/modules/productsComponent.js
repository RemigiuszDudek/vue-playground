export default {
    namespaced: true,
    state() {
        return {
            products: [
                {
                    id: 'p1',
                    image:
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg',
                    title: 'Book Collection',
                    description:
                        'A collection of must-read books. All-time classics included!',
                    price: 100.01,
                },
                {
                    id: 'p2',
                    image:
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Dome_tent.JPG/640px-Dome_tent.JPG',
                    title: 'Mountain Tent',
                    description: 'A tent for the ambitious outdoor tourist.',
                    price: 200.01,
                },
                {
                    id: 'p3',
                    image:
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
                    title: 'Food Box',
                    description:
                        'May be partially expired when it arrives but at least it is cheap!',
                    price: 10.01,
                },
            ],
        }
    },
    getters: {
        getProducts(state) {
            return state.products
        },
        getProduct: (state) => (id) => {
            return state.products.filter(it => it.id === id)[0]
        }
    }
}