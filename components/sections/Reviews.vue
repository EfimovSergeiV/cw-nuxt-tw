<template>
  <section id="reviews" class="">
    <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">
      <div class="bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 my-4 shadow-md">
        <div class="px-2 mt-2">
          <div class="flex gap-2">
            <div class="flex items-center justify-center px-4 py-0.5 border border-gray-200 hover:border-gray-300 dark:border-gray-600 dark:hover:border-gray-500 bg-gray-100 dark:bg-gray-700 transition-all rounded-md shadow-sm shadow-black/30">
              <nuxt-link :to="{ name: 'reviews' }" class="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-200">Обзоры</nuxt-link>
            </div>
            <div class="flex items-center justify-center px-4 py-0.5 border border-gray-200 hover:border-gray-300 dark:border-gray-600 dark:hover:border-gray-500 bg-gray-100 dark:bg-gray-700 transition-all rounded-md shadow-sm shadow-black/30">
              <p class="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-200">Статьи</p>
            </div>
          </div>
        </div>

        <div class="px-2 py-2">

          <div class="flex flex-col md:flex-row gap-2">

            <div class="flex-none">
              <div class="grid grid-cols-2 gap-2">

                <div v-for="image in reviews.slice(0, 2)" :key="image.id"  class="w-[220px] lg:w-[320px]">
                  <div @mouseover="startAnimation(image)" @mouseout="stopAnimation(image)" class=" h-full cursor-pointer border border-gray-200 hover:border-gray-300 dark:border-gray-600 dark:hover:border-gray-500 bg-gray-100 dark:bg-gray-700 transition-all rounded-md shadow-sm shadow-black/30">
                    <div class="rounded-md transition-all duration-700">
                      <img :src="image.show_image" alt="Your WebP Image" class=" transition-all duration-700 rounded-md hh-36 rounded-bl-xl rounded-br-xl" />
                      <div class="px-1 py-4">
                        <p class="text-xs font-semibold">{{ image.name }}</p>
                      </div>                
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div class="flex-1">
              <div class="h-full min-w-[250px] cursor-pointer border border-gray-200 hover:border-gray-300 dark:border-gray-600 dark:hover:border-gray-500 bg-gray-100 dark:bg-gray-700 transition-all rounded-md shadow-sm shadow-black/30">
                <div class="h-full w-full flex items-center px-2">
                  <nuxt-link :to="{ name: 'articles-id', params: { id: 1 } }" class="">Как выбрать сварочный аппарат</nuxt-link>
                </div>
              </div>
            </div>
          </div>

          <!-- <div class="flex flex-row">
            <div class="basis-1/4">01</div>
            <div class="basis-1/4">02</div>
            <div class="basis-1/2">03</div>
          </div> -->

          <!-- <div class="flex gap-2">
            <div class="">
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div v-for="image in reviews.slice(0, 2)" :key="image.id"  class="">
                  <div @mouseover="startAnimation(image)" @mouseout="stopAnimation(image)" class="w-[320px] h-[228px] cursor-pointer border border-gray-200 hover:border-gray-300 dark:border-gray-600 dark:hover:border-gray-500 bg-gray-100 dark:bg-gray-700 transition-all rounded-md shadow-sm shadow-black/30">
                    <div class="rounded-md transition-all duration-700">
                      <img :src="image.show_image" alt="Your WebP Image" class=" transition-all duration-700 rounded-md hh-36 rounded-bl-xl rounded-br-xl" />
                      <div class="px-1 py-4">
                        <p class="text-xs font-semibold">{{ image.name }}</p>
                      </div>                
                    </div>
                  </div>
                </div>
              </div>
              
            </div>


            <div class="h-[228px] ww-full cursor-pointer border border-gray-200 hover:border-gray-300 dark:border-gray-600 dark:hover:border-gray-500 bg-gray-100 dark:bg-gray-700 transition-all rounded-md shadow-sm shadow-black/30">

            </div>
          </div> -->

        </div>

        

        
        <!-- <div class="">
          <hooper
            :center-mode="true"
            :wheel-control="false"
            :items-to-show="3"
            :infinite-scroll="true"
            :auto-play="false"
            :play-speed="7000"
            style="height: 100%;"
            class="main-hooper"
          >
            <slide v-for="review in reviews" :key="review.id" class="hooper-ul">

              <div class="h-28 md:h-60 border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 shadow-md relative">

                <iframe
                  :src="review.video"
                  loading="lazy"
                  height="100%"
                  width="100%"
                  allowfullscreen="0"
                  frameborder="0"
                ></iframe>

                <nuxt-link :to="{ name: 'reviews-id', params: { id: review.id } }">
                  <div class="absolute hover:bg-gray-800/90 top-0 h-full w-full transition-all duration-700 group">
                    <div class="flex w-full h-full justify-center items-center">
                      <div class="text-xs md:text-sm">
                        <div class="grid grid-cols-1 text-center">
                          <div class="">
                            <p class="text-gray-100/0 group-hover:text-gray-100 border-gray-100/0 group-hover:border-gray-100 border-b-2 transition-all duration-700">{{ review.name }}</p>
                          </div>

                          <div class="">
                            <p class="text-gray-100/0 group-hover:text-gray-100 transition-all duration-700">Перейти к видео</p>
                          </div>

                        </div>
                      </div>
                    </div>
                      

                  </div>                  
                </nuxt-link>


              </div>


            </slide>
            <hooper-navigation slot="hooper-addons"></hooper-navigation>
            <hooper-pagination slot="hooper-addons"></hooper-pagination>
          </hooper>
        </div> -->

      </div>


    </div>

  </section>
</template>
    
<script>
  import {
    Hooper,
    Slide,
    Navigation as HooperNavigation,
    Pagination as HooperPagination,
  } from 'hooper'

  export default {
    name: 'SvarogSection',
    components: {
      Hooper,
      Slide,
      HooperNavigation,
      HooperPagination,
    },
    props: {
      reviews: {
        type: Array,
        default: Array,
      },
    },
    data() {
      return {

      }
    },
    methods: {
      startAnimation(image) {
        image.show_image = image.image;
        console.log('jasfdhj')
      },
      stopAnimation(image) {
        image.show_image = image.static_image;
        console.log('jasfdhjsdfhjksdh')
      }
    },
  }
</script>
