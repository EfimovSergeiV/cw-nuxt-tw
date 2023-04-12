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
  shop: null, /// Определённый или выбранный магазин ( сделать глобальным )
  shops: null,
  region: null,
  cookies: true,
  shopModal: false,
  toasts: [],
  contactForm: false,
  adress: null,
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
    // console.log('shfdsjhf', data )
    state.client[data.key] = data.value
  },
  addToast(state, text) {
    state.toasts.push({ id: state.toasts.length + 1, text: text})
  },
  clearToast(state) {
    state.toasts.shift()
  },
  hideToast(state, id) {
    const toast = state.toasts.findIndex((item) => item.id === id)
    state.toasts.splice(toast, 1)
  },
  displayForm(state, id) {
    state[id] = !state[id]
    console.log("Display form", id)
  },
  selectShop(state, shop) {
    state.shop = shop
  },
  adressFromCoordinates(state, adress) {
    state.adress = adress
    state.region = adress.at(-1)

    state.shops.forEach((element) => {
      if (element.city.toLowerCase() === adress.at(-1).toLowerCase()) {
        state.shop = element
      }
    })

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

  sendCoordinates({ commit }, location) {
    this.$axios.$post('coordinates/', location ).then((resp) => {
      commit('adressFromCoordinates', resp)
    }).catch(() => {})
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
    commit('clientData', { key: event.target.id, value: event.target.value })
  },
  addToast({ commit }, text ) {
    /// Сделать присваивание ID
    commit('addToast', text)

    setTimeout(() => {
      commit('clearToast')
    }, "5000" )

  },
  hideToast({ commit }, toast ) {
    commit('hideToast', toast)
  },
  displayForm({ commit }, id ) {
    commit('displayForm', id)
  },
  selectShop({ commit }, shop ) {
    commit('selectShop', shop)
  }
}