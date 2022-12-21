/* eslint-disable camelcase */

export const state = () => ({
  client: {
    person: null,
    phone: null,
    email: null,
    adress: null,
    comment: null,
    company: null,
    legaladress: null,
    inn: null,
    kpp: null,
    okpo: null,
    bankname: null,
    currentacc: null,
    corresponding: null,
    bic: null,
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


  clientData(state, data) {
    console.log('shfdsjhf', data )
    state.client[data.key] = data.value
  },
  clientPerson(state, person) {
    console.log('Work mutation', person)
    state.client.person = person
  },
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
  clientPerson({ commit }, event ) {
    console.log('im work', event.target.id)
    commit('clientData', { key: event.target.id, value: event.target.value })
  }
}