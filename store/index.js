/* eslint-disable camelcase */

export const state = () => ({
  counter: 0,
  cartModal: false,
  shopModal: false,
})

export const getters = {
  getCounter(state) {
    return state.counter
  }
}

export const mutations = {
  increment(state) {
    state.counter++
  },
  showCartModal(state, mainbanner) {
    state.cartModal = !state.cartModal
  },
}

export const actions = {
  async fetchCounter({ state }) {
    // make request
    const res = { data: 10 };
    state.counter = res.data;
    return res.data;
  },
  showCartModal({ commit }) {
    commit('showCartModal')
  },
}