Vue.createApp({
    data: () => ({
        currentTask: '',
        tasks: [],
        showList: true,
    }),
    computed: {
        buttonCaption() {
            return this.showList ? 'Hide List' : 'Show List';
        }
    }
}).mount('#assignment');