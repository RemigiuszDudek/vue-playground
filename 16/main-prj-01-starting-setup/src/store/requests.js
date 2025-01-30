export default {
    namespaced: true,
    state() {
        return {
            // {
            //     id: 'r1' | undefined,
            //     coachId: '1',
            //     email: 'a@b.com',
            //     message: 'some message',
            // }
            requests: []
        }
    },
    getters: {
        getRequests(state) {
            console.log('getRequests', state.requests)
            return state.requests
        }
    },
    mutations: {
        addRequest(state, req) {
            state.requests.push(req)
        },
        setRequests(state, reqs) {
            state.requests = reqs
        }
    },
    actions: {
        loadRequests({ commit }) {
            return fetch('https://coach-finder-70a20-default-rtdb.europe-west1.firebasedatabase.app/requests.json')
                .then(resp => resp.json())
                .then(reqs => {
                    commit('setRequests', Object.keys(reqs).map(key => ({
                        id: key,
                        ...reqs[key]
                    })))
                })
        },
        addRequest({ commit }, req) {
            return fetch('https://coach-finder-70a20-default-rtdb.europe-west1.firebasedatabase.app/requests.json', {
                method: 'POST',
                body: JSON.stringify(req)
            })
                .then(resp => resp.json())
                .then(() => commit('addRequest', req))
        }
    }
}