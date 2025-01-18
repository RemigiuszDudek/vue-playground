Vue.createApp({
    data: () => ({
        name: 'John',
        age: 20,
        buddhaImage: 'https://slowamajamoc.com/cdn/shop/files/PlakatA3_3.jpg?v=1708595832&width=313'
    }),
    computed: {
        ageIn5Years() {
            return this.age + 5;
        },
        favoriteNumber() {
            return Math.random();
        }
    },
}).mount('#assignment');