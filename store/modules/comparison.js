/* eslint-disable camelcase */
export const state = () => ({
  products: [],
  showCompModal: true,
})

export const getters = {
  compID: (state) => {
    return state.products.map(({ id }) => {
      return id
    })
  },
}

export const actions = {
  actionShowCompModal({commit}) {
    commit('mutationShowCompModal')
  },
  clearAllCompare({commit}) {
    commit('mutationClearAllCompare')
  },
  addToComparison({ state, commit }, product) {
    const cartProduct = state.products.find((item) => item.id === product.id)
    if (!cartProduct) {
      commit('addToComparison', {
        id: product.id,
        vcode: product.vcode,
        description: product.description,
        name: product.name,
        rating: product.rating,
        only_price: product.only_price,
        status: product.status,
        preview_image: product.preview_image,
        propstrmodel: product.propstrmodel,
        brand: product.brand,
        category: product.category,
      })
    } else {
      commit('adsdToComparison', cartProduct)
    }
  },

  delToComparison({ commit }, product) {
    commit('delToComparison', { id: product.id })
  },
}

export const mutations = {
  addToComparison(
    state,
    {
      id,
      vcode,
      description,
      name,
      rating,
      only_price,
      status,
      preview_image,
      propstrmodel,
      brand,
      category,
    }
  ) {
    state.showCompModal = true
    state.products.push({
      id,
      vcode,
      description,
      name,
      rating,
      only_price,
      status,
      preview_image,
      propstrmodel,
      brand,
      category,
      quantity: 1,
    })
  },

  mutationShowCompModal( state ) {
    // console.log("sgjhfdghsjgdf")
    state.showCompModal = false
    // state.showCompModal = !showCompModal
  },
  mutationClearAllCompare(state) {
    state.products = []
  },
  delToComparison(state, { id }) {
    const cartProduct = state.products.findIndex((item) => item.id === id)
    state.products.splice(cartProduct, 1)
  },

  decProductQuantity(state, { id }) {
    const cartProduct = state.products.find((product) => product.id === id)
    cartProduct.quantity--
  },
}
