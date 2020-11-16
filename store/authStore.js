export const state = () => ({
    login: false,
    info: {},
})

export const mutations = {
    setInfo (state, { info }) {
        state.login = true;
        state.info = info;
    }
}

