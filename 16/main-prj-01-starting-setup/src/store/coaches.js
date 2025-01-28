export default {
    namespaced: true,
    state() {
        return {
            coaches: [
                {
                    id: 'c1',
                    name: 'Albert Einstein',
                    expertises: ['physics', 'mathematics'],
                    pricePerHour: 30.5
                },
                {
                    id: 'c2',
                    name: 'Alan Turing',
                    expertises: ['informatics', 'mathematics'],
                    pricePerHour: 20.99
                },
                {
                    id: 'c2',
                    name: 'Kazimierz Kowalski',
                    expertises: ['life'],
                    pricePerHour: 5.99
                }
            ]
        }
    },
    getters: {
        getCoaches(state) {
            return state.coaches
        },
        getCoach: (state) => (id) => {
            return state.coaches.filter(it => it.id === id)
        }
    }
}