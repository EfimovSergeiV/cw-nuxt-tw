<template>
  <div class="bg-white dark:bg-gray-800 border border-gray-200 hover:border-gray-300 dark:border-gray-700 hover:dark:border-gray-600 transition-all rounded-sm px-2">
    <div class="py-2">

      <div class="flex items-center justify-end">
        <p class="text-xs">{{ product.vcode }}</p>
      </div>

      <nuxt-link :to="{ name: 'product-id', params: { id: product.id } }">
        <div class="flex md:grid md:grid-cols-1 gap-4">
          <div class="bg-white rounded-sm flex items-center justify-center">
            <div class="w-28 md:w-48 p-1">
              <img :src="product.preview_image" class="rounded-sm w-28 md:w-48"/>
            </div>          
          </div>
          <div class="flex items-center md:justify-center md:min-h-[80px]">
            <p class="text-xs xl:text-sm md:text-center">{{ product.name.slice(0, 120) }}</p>
          </div>
        </div>
      </nuxt-link>


      <div class="flex items-center justify-between my-2 md:min-h-[50px]">

        <div class="flex items-center">
          <div v-for="i in Math.ceil(product.rating)" :key="`${i}-yellow`" class="">
            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          </div>
          <div v-for="i in 5 - Math.ceil(product.rating)" :key="`${i}-gray`" class="">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          </div>
        </div>

        <div class="">
          <p v-if="product.only_price === 0" class="text-xs text-right font-medium text-gray-900 dark:text-gray-200">стоимость по запросу</p>
          <div v-else class="flex gap-2 items-start">
            <p class="text-base text-right font-medium text-gray-900 dark:text-gray-200">{{ product.only_price.toLocaleString() }}</p>
            <p class="text-xs">руб.</p>
          </div>

          <p v-if="product.status === 'stock'" class="text-xs text-right font-medium text-gray-900 dark:text-gray-200">в наличии</p>
          <p v-if="product.status === 'order'" class="text-xs text-right font-medium text-gray-900 dark:text-gray-200">под заказ</p>
        </div>
      </div>


      <div class="flex items-end justify-between gap-2">

        <div class="flex md:grid md:grid-cols-1 gap-2">
          <div class="flex items-center gap-2">
            <CompBtn cls="px-3 py-1.5" :product="product" />
            <p class="text-xs">Сравнить</p>
          </div>
          <div class="flex items-center gap-2">
            <LikeBtn cls="px-3 py-1.5" :product="product" />
            <p class="text-xs">В избранное</p>
          </div>
        </div>

        <div class="flex gap-4 items-end">
          <button @click="requestPriceProduct(product)" v-if="product.only_price === 0" class="">
            <div class=" text-sm text-gray-100 rounded-lg bg-blue-600 hover:bg-blue-700 border border-gray-300/50 dark:border-gray-500/50 transition-all duration-1000">
              <div class=" bg-gradient-to-br from-gray-100/20 to-gray-900/40 rounded-lg">
                <p class="text-white text-sm w-36 md:w-24 py-1.5">Запросить</p>
              </div>
            </div>
          </button>
          <CartBtnSmall v-else :product="product" />
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
    name: 'ProductSection',
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
