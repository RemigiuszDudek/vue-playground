Vue.createApp({
    data: () => ({
        counter: 0,
        name: ''
    }),
    computed: {
        fullName() {
            if (this.name === '') {
                return ''
            }
            return `${this.name} Doe`
        }
    },
    methods: {
        resetInput() {
            this.name = ''
        },
        submitForm() {
          alert('Form submitted!')
        },
        increment() {
            this.counter++
        },
        decrement() {
            this.counter--
        },
        updateName(event) {
            this.name = event.target.value
        }
    }
}).mount('#events')