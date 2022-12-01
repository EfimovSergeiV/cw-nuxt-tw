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
          class="main-hooper"
        >
          <slide v-for="i in 10" :key="i" class="">
            <img
              src="../../assets/images/header-banner.png"
              style="width: 100%;"
              class="rounded-sm"
              onerror="this.src='./noimage-960-540.jpg'"
            />
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
    // props: {
    //   searchresult: {
    //     type: Array,
    //     default: Array,
    //   },
    // },
    data() {
      return {

      }
    },
  }
  </script>