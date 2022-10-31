<template>
  <section id="main">
    <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        
        <div class="bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 p-1 shadow-md">
          
          <div class="grid grid-cols-2 gap-4">

            
            <div v-for="products in 4" v-key="products">
            
              <div class="bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 shadow-md">
                <div class="h-36 lg:h-40">

                  <nuxt-link to="#">
                    <div class="bg-white h-full rounded-sm group">

                      <div class="relative h-full rounded-sm">
                        <div class="flex justify-center">
                          <img 
                            src="noimage-235-177.jpg"
                            onerror="this.src='../../noimage-235-177.jpg'"
                            alt="product.imageAlt"
                            loading=lazy
                            width="160"
                            height="120"
                          />
                        </div>

                        <div class="absolute left-0 top-0">
                          <div class="flex items-center p-1">
                            <p class="flex items-center uppercase text-red-600 font-bold mdi mdi-alert-decagram text-xs">Новинка</p>
                          </div>
                        </div>
                        <div class="absolute top-0 right-0">
                          <div class="flex items-center p-1 rounded-sm">
                            <p class="text-gray-700 font-bold text-xs">8000 RUB</p>
                          </div>
                        </div>
                        <div class="absolute bottom-0 left-0 w-full">
                          <div class="flex items-center bg-gray-800/60 group-hover:bg-gray-800/70 p-1 rounded-sm">
                            <p class="text-gray-200 text-xs">Сварочный аппарат TECNICA 188 MPGE 230V ACX+PLAST.C.CASE</p>
                          </div>
                        </div>
                      </div>
                    </div>                    
                  </nuxt-link>

                </div>
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
