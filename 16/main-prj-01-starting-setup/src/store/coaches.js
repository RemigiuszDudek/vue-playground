export default {
    namespaced: true,
    state() {
        return {
            // {
            //     id: 'c1',
            //     name: 'Albert Einstein',
            //     expertises: ['physics', 'mathematics'],
            //     pricePerHour: 30.5
            // }
            coaches: []
        }
    },
    getters: {
        getCoaches(state) {
            return state.coaches
        },
        getCoach: (state) => (id) => {
            return state.coaches.filter(it => it.id === id)
        }
    },
    mutations: {
        setCoaches(state, coaches) {
            state.coaches = coaches
        }
    },
    actions: {
        loadCoaches({ commit }) {
            return fetch('https://coach-finder-70a20-default-rtdb.europe-west1.firebasedatabase.app/coaches.json')
                .then(resp => resp.json())
                .then(coaches => {
                    console.log(coaches)
                    commit('setCoaches', coaches)
                })
        }
    }
}