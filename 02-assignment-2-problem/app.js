Vue.createApp({
    data: () => ({
        userInput: '',
        userInput2: ''
    }),
    methods: {
        showAlert() {
            alert('Hello World!');
        },
        setUserInput2(event) {
            this.userInput2 = event.target.value;
        }
    }
}).mount('#assignment');