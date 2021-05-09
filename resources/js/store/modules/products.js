const state = {
    product: null,
    productCollection: null,
}
const getters = {
    product: state => state.product,
    productCollection: state => state.productCollection,
}
const mutations = {
    setProduct: payload => state.product = payload,
    setProductCollection: payload => state.productCollection = payload,
}

const actions = {
    setProduct: ({
        commit
    }, payload) => commit('setProduct', payload),
    setProductCollection: ({
        commit
    }, payload) => commit('setProductCollection', payload),
}
export default {
    name: 'sidebar',
    stateFactory: true,
    namespaced: true,
    state,
    mutations,
    getters,
    actions,
}
