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
          <button @click="requestPriceProduct(product)" v-if="product.only_price === 0" class="">
            <div class=" text-sm text-gray-100 rounded-lg bg-blue-600 hover:bg-blue-700 border border-gray-300/50 dark:border-gray-500/50 transition-all duration-1000">
              <div class=" bg-gradient-to-br from-gray-100/20 to-gray-900/40 rounded-lg">
                <p class="text-white text-sm w-36 md:w-24 py-1.5">Запросить</p>
              </div>
            </div>
          </button>
          <CartBtnSmall v-else cls="px-4 py-2" :product="product" />
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
import CartBtnSmall from './CartBtnSmall.vue';
import LikeBtn from './LikeBtn.vue';
import CompBtn from './CompBtn.vue';

  export default {
    name: 'ProductSmall',
    components: {
      CartBtnSmall,
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