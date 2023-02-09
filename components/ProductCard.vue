<template>
  <div class="">

    <div class="p-2">
      <nuxt-link :to="{ name: 'product-id', params: { id: product.id } }">
        <div class="grid justify-items-center bg-white rounded-sm">
          <img 
            :src="product.preview_image"
            onerror="this.src='../../noimage-235-177.png'"
            :alt="product.name"
            loading=lazy
            width="235"
            height="177"
            class="p-4" 
          />
        </div>

        <p v-if="product.only_price === 0" class="text-sm text-right font-medium text-gray-900 dark:text-gray-200 min-h-[28px]">стоимость по запросу</p>
        <p v-else class="text-lg text-right font-medium text-gray-900 dark:text-gray-200">{{ product.only_price.toLocaleString() }} руб.</p>
        
        <p v-if="product.status === 'stock'" class="text-sm text-right font-medium text-gray-900 dark:text-gray-200">в наличии</p>
        <p v-if="product.status === 'order'" class="text-sm text-right font-medium text-gray-900 dark:text-gray-200">под заказ</p>
        <p class="mt-2 h-20 text-sm text-gray-700 dark:text-gray-200 text-center">{{ product.name }}</p>
      </nuxt-link>

      <div class="flex items-center justify-end gap-2">
        
        <div>
          <CompBtn cls="px-3 py-1.5" :product="product" />
        </div>

        <div>
          <LikeBtn cls="px-3 py-1.5" :product="product" />
        </div>

        <button @click="requestPriceProduct(product)" v-if="product.only_price === 0" class="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-400 to-blue-800 group-hover:from-blue-400 group-hover:to-blue-800 hover:text-gray-100 dark:text-gray-300 hover:dark:text-gray-100 focus:ring-1 focus:outline-none focus:ring-cyan-200 dark:focus:ring-blue-700">
          <span class="w-full relative px-3 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Запросить
          </span>
        </button>

        <CartBtn v-else cls="px-6 py-1.5" :product="product" />
        
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
    name: 'ProductSection',
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
        dataset: true,
      }
    },
    methods: {
      ...mapActions({
        showCartModal: 'showCartModal',
        addProductToCart: 'modules/cart/addProductToCart',
        requestPriceProduct: 'modules/cart/requestPriceProduct'
      }),
      requestPrice(price) {
        console.log(price)
      },
      dissableShow() {
        localStorage.showSubscriebe = false
        this.closeSubscriebe()
      },
    }
  }
  </script>