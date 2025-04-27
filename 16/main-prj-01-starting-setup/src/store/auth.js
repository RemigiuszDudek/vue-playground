export default {
    state() {
        return {
            userId: null,
            email: null,
            token: null,
            tokenExpiration: null,
            refreshToken: null,
        }
    },
    getters: {
        userId(state) {
            return state.userId
        },
        token(state) {
            return state.token
        }
    },
    mutations: {
        setAuth(state, data) {
            state.userId = data.userId
            state.email = data.email
            state.token = data.token
            state.tokenExpiration = data.tokenExpiration
            state.refreshToken = data.refreshToken
        }
    },
    actions: {
        fetch({commit}, payload) {
            return fetch(payload.url, {
                method: 'POST',
                body: JSON.stringify({
                    email: payload.email,
                    password: payload.password,
                    returnSecureToken: true
                })
            })
                .then(resp => {
                    if (!resp.ok) {
                        throw new Error(resp.statusMessage || 'Failed to authenticate')
                    }
                    return resp.json()
                })
                .then(data => commit('setAuth', {
                    userId: data.localId,
                    email: data.email,
                    token: data.idToken,
                    tokenExpiration: data.expiresIn,
                    refreshToken: data.refreshToken,
                }))
        },
        login({dispatch}, payload) {
            return dispatch('fetch', {
                url: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBFN4DTBfubf3arK_gKCH7RSjLSy1q1Yhw',
                ...payload
            })
        },
        signup({dispatch}, payload) {
            return dispatch('fetch', {
                url: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBFN4DTBfubf3arK_gKCH7RSjLSy1q1Yhw',
                ...payload
            })
        }
    }
}