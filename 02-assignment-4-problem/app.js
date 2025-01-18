Vue.createApp({
    data: () => ({
        inputClazz: '',
        toggleValue: true,
        color: ''
    }),
    methods: {
        setInputClazz(event) {
            this.inputClazz = event.target.value;
        },
        toggle() {
          this.toggleValue = !this.toggleValue;
        }
    }
}).mount('#assignment');