Vue.createApp({
    data() {
        return {
            boxA: false,
            boxB: false,
            boxC: false
        }
    },
    methods: {
        selectBox(box) {
            this[box] = !this[box]
        }
    }
}).mount('#styling')