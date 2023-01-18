<template>
  <section id="" class="">
    <div class="mx-auto py-2 px-4 lg:max-w-7xl lg:px-8">

      <div class="mt-2 p-2 bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 shadow-md">
        <div class="text-gray-700 dark:text-gray-300 font-bold">
          <!-- <p class="text-gray-700 dark:text-gray-300 font-bold">Папулярные бренды:</p> -->

          <div class="">
            <hooper
              :infinite-scroll="true"
              :center-mode="true"
              :items-to-show="5"
              pagination="no"
              :auto-play="true"
              :play-speed="17000"
              class=""
              style="height:100px"
            >
              <slide v-for="(brand, br) in brands" :key="br" class="flex items-center justify-center">
                <div class="grid justify-items-center">
                  <nuxt-link :to="{ name: 'prods', query: { brnd: brand.id, page: 1 }}">
                    <img
                      :alt="brand.brand"
                      onerror="this.src='../../noimage-235-177.png'"
                      class="rounded-sm p-3 w-32"
                      loading=lazy
                      :src="brand.image"
                      fluid
                      />                  
                  </nuxt-link>
                </div>
              </slide>
            </hooper>              
          </div>
        </div>
      </div>


    </div>
  </section>
</template>
  
<script>
import { Hooper, Slide } from 'hooper'
import { mapGetters } from 'vuex'

  export default {
    name: 'BrandCarouselSection',
    components: {
      Hooper,
      Slide
    },
    props: {
      brands: {
        type: Array,
        default: Array,
      },
    },
    data() {
      return {
        selectCity: 'Псков',
        mapURLs: {
          "Псков" : "https://yandex.ru/map-widget/v1/?um=constructor%3A47f57d246b40670e64b17cb3f82dde8a81f3b3a825fa0ec9dc5e2a360214ec38&amp;source=constructor",
          "Москва" : "https://yandex.ru/map-widget/v1/?um=constructor%3Ae113235413b59c4ae31cb4d894caa9612e5c88e95cb5fc873f8508770800a19f&amp;source=constructor",
          "Санкт-Петербург" : "https://yandex.ru/map-widget/v1/?um=constructor%3A4892b9a6ff89034d14a4833ed892e30ddac4cde58559e85c6ae75d9d5cb766b2&amp;source=constructor",
          "Великие луки" : "https://yandex.ru/map-widget/v1/?um=constructor%3A8cbd01689857fcf3e2c9604637d5e0e3ac33b5e71467a701ed470d12b63e1dea&amp;source=constructor",
          "Смоленск" : "https://yandex.ru/map-widget/v1/?um=constructor%3A22e3d619383ca4fb59e78352a52f5e3808418009918e23d73549578277b6a013&amp;source=constructor",
          "Петрозаводск" : "https://yandex.ru/map-widget/v1/?um=constructor%3A7a6886838355b4c4aab4597dd2ee3dcd40eb7c6cd2bab5638666af5f1606c267&amp;source=constructor",
        }
      }
    },
    computed: {
    ...mapGetters({
      true_brand: 'carouselBrand',
    }),
  },
}
</script>