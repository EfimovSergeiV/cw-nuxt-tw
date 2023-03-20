<template>
  <div class="">
    <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">

      <div class="my-4 p-2 bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 shadow-sm">
        <p class="text-gray-700 dark:text-gray-300">Главный Cварщик рекомендует</p>
      </div>


      <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div v-for="product in recommends" :key="product.id" class="">
          
          <div class="bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 p-2">
            <div class="">

              <nuxt-link :to="{ name: 'product-id', params: { id: product.id }}">


                <div class="flex items-center gap-2">
                  <div class="bg-white p-1 min-w-[96px] w-24 h-24 rounded-md flex items-center justify-center">
                    <img 
                      :src="product.preview_image"
                      onerror="this.src='../../noimage-235-177.png'"
                      :alt="product.name"
                      loading=lazy
                      class=" rounded-sm"
                      width="160"
                      height="120"
                    />
                  </div>
                  <div class="grid grid-cols-1 h-24 w-full content-between">
                    <p class="text-xs text-center my-1">{{ product.name }}</p>
                    <p class=" text-xs text-right">{{ product.only_price.toLocaleString() }} руб</p>
                  </div>
                </div>





                <!-- <div class="bg-white h-full rounded-sm group">

                  <div class="relative h-full rounded-sm">
                    <div class="flex justify-center">
                      <img 
                        :src="product.preview_image"
                        onerror="this.src='../../noimage-235-177.png'"
                        :alt="product.name"
                        loading=lazy
                        width="160"
                        height="120"
                      />
                    </div>

                    <div class="absolute top-0 right-0">
                      <div class="flex items-center p-1 rounded-sm">
                        <p v-if="product.only_price === 0" class="text-gray-700 font-bold text-xs">По запросу</p>
                        <p v-else class="text-gray-700 font-bold text-xs">{{ product.only_price.toLocaleString() }} руб.</p>
                      </div>
                    </div>
                    <div class="absolute bottom-0 left-0 w-full">
                      <div class="flex items-center justify-center p-1 rounded-sm h-12">
                        <p class="text-gray-900 text-xs text-center">{{ product.name }}</p>
                      </div>
                    </div>
                  </div>
                </div>                     -->
              </nuxt-link>

              <div class="flex items-end justify-between gap-2 mt-4">

                <div class="flex md:grid md:grid-cols-1 gap-2">
                  <div class="flex items-center gap-2">
                    <CompBtn cls="px-3 py-1.5" :product="product" />
                    <p class="text-xs">Сравнить</p>
                  </div>
                  <!-- <div class="flex items-center gap-2">
                    <LikeBtn cls="px-3 py-1.5" :product="product" />
                    <p class="text-xs">В избранное</p>
                  </div> -->
                </div>

                <div class="flex gap-4 items-end">
                  <button @click="requestPriceProduct(product)" v-if="product.only_price === 0" class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-400 to-blue-800 group-hover:from-blue-400 group-hover:to-blue-800 hover:text-gray-100 dark:text-gray-300 hover:dark:text-gray-100 focus:ring-1 focus:outline-none focus:ring-cyan-200 dark:focus:ring-blue-700">
                    <span class="relative w-[85px] py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-xs">
                        Запросить
                    </span>
                  </button>
                  <CartBtn v-else cls="px-3 py-1.5" :product="product" />
                </div>

              </div>

            </div>

          </div>


        </div>
      </div>

    </div>
  </div>
</template>
  
<script>
import { mapActions } from 'vuex';
import CartBtn from '../CartBtn.vue';
import CompBtn from '../CompBtn.vue';


  export default {
    name: 'RecommendSection',
    components: {
      CartBtn,
      CompBtn,
  },
  props: {
    recommends: {
      type: Array,
      default: Array,
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