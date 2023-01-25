<template>
  <section id="top-slider-section">
    <div class="mx-auto max-w-7xl px-4 lg:max-w-7xl lg:px-8 pt-2">

      <div class="border dark:border-gray-700 rounded-sm">

        <hooper
          :center-mode="true"
          :wheel-control="false"
          :play-speed="12000"
          :auto-play="true"
          style="height: 100%;"
          class="main-hooper ">
         
            <slide v-for="slide in widebanners" :key="slide.id" class="">
              <div class="relative">

                <img
                  :src="slide.image"
                  style="width: 100%;"
                  class="rounded-sm"
                  :alt="slide.name"
                  onerror="this.src='./noimage-960-540.jpg'"
                />

                <nuxt-link v-if="slide.path" :to="slide.path">  
                  <div class="absolute top-0 right-0 z-50 w-full h-full">
                    <div class="flex justify-end">
                      <div class="relative mx-2 md:mx-4 md:my-2">
                        <span class="mdi mdi-24px mdi-link-variant text-whitw shadow-2xl"></span>
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