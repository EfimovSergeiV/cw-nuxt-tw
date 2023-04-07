<template>

    <div id="product-small" class="grid grid-cols-1 content-between bg-gray-100 rounded-md border border-gray-200 hover:border-gray-300 dark:border-gray-600 dark:hover:border-gray-500 dark:bg-gray-700 transition-all shadow-md p-2 h-36">
      <nuxt-link :to="{ name: 'product-id', params: { id: product.id } }">
        <div class="flex items-center justify-between gap-2">
          <div class="">
            <p class="text-xs">{{ product.name.slice(0,80) }}</p>
          </div>
          <div class="">
            <div class="flex items-center justify-center bg-white w-[80px] h-[60px] rounded-md">
              <img :src="product.preview_image" width="70" />
            </div>
          </div>
        </div>                  
      </nuxt-link>
      <div class="flex items-center gap-4">
        <div class="">
          <button @click="requestPriceProduct(product)" v-if="product.only_price === 0" class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-400 to-blue-800 group-hover:from-blue-400 group-hover:to-blue-800 hover:text-gray-100 dark:text-gray-300 hover:dark:text-gray-100 focus:ring-1 focus:outline-none focus:ring-cyan-200 dark:focus:ring-blue-700">
            <span class="w-full text-xs relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Запросить
            </span>
          </button>
          <CartBtn v-else cls="px-4 py-2" :product="product" />
        </div>
        <div class="">
          <p v-if="product.only_price === 0" class="text-xs text-right dark:text-gray-300">Стоим. по запросу</p>
          <div v-else class="flex gap-1 justify-end">
            <p class="text-base font-bold dark:text-gray-300">{{ product.only_price.toLocaleString() }}</p>
            <p class="text-xs font-bold dark:text-gray-300">руб.</p>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
import { mapActions } from 'vuex';
import CartBtn from './CartBtn.vue';
import LikeBtn from './LikeBtn.vue';
import CompBtn from './CompBtn.vue';

  export default {
    name: 'ProductSmall',
    components: {
      CartBtn,
      LikeBtn,
      CompBtn,
    },
    props: {
      product: {
        type: Object,
        default: Object,
      },
    },
    data() {
      return {

      }
    },
    methods: {
      ...mapActions({
        requestPriceProduct: 'modules/cart/requestPriceProduct'
      }),
    }
  }
</script>