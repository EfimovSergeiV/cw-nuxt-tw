<template>

  <div class="p-2">
    <div class="grid justify-items-center bg-white rounded-sm">
      <img 
        :src="product.preview_image"
        onerror="this.src='../../noimage-235-177.jpg'"
        :alt="product.imageAlt"
        loading=lazy
        width="235"
        height="177"
        class="p-4" 
      />
    </div>

    <nuxt-link :to="{ name: 'product-id', params: { id: product.id } }">
      <p class="text-lg text-right font-medium text-gray-900 dark:text-gray-200">{{ product.prod_price[0].price.toLocaleString() }} руб.</p>
      <p class="text-sm text-right font-medium text-gray-900 dark:text-gray-200">В наличии</p>
      <p class="mt-2 h-20 text-sm text-gray-700 dark:text-gray-200 text-center">{{ product.name }}</p>
    </nuxt-link>

    <div class="flex justify-center gap-2">
      <div>
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-400 to-blue-800 group-hover:from-blue-400 group-hover:to-blue-800 hover:text-gray-100 dark:text-gray-300 hover:dark:text-gray-100 focus:ring-1 focus:outline-none focus:ring-cyan-200 dark:focus:ring-blue-700">
          <span class="relative px-3 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 mdi mdi-equalizer-outline">
          </span>
        </button>          
      </div>
      <div>
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-400 to-blue-800 group-hover:from-blue-400 group-hover:to-blue-800 hover:text-gray-100 dark:text-gray-300 hover:dark:text-gray-100 focus:ring-1 focus:outline-none focus:ring-cyan-200 dark:focus:ring-blue-700">
          <span class="relative px-3 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 mdi mdi-heart-multiple-outline">
          </span>
        </button>          
      </div>
      <button @click="showCartModal()" class="w-full relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-400 to-blue-800 group-hover:from-blue-400 group-hover:to-blue-800 hover:text-gray-100 dark:text-gray-300 hover:dark:text-gray-100 focus:ring-1 focus:outline-none focus:ring-cyan-200 dark:focus:ring-blue-700">
        <span class="w-full relative px-3 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            В корзину
        </span>
      </button>          
    </div>
  </div>

</template>

<script>
import { mapActions } from 'vuex';
import CartModal from './CartModal.vue'

  export default {
    name: 'ProductSection',
    components: {
      CartModal
    },
    props: {
      product: {
        type: Object,
        default: Object,
      },
    },
    data() {
      return {
        dataset: true,
      }
    },
    methods: {
      ...mapActions({
        showCartModal: 'showCartModal',
        // delProductToCart: 'modules/cart/delProductToCart',
        // addToComparison: 'modules/comparison/addToComparison',
        // delToComparison: 'modules/comparison/delToComparison',
        // addProductToFav: 'modules/favorites/addProductToFav',
        // delProductToFav: 'modules/favorites/delProductToFav',
      }),
      dissableShow() {
        localStorage.showSubscriebe = false
        this.closeSubscriebe()
      },
    }
  }
  </script>