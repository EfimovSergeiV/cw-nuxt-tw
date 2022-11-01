<template>
  <div class="">
    <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">

      <div class="my-4 p-2 bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 shadow-sm text-center">
        <p class="text-gray-700 dark:text-gray-300">Главный Cварщик рекомендует:</p>
      </div>


      <div class="grid gap-4 grid-cols-2 md:grid-cols-4">
        <div v-for="product in recommends" :key="product.id" class="bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 shadow-md">
          <!-- <ProductCard :product="product" /> -->

          <!-- <div class="p-1 flex items-center justify-center">
            <p class="text-xs text-gray-700 dark:text-gray-300">{{ product.name }}</p>
          </div>
          <div class="p-1">
            <button type="button" class="mdi mdi-cart-outline rounded-sm bg-yellow-450 px-2 text-sm text-gray-800 shadow-sm hover:bg-yellow-550 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 transition duration-300 delay-150 hover:delay-300">В корзину</button>
          </div> -->
          
          <div class="bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 shadow-md">
            <div class="h-36 lg:h-40">

              <nuxt-link to="#">
                <div class="bg-white h-full rounded-sm group">

                  <div class="relative h-full rounded-sm">
                    <div class="flex justify-center">
                      <img 
                        src="noimage-235-177.jpg"
                        onerror="this.src='../../noimage-235-177.jpg'"
                        alt="product.imageAlt"
                        loading=lazy
                        width="160"
                        height="120"
                      />
                    </div>

                    <div class="absolute left-0 top-0">
                      <div class="flex items-center p-1">
                        <p class="flex items-center uppercase text-red-600 font-bold mdi mdi-alert-decagram text-xs">Новинка</p>
                      </div>
                    </div>
                    <div class="absolute top-0 right-0">
                      <div class="flex items-center p-1 rounded-sm">
                        <p class="text-gray-700 font-bold text-xs">8000 RUB</p>
                      </div>
                    </div>
                    <div class="absolute bottom-0 left-0 w-full">
                      <div class="flex items-center bg-gray-800/60 group-hover:bg-gray-800/70 p-1 rounded-sm">
                        <p class="text-gray-200 text-xs">{{ product.name }}</p>
                      </div>
                    </div>
                  </div>
                </div>                    
              </nuxt-link>

            </div>
          </div>


        </div>
      </div>

    </div>
  </div>
</template>
  
<script>
// import {
//   Hooper,
//   Slide,
//   Navigation as HooperNavigation
//   } from 'hooper';
//   import 'hooper/dist/hooper.css';


  import ProductCard from '../ProductCard.vue';
    export default {
      name: 'RecommendSection',
      components: {
        ProductCard,
        // Hooper,
        // Slide,
        // HooperNavigation
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
  }
</script>