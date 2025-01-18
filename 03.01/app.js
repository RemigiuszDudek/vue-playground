const app = Vue.createApp({
    data: () => ({
        enteredValue: '',
        goals: []
    }),
    methods: {
        addGoal() {
            if (!this.enteredValue) return;
            this.goals.push(this.enteredValue);
        },
        removeGoal(index) {
            this.goals.splice(index, 1);
        }
    },
});

app.mount('#user-goals');
