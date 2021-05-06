const state = {
    showSidebar: false,
}

const mutations = {
    setShowSidebar: () => state.showSidebar = !state.showSidebar, 
}
const getters = {
    showSidebar: state => state.showSidebar,
}

const actions = {
    setShowSidebar: ({ commit }) => commit('setShowSidebar'),
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