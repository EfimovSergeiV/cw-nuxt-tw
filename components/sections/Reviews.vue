<template>
  <section id="reviews" class="">
    <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">
      <div class="bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 my-4 shadow-md">
        <div class="px-2 mt-2">
          <nuxt-link :to="{ name: 'reviews' }" class="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-200">Обзоры на оборудование</nuxt-link>
        </div>
        
        <div class="">
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

                <div class="h-28 md:h-60 border dark:border-gray-700 bg-gray-100 dark:bg-gray-900 shadow-md relative">

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
        </div>

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
  }
</script>