<template>
  <section id="main">
    <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">
      <div class="grid grid-cols-2">
        
        <div class=""></div>

        <div class="">

          <hooper
            :center-mode="true"
            :wheel-control="false"
            :auto-play="false"
            :play-speed="7000"
            style="height: 100%;"
            class=""
          >
            <slide v-for="banner in banners" :key="banner.id" class="h-96">
              <img
                :src="banner.image"
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
import 'hooper/dist/hooper.css'

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
