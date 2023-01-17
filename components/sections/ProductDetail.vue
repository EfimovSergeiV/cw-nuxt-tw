<template>
  <section id="product-detail">
    <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">
      <!-- <div class="bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 shadow-md my-4">
        <div class="p-2">
          <h1>{{ product.name }}</h1>
        </div>
      </div> -->

      <div class="bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 shadow-md">
        <div class="px-2 pb-8">

          <div class="flex justify-end my-2">
            <p class="text-sm">Артикул: {{ product.vcode }}</p>
          </div>

          <div class="flex flex-col md:flex-row gap-4">
            <div class="md:basis-1/4">
              <div class="cursor-pointer">
                <div class="bg-white flex items-center justify-center rounded-sm">
                  <img
                    @click="largeImage = true"
                    :src="product.preview_image" 
                    :alt="product.name" 
                    width="235" 
                    height="177"
                    onerror="this.src='../../noimage-235-177.jpg'"
                    class="rounded-sm cursor-zoom-in"
                  />
                </div>
              </div>              
            </div>
            <div class="md:basis-3/4">

              <div class="flex justify-between items-end h-full">

                <div class="">
                  <!-- Слева от картинки, можно что нибудь добывить -->
                </div>
                
                <div class="">
                  <div class="">
                    <div class="">
                      <p v-if="product.only_price === 0" class="text-base text-right px-2 font-bold dark:text-gray-300">Стоимось по запросу</p>
                      <div v-else class="flex gap-1 justify-end">
                        <p class="text-4xl font-bold dark:text-gray-300">{{ product.only_price.toLocaleString() }}</p>
                        <p class="text-base font-bold dark:text-gray-300 mx-2">руб.</p>                    
                      </div>

                    </div>
                    <div class="flex justify-end my-2 mx-2">
                      <p v-if="product.status === 'stock'" class="text-base">в наличии</p>
                      <p v-if="product.status === 'order'" class="text-base">под заказ</p>
                    </div>
                    
                    <div class="flex gap-2 justify-end">

                      <CompBtn cls="px-5 py-2.5" :product="product" />
                      <LikeBtn cls="px-5 py-2.5" :product="product"/>

                      <button @click="requestPriceProduct(product)" v-if="product.only_price === 0" class="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-400 to-blue-800 group-hover:from-blue-400 group-hover:to-blue-800 hover:text-gray-100 dark:text-gray-300 hover:dark:text-gray-100 focus:ring-1 focus:outline-none focus:ring-cyan-200 dark:focus:ring-blue-700">
                        <span class="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Запросить
                        </span>
                      </button>

                      <CartBtn v-else cls="px-5 py-2.5" :product="product" />
                      <!-- <CartBtn cls=" px-5 py-2.5" :product="product" /> -->

                    </div>
                  </div>
                </div>


              </div>




            </div>
          </div>





          <div class="my-8">
            <div class="">
              <p class="text-sm">{{ product.description }}</p>
            </div>
            
            <!-- <div class="fflex flex-col md:flex-row md:justify-between gap-8 hidden">
              
              <div class="w-96">
                <div class="flex items-center mb-3">
                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First звёзд</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second звёзд</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third звёзд</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth звёзд</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth звёзд</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <p class="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">{{ product.rating }} из 5</p>
                </div>
                <div class="my-2">
                  <p class="text-base">Дополнительные материалы:</p>
                </div>
                <div class="grid grid-cols-2">
                  <nuxt-link to="#" class="text-sm font-medium text-gray-700 dark:text-gray-300">Изображения</nuxt-link>
                  <a :href="link.url" class="text-sm font-medium text-gray-700 dark:text-gray-300" target="_blank" v-for="link in product.prod_link" :key="link.id">{{ link.name }}</a>
                </div>
              </div>

              
              <div class="">
                <div class="">
                  <p v-if="product.only_price === 0" class="text-base text-right px-2 font-bold dark:text-gray-300">Стоимось по запросу</p>
                  <div v-else class="flex gap-1 justify-end">
                    <p class="text-4xl font-bold dark:text-gray-300">{{ product.only_price.toLocaleString() }}</p>
                    <p class="text-base font-bold dark:text-gray-300 mx-2">руб.</p>                    
                  </div>

                </div>
                <div class="flex justify-end my-2 mx-2">
                  <p v-if="product.status === 'stock'" class="text-base">в наличии</p>
                  <p v-if="product.status === 'order'" class="text-base">под заказ</p>
                </div>
                
                <div class="flex gap-2 justify-end">

                  <CompBtn cls="px-5 py-2.5" :product="product" />
                  <LikeBtn cls="px-5 py-2.5" :product="product"/>
                  <CartBtn cls=" px-5 py-2.5" :product="product" />

                </div>
              </div>
            </div> -->
          </div>




          <p class="text-base my-2">Характеристики:</p>
          <div class="columns-1 lg:columns-2 gap-8">
            <div v-for="param in product.propstrmodel" :key="param.id" class="border-b border-gray-300 hover:border-gray-400 dark:border-gray-700 dark:hover:border-gray-600">
              <div class="flex justify-between">
                <div class=""><small>{{ param.name }} :</small></div>
                <div class="text-right"><small>{{ param.value }}</small></div>                
              </div>
            </div>
          </div>

        </div>
      </div>


      <!-- <div class="bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 shadow-md my-4">
        <div class="p-2">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 items-end">
            <div class="">
              <div class="flex items-center mb-3">
                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>одна звезда</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>две звезды</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>три звезды</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>четыре звезды</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>пять звёзд</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <p class="ml-2 text-sm font-medium text-gray-900 dark:text-white">{{ product.rating }} из 5</p>
              </div>
              <p class="text-sm font-medium text-gray-700 dark:text-gray-300">1,745 проголосавало</p>
              <div class="flex items-center mt-4">
                  <span class="text-sm font-medium text-gray-700 dark:text-gray-300 w-24">5 звёзд</span>
                  <div class="mx-4 w-full md:w-2/4 h-5 bg-gray-200 rounded dark:bg-gray-700">
                      <div class="h-5 bg-yellow-400 rounded" style="width: 70%"></div>
                  </div>
                  <span class="text-sm font-medium text-gray-700 dark:text-gray-300 w-14">70%</span>
              </div>
              <div class="flex items-center mt-4">
                  <span class="text-sm font-medium text-gray-700 dark:text-gray-300 w-24">4 звёзды</span>
                  <div class="mx-4 w-full md:w-2/4 h-5 bg-gray-200 rounded dark:bg-gray-700">
                      <div class="h-5 bg-yellow-400 rounded" style="width: 17%"></div>
                  </div>
                  <span class="text-sm font-medium text-gray-700 dark:text-gray-300 w-14">17%</span>
              </div>
              <div class="flex items-center mt-4">
                  <span class="text-sm font-medium text-gray-700 dark:text-gray-300 w-24">3 звёзды</span>
                  <div class="mx-4 w-full md:w-2/4 h-5 bg-gray-200 rounded dark:bg-gray-700">
                      <div class="h-5 bg-yellow-400 rounded" style="width: 8%"></div>
                  </div>
                  <span class="text-sm font-medium text-gray-700 dark:text-gray-300 w-14">8%</span>
              </div>
              <div class="flex items-center mt-4">
                  <span class="text-sm font-medium text-gray-700 dark:text-gray-300 w-24">2 звёзды</span>
                  <div class="mx-4 w-full md:w-2/4 h-5 bg-gray-200 rounded dark:bg-gray-700">
                      <div class="h-5 bg-yellow-400 rounded" style="width: 4%"></div>
                  </div>
                  <span class="text-sm font-medium text-gray-700 dark:text-gray-300 w-14">4%</span>
              </div>
              <div class="flex items-center mt-4">
                  <span class="text-sm font-medium text-gray-700 dark:text-gray-300 w-24">1 звёзда</span>
                  <div class="mx-4 w-full md:w-2/4 h-5 bg-gray-200 rounded dark:bg-gray-700">
                      <div class="h-5 bg-yellow-400 rounded" style="width: 1%"></div>
                  </div>
                  <span class="text-sm font-medium text-gray-700 dark:text-gray-300 w-14">1%</span>
              </div>
            </div>
            <div class="">
              <form>
                <div class="w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                    <div class="py-2 px-4 bg-white rounded-t-lg dark:bg-gray-800">
                        <label for="comment" class="sr-only">Ваш комментарий</label>
                        <textarea id="comment" rows="4" class="px-0 w-full text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Напишите что-нибудь..." required></textarea>
                    </div>
                    <div class="flex justify-end items-center py-2 px-3 border-t dark:border-gray-600">
                      <button type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                        Оставить комментарий
                      </button>
                        <div class="flex pl-0 space-x-1 sm:pl-2">
                            <button type="button" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd"></path></svg>
                                <span class="sr-only">Attach file</span>
                            </button>
                            <button type="button" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
                                <span class="sr-only">Set location</span>
                            </button>
                            <button type="button" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path></svg>
                                <span class="sr-only">Upload image</span>
                            </button>
                        </div>
                    </div>
                </div>
              </form>
            </div>
          </div>
          <div class="grid grid-cols-1 my-8">
            <p class="text-base text-center">Нет комментариев</p>
          </div>
        </div>
      </div> -->

      <!-- <div class="text-xs mt-6">
        <p>{{ product }}</p>
      </div> -->
    </div>


    <transition name="fade">
      <div v-if="largeImage" class="fixed inset-0 overflow-y-hidden overscroll-y-none z-50 my-10">
        <div class="flex min-h-full justify-center text-center items-center">
          <div class="relative rounded-sm px-10">
            <div class="overflow-y-auto h-screen">
              <div class="flex min-h-full justify-center text-center items-center">
                <div class="bg-white p-2 rounded-sm">
                  <div class="w-[380px] h-[300] md:w-[640px] md:h-[480px]">
                    <hooper
                      :wheel-control="false"
                      :infinite-scroll="true"
                      :play-speed="12000"
                      :transition="1200"
                      :auto-play="true"
                      style="height: 100%"
                    >
                      <slide v-for="image in product.prod_img" :key="image.id" class="rounded-sm">
                        <div @click="largeImage = false" class="">
                          <img :src="image.image" :alt="image.image" class="rounded-sm cursor-zoom-out" fluid/>
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
    },
    props: {
      product: {
        type: Object,
        default: Object,
      },
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