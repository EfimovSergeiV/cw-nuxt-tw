<template>
  <section id="main">
    <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        
        <div class="">
          
          <div class="grid grid-cols-2 gap-4">
            
            <div v-for="products in 4" v-key="products">
            
              <div class="bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 shadow-md">
                <div class="p-2 h-36 lg:h-40">

                  <div class="">

                    <p>Hallo welt</p>

                  </div>

                </div>
                <!-- <img 
                  src="noimage-235-177.jpg"
                  onerror="this.src='../../noimage-235-177.jpg'"
                  alt="product.imageAlt"
                  loading=lazy
                  width="160"
                  height="120"
                  class="p-4" 
                /> -->
              </div>
            
            </div>

          </div>

        </div>

        <div class="border dark:border-gray-700 rounded-sm">

          <hooper
            :center-mode="true"
            :wheel-control="false"
            :auto-play="false"
            :play-speed="7000"
            style="height: 100%;"
            class="main-hooper"
          >
            <slide v-for="banner in banners" :key="banner.id" class="">
              <img
                :src="banner.image"
                class="rounded-sm h-full"
                onerror="this.src='./noimage-960-540.jpg'"
              />
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
  name: 'MainSection',
    components: {
      Hooper,
      Slide,
      HooperNavigation,
      HooperPagination,
    },
    props: {
      banners: {
        type: Array,
        default: Array,
      },
    },
  data() {
    return {

    }
  }
}
</script>
