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
            const filteredCoaches = state.coaches.filter(it => it.id === id);

            if (filteredCoaches.length > 1) throw Error(`too many coaches: ${JSON.stringify(filteredCoaches)}`)

            return filteredCoaches.length === 1 ? filteredCoaches[0] : null
        }
    },
    mutations: {
        setCoaches(state, coaches) {
            state.coaches = coaches
        }
    },
    actions: {
        loadCoach({ getters, dispatch }, id) {
            const coach = getters['getCoach'](id)
            if (!coach) {
                return dispatch('loadCoaches')
            }
        },
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