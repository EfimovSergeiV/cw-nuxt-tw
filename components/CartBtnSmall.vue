<template>
  <div class="">

    <transition name="fade">
      <div v-if="filterCart(product.id)">
        <button @click="delProductToCart(product)" class="">
          <div class=" text-sm text-gray-100 rounded-lg bg-blue-600 hover:bg-blue-700 border border-gray-300/50 dark:border-gray-500/50 transition-all duration-1000">
            <div class=" bg-gradient-to-br from-gray-100/20 to-gray-900/40 rounded-lg">
              <p class="text-white text-sm w-36 md:w-24 py-1.5">В корзине</p>
            </div>
          </div>
        </button>
      </div>
      <div v-else>
        <button @click="addProductToCart(product)" class="">
          <div class=" text-sm text-gray-100 rounded-lg bg-blue-600 hover:bg-blue-700 border border-gray-300/50 dark:border-gray-500/50 transition-all duration-1000">
            <div class=" bg-gradient-to-br from-gray-100/20 to-gray-900/40 rounded-lg">
              <p class="text-white text-sm w-36 md:w-24 py-1.5">Купить</p>
            </div>
          </div>
        </button>

      </div>
    </transition>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  props: {
    product: {
      type: Object,
      default: Object,
    },
    status: {
      type: Boolean,
      default: false,
    },
    title: {
      type: Boolean,
      default: false,
    },
    // variant: {
    //   type: Object,
    //   default: Object.create({ add: 'link', del: 'link' }),
    // },
  },
  computed: {
    ...mapGetters({
      cartID: 'modules/cart/cartID',
    }),
  },
  methods: {
    filterCart(id) {
      return this.cartID.filter((n) => n === id).length !== 0
    },
    ...mapActions({
      addProductToCart: 'modules/cart/addProductToCart',
      delProductToCart: 'modules/cart/delProductToCart',
    }),
  },
}
</script>