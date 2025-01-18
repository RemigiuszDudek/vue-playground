Vue.createApp({
    data: () => ({
        goalA: 'Be an aware Vue tester',
        goalB: 'Be an aware Vue developer',
        vueLink: 'https://vuejs.org/'
    }),
    methods: {
        outputGoal() {
            const randomNumber = Math.random()
            return randomNumber < 0.5
                ? this.goalA
                : this.goalB
        }
    }
}).mount('#user-goal')