/* eslint-disable camelcase */

export const state = () => ({
  shops: null,
  cookies: true,
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

  showShopsModal(state, mainbanner) {
    state.shopModal = !state.shopModal
  },
  showCookiesModal(state) {
    state.cookies = !state.cookies
    console.log(state.cookies)
  },
  shopsData(state, shops) {
    state.shops = shops
  }
}

export const actions = {
  // async fetchCounter({ state }) {
  //   const res = { data: 10 };
  //   state.counter = res.data;
  //   return res.data;
  // },
  async nuxtServerInit({ commit, dispatch }) {
    await dispatch('storeDispatchFunc')
  },
  async storeDispatchFunc({ commit }) {
    const shops = await this.$axios.$get('c/shops/')
    // if (this.state.auth.loggedIn) {
    //   const likeserver = await this.$axios.$get('u/likes/')
    //   commit('addLikesProducts', likeserver)
    // }
    commit('shopsData', shops)
  },

  showShopsModal({ commit }) {
    commit('showShopsModal')
  },
  showCookiesModal({ commit }) {
    commit('showCookiesModal')
  },
}