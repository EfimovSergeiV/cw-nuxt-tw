/* eslint-disable camelcase */

export const state = () => ({
  client: {
    name: null
  },
  shops: null,
  region: null,
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
  changeRegion(state, region) {
    state.region = region
  },
  showCookiesModal(state) {
    state.cookies = !state.cookies
    console.log(state.cookies)
  },
  shopsData(state, shops) {
    state.shops = shops
  },
  changeLocation(state, location) {
    const translated = {
      Pskov: "Псков",
      Moscow: "Москва"
    }
    state.region = translated[location.city]
  },
  clientData(state, client) {
    state.client = client
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
    const location = await this.$axios.$get('location/')
    // if (this.state.auth.loggedIn) {
    //   const likeserver = await this.$axios.$get('u/likes/')
    //   commit('addLikesProducts', likeserver)
    // }
    commit('shopsData', shops)
    commit('changeLocation', location)
  },

  showShopsModal({ commit }) {
    commit('showShopsModal')
  },
  changeRegion({ commit }, region) {
    commit('changeRegion', region)
  },
  showCookiesModal({ commit }) {
    commit('showCookiesModal')
  },
  clientData({ commit }, client ) {
    commit('clientData', client)
  }
}