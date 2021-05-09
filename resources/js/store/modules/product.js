const state = {
    product: null,
}
const getters = {
    product: state => state.product
}
const mutations = {
    setProduct: (state, payload) => state.product = payload
}

const actions = {
    setProduct: ({
        commit
    }, payload) => commit('setProduct', payload),
}
export default {
    name: 'product',
    stateFactory: true,
    namespaced: true,
    state,
    mutations,
    getters,
    actions,
}
