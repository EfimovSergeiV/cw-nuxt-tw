<template>
  <section id="product-detail" class="">
    <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">


      <div class="bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 shadow-md p-2 mb-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div class="">
            <div class="flex h-full bg-white rounded-md cursor-zoom-in" @click="largeImage = true">
              <div class="flex gap-4">


                <div class="px-3 py-3">
                  <div v-for="image in product.prod_img.slice(0, 4)" :key="image.id" class="w-[80px] h-[80px] rounded-md bg-white flex items-center justify-center">
                    <img :src="image.image" class="" />
                  </div>
                </div>


              </div>
              <div class="flex items-center justify-center w-full">
                <div class="bg-white p-4">
                  <img :src="product.preview_image" />
                </div>
              </div>
            </div>
          </div>

          <div class="">
            <div class="grid grid-cols-1 md:flex gap-2">
              <div class="flex items-center justify-end w-full md:order-last">
                <span class="flex gap-1 items-center text-xs">код товара:<p class="text-sm"> {{ product.vcode }}</p></span>
              </div>

              <div class="flex gap-2">
                <div class="border border-gray-200 hover:border-gray-300 dark:border-gray-600 dark:hover:border-gray-500 bg-gray-100 dark:bg-gray-700 rounded-md py-1 px-4 transition-all">
                  <div class="flex gap-2">
                    <CompBtn cls="px-5 py-2.5" :product="product" />
                    <p class="text-sm">Сравнить</p>
                  </div>
                </div>
                <div class="border border-gray-200 hover:border-gray-300 dark:border-gray-600 dark:hover:border-gray-500 bg-gray-100 dark:bg-gray-700 rounded-md py-1 px-4 transition-all">
                  <div class="flex items-center">
                    <div v-for="i in Math.ceil(product.rating)" :key="i" class="">
                      <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    </div>
                    <div v-for="i in 5 - Math.ceil(product.rating)" :key="i" class="">
                      <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    </div>
                  </div>
                </div>                
              </div>


            </div>



            <div class="border border-gray-200 hover:border-gray-300 dark:border-gray-600 dark:hover:border-gray-500 bg-gray-100 dark:bg-gray-700 transition-all px-4 py-4 rounded-md my-4 shadow-xl shadow-black/30">
              
              <div class="flex justify-between items-center my-2">
                <div class="">
                  <p v-if="product.only_price === 0" class="text-sm font-bold dark:text-gray-300">Стоимость по запросу</p>
                  <div v-else class="flex gap-1 justify-end">
                    <p class="text-3xl font-bold dark:text-gray-300">{{ product.only_price.toLocaleString() }}</p>
                    <p class="text-base font-bold dark:text-gray-300 mx-2">руб.</p>
                  </div>
                </div>
                <div class="grid grid-cols-1 gap-4">
                  <div class="flex items-center justify-end">
                    <button @click="requestPriceProduct(product)" v-if="product.only_price === 0" class="">
                      <div class=" text-sm text-gray-100 rounded-lg bg-blue-600 hover:bg-blue-700 border border-gray-300/50 dark:border-gray-500/50 transition-all duration-1000">
                        <div class=" bg-gradient-to-br from-gray-100/20 to-gray-900/40 rounded-lg">
                          <p class="text-white text-base w-32 md:w-52 py-2.5">Запросить</p>
                        </div>
                      </div>
                    </button>

                    <CartBtn v-else :product="product" />                    
                  </div>
                </div>
              </div>

              <div class="flex justify-between items-center my-2">
                <div class="flex justify-end my-2">
                  <p v-if="product.status === 'stock'" class="text-sm">в наличии</p>
                  <p v-if="product.status === 'order'" class="text-sm">под заказ</p>
                </div>
                <div class="flex items-center justify-end">
                  <div class="flex gap-2">
                    <LikeBtn cls="px-5 py-2.5" :product="product"/>
                    <p class="text-sm">В избранное</p>
                  </div>
                </div>
              </div>
            </div>



            <div class="my-2">
              <p v-if="analogue.length > 0" class="text-sm">Аналоги</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 md:h-36">
              <div v-for="prod_analogue in analogue" :key="prod_analogue.id" class="">
                <ProductSmall :product="prod_analogue" />
              </div>
            </div>

          </div>
        </div>
      </div>
      <div v-if="related.length > 0" class="pb-4">
        <div class="bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 shadow-md p-2">
          <p class="my-2">Сопутствующие товары</p>
          <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
            <div v-for="prod_related in related" :key="prod_related.id" class="">
              <ProductSmall :product="prod_related" />
            </div>
          </div>
        </div>
      </div>
      <div class="">
        <div class="">
          <div class="grid grid-cols-1 md:flex gap-4 ">
            <div class="md:w-[400px] bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 shadow-md p-2">
              <!-- <div class="">
                <p class="text-base">Обзоры:</p>
              </div> -->
              <div class="">
                <p class="text-base">Документы:</p>
                <div class="grid grid-cols-1 gap-2 py-2">
                  <div class="" v-for="file in product.prod_doc" :key="file.id">
                    <a class="text-sm mx-2" :href="file.doc" target="_blank">{{ file.name }}</a>
                  </div>
                  <div class="" v-for="doc in product.prod_link" :key="doc.id">
                    <a class="text-sm mx-2" :href="doc.url" target="_blank">{{ doc.name }}</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full">
              <div class="bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 shadow-md p-2 mb-4">
                <p class="text-base my-2">Характеристики:</p>
                <div class="columns-1 gap-8">
                  <div v-for="param in product.propstrmodel" :key="param.id" class="border-b border-gray-300 hover:border-gray-400 dark:border-gray-700 dark:hover:border-gray-600">
                    <div class="flex justify-between">
                      <div class=""><small>{{ param.name }}</small></div>
                      <div class="text-right"><small>{{ param.value }}</small></div>                
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 shadow-md p-2 mt-2">
                <p class="text-base my-2">Описание:</p>
                <p class="text-sm">{{ product.description }}</p> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <transition name="fade">
      <!-- fixed inset-0 overflow-y-hidden overscroll-y-none w-full h-full top-0 left-0 my-10 -->
      <div v-if="largeImage"  class="fixed w-full h-full overscroll-y-none top-0 left-0 bg-gray-500/50 backdrop-blur-sm z-40">
        <div class="flex min-h-full bg-gray-500/50 justify-center text-center items-center">
          <div class="relative rounded-sm">
            <div class="overflow-y-auto h-screen">
              <div class="flex min-h-full justify-center text-center items-center">
                <div class="bg-white p-2 rounded-sm border border-gray-200 dark:border-gray-600">
                  <div class="w-[380px] h-[300] md:w-[640px] md:h-[480px] relative">
                    <div class="flex justify-end items-center absolute z-50 right-0">
                      <p @click="largeImage = false" class="mdi mdi-24px mdi-close text-gray-700 hover:text-gray-900 cursor-pointer"></p>
                    </div>
                    <hooper
                      :wheel-control="false"
                      :infinite-scroll="true"
                      :play-speed="12000"
                      :auto-play="true"
                      style="height: 100%"
                    >
                      <slide v-for="image in product.prod_img" :key="image.id" class="rounded-sm">
                        <div @click="largeImage = false" class="flex h-full w-full items-center justify-center">
                          <img :src="image.image" :alt="image.image" class="rounded-sm cursor-zoom-out h-full w-full p-4" fluid/>
                        </div>
                      </slide>
                      <hooper-navigation slot="hooper-addons"></hooper-navigation>
                      <hooper-pagination slot="hooper-addons"></hooper-pagination>
                    </hooper>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>

  </section>
</template>

<script>
import {
  Hooper,
  Slide,
  Navigation as HooperNavigation,
  Pagination as HooperPagination,
} from 'hooper';
import { mapActions } from 'vuex';
import CartBtn from '../CartBtn.vue';
import LikeBtn from '../LikeBtn.vue';
import CompBtn from '../CompBtn.vue';
import ProductSmall from '../ProductSmall.vue';

  export default {
    name: 'ProductDetail',
      components: {
        Hooper,
        Slide,
        HooperNavigation,
        HooperPagination,
        CartBtn,
        LikeBtn,
        CompBtn,
        ProductSmall,
    },
    props: {
      product: {
        type: Object,
        default: Object,
      },
      related: {
        type: Array,
        default: null
      },
      analogue: {
        type: Array, 
        default: null
      }
    },
    data() {
      return {
        largeImage: false,
      }
    },
    methods: {
      ...mapActions({
        // showCartModal: 'showCartModal',
        // addProductToCart: 'modules/cart/addProductToCart',
        requestPriceProduct: 'modules/cart/requestPriceProduct'
      }),
    }
  }
</script>