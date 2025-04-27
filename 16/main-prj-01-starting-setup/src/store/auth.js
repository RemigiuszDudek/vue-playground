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
        login({commit}, payload) {
            return fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBFN4DTBfubf3arK_gKCH7RSjLSy1q1Yhw', {
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
        signup({commit}, payload) {
            return fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBFN4DTBfubf3arK_gKCH7RSjLSy1q1Yhw', {
                method: 'POST',
                body: JSON.stringify({
                    email: payload.email,
                    password: payload.password,
                    returnSecureToken: true
                })
            })
                .then(resp => {
                    if (!resp.ok) {
                        throw new Error(resp.statusMessage || 'Failed to create account')
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
        }
    }
}