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

                <div class="h-60 border dark:border-gray-700 shadow-md relative">

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
                        <div class="">
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
    // props: {
    //   reviews: {
    //     type: Array,
    //     default: Array,
    //   },
    // },
    data() {
      return {
        reviews: [
          {
            id: 1,
            name: 'Правильная сварка - Сварог',
            link: { name: `products`, query: { brnd: 9, page: 1 } },
            video:
              'https://www.youtube.com/embed/SakTd5qGn24?autoplay=0&amp;loop=1&amp;&amp;playlist=SakTd5qGn24',
          },
          {
            id: 2,
            name: 'PRO TIG 315P AC/DC - Сварог',
            link: { name: 'product-id', params: { id: 1035 } },
            video:
              'https://www.youtube.com/embed/600W5mJjTco?autoplay=0&amp;loop=1&amp;&amp;playlist=600W5mJjTco',
          },
          {
            id: 3,
            name: 'REAL SMART MIG 200 - Сварог',
            link: { name: 'product-id', params: { id: 1039 } },
            video:
              'https://www.youtube.com/embed/TV4Ku9q9M0Y?autoplay=0&amp;loop=1&amp;&amp;playlist=TV4Ku9q9M0Y',
          },
          {
            id: 4,
            name: 'REAL SMART ARC 160 - Сварог',
            link: { name: 'product-id', params: { id: 1058 } },
            video:
              'https://www.youtube.com/embed/owyfZ-ATr9Y?autoplay=0&amp;loop=1&amp;&amp;playlist=owyfZ-ATr9Y',
          },

          {
            id: 5,
            name: 'REAL SMART ARC 160 - Сварог',
            link: { name: 'product-id', params: { id: 1058 } },
            video:
              'https://www.youtube.com/embed/RMXycPSo6WE',
          },
          {
            id: 6,
            name: 'REAL SMART ARC 160 - Сварог',
            link: { name: 'product-id', params: { id: 1058 } },
            video:
              'https://www.youtube.com/embed/LIRjPeQSP_w',
          },
          {
            id: 7,
            name: 'REAL SMART ARC 160 - Сварог',
            link: { name: 'product-id', params: { id: 1058 } },
            video:
              'https://www.youtube.com/embed/rg7rONVwq6A',
          },
          {
            id: 8,
            name: 'REAL SMART ARC 160 - Сварог',
            link: { name: 'product-id', params: { id: 1058 } },
            video:
              'https://www.youtube.com/embed/k1f8S3K3m5w',
          },
        ],
      }
    },
  }
</script>