<template>
  <section id="reviews" class="">
    <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">

      <div class="bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 my-4 shadow-md">
        <div class="px-2 mt-2">
          <p class="">Обзоры на оборудование:</p>
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
            <slide v-for="video in videos" :key="video.id" class="hooper-ul">
              <div class="h-60 border dark:border-gray-700 shadow-md">
                <!-- <img
                  :src="review.image"
                  class="rounded-sm h-full"
                  onerror="this.src='./noimage-960-540.jpg'"
                /> -->
                <iframe
                  :src="video.video"
                  loading="lazy"
                  height="100%"
                  width="100%"
                  allowfullscreen="0"
                  frameborder="0"
                ></iframe>
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
        videos: [
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
        ],
      }
    },
  }
</script>