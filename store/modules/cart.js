/* eslint-disable camelcase */

export const state = () => ({
    products: [],           /// Товары в корзине
    orders: [],             /// Заказы клиента
    requestPrice: {},       /// Товары для запроса стоимости
    // counter: 0,
    cartModal: false,       /// Окно перейти в корзину при покупке
    requestModal: false,    /// Окно запроса стоимости
    stateCartModal: false,  /// Чекбокс отображения модальки корзины
  })
  
  export const getters = {
    // getCounter(state) {
    //   return state.counter
    // }
    //   cartTotalPrice: (state) => {
    //     let result = 0
    //     state.products.forEach((el) => (result += el.price * el.quantity))
    //     return result
    //   },
    cartID: (state) => {
      return state.products.map(({ id }) => {
        return id
      })
    },
  }
  
  export const mutations = {
    mutationStateCartModal(state) {
      state.stateCartModal = !state.stateCartModal
    },
    increment(state) {
      state.counter++
    },
    showCartModal(state) {
        state.cartModal = !state.cartModal
      },
    addProductToCart(
      state,
      { id, vcode, name, rating, only_price, status, preview_image, propstrmodel }
    ) {
      state.cartModal = !state.cartModal
      state.products.push({
        id,
        vcode,
        name,
        rating,
        only_price,
        status,
        preview_image,
        propstrmodel,
        quantity: 1,
      })
    },
    delProductFromCart(state, { id }) {
      const cartProduct = state.products.findIndex((item) => item.id === id)
      state.products.splice(cartProduct, 1)
    },
    incItemQuantity(state, { id }) {
      const cartProduct = state.products.find((item) => item.id === id)
      cartProduct.quantity++
    },

    delProductFromCart(state, { id }) {
      const cartProduct = state.products.findIndex((item) => item.id === id)
      state.products.splice(cartProduct, 1)
    },

    cleanCart(state) {
      state.products = []
    },

    decProductQuantity(state, { id }) {
      const cartProduct = state.products.find((product) => product.id === id)
      if (cartProduct.quantity > 1) {
        cartProduct.quantity--
      }
    },

    //// Запрос стоимости товара
    requestPriceProduct(state, { product }) {
      state.requestPrice = product
      state.requestModal = true
    },
    hideRequestModal(state) {
      state.requestPrice = {}
      state.requestModal = false
    },
    /// Сохраняем заказы в истории
    saveOrder(state, order) {
      state.orders.push(order)
    },
    /// Применяем скидку
    appDiskount(state, promo) {
      const diskount = promo.discount / 100
      for ( let pk in state.products ) {
        if ( promo.prods.includes(String(state.products[pk].id)) ) {
          let d_summ = Math.floor(state.products[pk].only_price * diskount)
          state.products[pk].only_price = state.products[pk].only_price - d_summ
        }
      }
    },
  }
  
  export const actions = {
    actionStateCartModal({ commit }) {
      commit('mutationStateCartModal')
    },
    showCartModal({ commit }) {
      commit('showCartModal')
    },
    addProductToCart({ state, commit }, product) {
      const cartProduct = state.products.find((item) => item.id === product.id)
      if (!cartProduct) {
        commit('addProductToCart', {
          id: product.id,
          vcode: product.vcode,
          name: product.name,
          rating: product.rating,
          only_price: product.only_price,
          status: product.status,
          preview_image: product.preview_image,
          propstrmodel: product.propstrmodel,
        })
      } else {
        commit('delProductFromCart', cartProduct)
      }
    },
    delProductToCart({ commit }, product) {
      commit('delProductFromCart', { id: product.id })
    },
    incProductToCart({ commit }, product) {
      commit('incItemQuantity', { id: product.id })
    },
    decProductToCart({ commit }, product) {
      commit('decProductQuantity', { id: product.id })
    },
    cleanCart({ commit }) {
      commit('cleanCart')
    },

    /// Запрос стоимости продукта
    requestPriceProduct({ commit }, product) {
      commit('requestPriceProduct', { product } )
    },
    hideRequestModal({ commit }) {
      commit('hideRequestModal')
    },
    /// Сохраняем заказы в истории
    saveOrder({ commit }, order) {
      commit('saveOrder', order)
    },
    addDiskount( { commit }, promo ) {
      commit('appDiskount', promo)
    },
  }
