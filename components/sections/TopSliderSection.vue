<template>
  <section id="top-slider-section">
    <div class="mx-auto max-w-7xl px-4 lg:max-w-7xl lg:px-8 pt-2">

      <div class="border dark:border-gray-700 rounded-sm">

        <hooper
          :center-mode="true"
          :wheel-control="false"
          :auto-play="false"
          :play-speed="7000"
          style="height: 100%;"
          class="main-hooper "
        >
          
            <slide v-for="slide in widebanners" :key="slide.id" class="">
              <div class="relative">
                <img
                  :src="slide.image"
                  style="width: 100%;"
                  class="rounded-sm"
                  :alt="slide.name"
                  onerror="this.src='./noimage-960-540.jpg'"
                />
                <div class="absolute bottom-0 right-0 z-50">
                  <div v-if="slide.path" class="px-4 py-1 bg-gray-700">
                    <nuxt-link :to="slide.path" class="text-sm font-bold text-gray-300 shadow-2xl hover:underline">Подробнее</nuxt-link>
                  </div>
                </div>
              </div>              
            </slide>


          <hooper-navigation slot="hooper-addons"></hooper-navigation>
          <hooper-pagination slot="hooper-addons"></hooper-pagination>
        
        </hooper>


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
      name: 'TopSliderSection',
      components: {
        Hooper,
        Slide,
        HooperNavigation,
        HooperPagination,
    },
    props: {
      widebanners: {
        type: Array,
        default: Array,
      },
    },
    data() {
      return {
        slides: [
          { id: 1, alt: "grovers",  image: "../../assets/images/header-banner.png" },
          { id: 2, alt: "grovers", image: "../../assets/images/header-banner.png" },
          { id: 3, alt: "grovers", image: "../../assets/images/header-banner.png" },
          { id: 4, alt: "grovers", image: "../../assets/images/header-banner.png" },
          { id: 5, alt: "grovers", image: "../../assets/images/header-banner.png" },
        ]
      }
    },
  }
  </script>