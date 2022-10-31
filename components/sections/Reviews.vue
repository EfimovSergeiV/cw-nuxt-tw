<template>
  <section id="reviews" class="">
    <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">

      <div class="bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 my-4 shadow-md">
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
          <slide v-for="review in reviews" :key="review.id" class=" hooper-ul">
            <div class="">
              <img
                :src="review.image"
                class="rounded-sm h-full"
                onerror="this.src='./noimage-960-540.jpg'"
              />              
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
        dataset: true,
      }
    },
  }
</script>