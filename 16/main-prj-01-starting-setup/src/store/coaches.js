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
        getExpertises(state) {
            const expertises = []
            const coaches = state.coaches;
            coaches.forEach(coach => {
                coach.expertises.forEach(expertise => {
                    if (!expertises.includes(expertise)) {
                        expertises.push(expertise)
                    }
                })
            })
            return expertises
        },
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
        },
        addCoach(state, coach) {
            state.coaches.push(coach)
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
                    commit('setCoaches', Object.keys(coaches).map(key => ({ id: key, ...coaches[key] })))
                })
        },
        async register(context, data) {
            const userId = context.rootGetters.userId
            const response = await fetch(`https://coach-finder-70a20-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json?auth=${context.rootGetters.token}`, {
                method: 'PUT',
                body: JSON.stringify(data)
            })

            const responseData = await response.json();
            if (!response.ok) {
                throw new Error(responseData.message || 'Failed to register coach')
            }
            context.commit('addCoach', {
                id: userId,
                ...data
            })
        }
    }
}