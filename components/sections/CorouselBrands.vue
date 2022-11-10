<template>
  <section id="" class="">
    <div class="mx-auto py-2 px-4 lg:max-w-7xl lg:px-8">

      <div class="grid grid-cols-2 lg:grid-cols-6 gap-4 text-center">
        <div class="mt-2 bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 shadow-md cursor-pointer group" v-for="(city, pk) in ['Москва', 'Санкт-Петербург', 'Псков', 'Смоленск', 'Петрозаводск', 'Великие луки',]" :key="pk">
          <p class="text-lg" @click="selectCity = city"># {{ city }}</p>
        </div>
      </div>

      <!-- <div class="mt-2 bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 shadow-md">
        
        <p class="p-2 font-bold">Главный сварщик - {{ selectCity}}</p>
        <div class="gap-4 flex flex-row">
          <div class="" v-for="shop in shops" :key="shop.id">
            <div class="break-inside-avoid-column p-2" v-if="shop.city == selectCity">
              <p class="text-sm">{{ shop.adress }}</p>
              <p class="text-sm">{{ shop.phone }}</p>
              <p class="text-sm">{{ shop.wday }}</p>
              <p class="text-sm">{{ shop.wend }}</p>
            </div>            
          </div>
        </div>
      </div> -->


      <div class="mt-2 bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 shadow-md">
        <div class="relative">
          <iframe :src="mapURLs[selectCity]" width="100%" height="350" frameborder="0" lazy class="rounded-sm"></iframe>
          <div class="absolute top-0 transition-all duration-300 bg-gradient-to-r from-gray-700/95 to-gray-500/0 w-2/3 h-full">
            <div class="mx-2">
              <p class="my-1 font-bold text-gray-200">Главный сварщик - {{ selectCity}}</p>
              <div class="">
                <div class="my-1" v-for="shop in shops" :key="shop.id">
                  <div class="text-gray-300 hover:text-gray-100 text-xs font-bold" v-if="shop.city == selectCity">
                    <div class="border border-gray-300/30 w-2/3 p-1 rounded-sm hover:border-gray-100 cursor-pointer hover:bg-gray-700/50 group">
                      <p class="">{{ shop.adress }}</p>
                      <a href="tel:+78112606005"><p class="my-1">{{ shop.phone }}</p></a>
                      <p class="">{{ shop.wday }}</p>
                      <p class="">{{ shop.wend }}</p>                      
                    </div>
                  </div>            
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="mt-2 p-2 bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 shadow-md">
        


        <!-- <div class="">
          <p class="text-gray-700 dark:text-gray-300 font-bold my-4">Магазины:</p>
          <div class="grid grid-cols-3 md:grid-cols-4 place-content-end gap-4">

            <div class="text-gray-700 dark:text-gray-300 hover:text-gray-800 hover:dark:text-gray-200 group cursor-pointer" v-for="shop in shops" :key="shop.id">
              <div class="bg-white rounded-sm border border-gray-200 group-hover:border-gray-300 dark:border-gray-700 dark:bg-gray-800 h-full dark:group-hover:border-gray-600">
                <div class="p-2">
                  <p class="text-sm font-bold">{{ shop.city }}:</p>
                  <div class="flex items-end lg:h-14">
                    <div class="">
                      <p class="text-xs">{{ shop.phone }}</p>
                      <p class="text-xs mt-1">{{ shop.adress }}</p>                           
                    </div>           
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div class="flex justify-end">
            <nuxt-link to="about" class="text-sm text-gray-700 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200 hover:underline">Перейти в контакты</nuxt-link>
          </div>
        </div> -->


        <div class="">
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
                <slide v-for="(brand, br) in brands" :key="br">
                  <div class="grid justify-items-center">
                    <img
                      :alt="brand.brand"
                      onerror="this.src='../../noimage-235-177.jpg'"
                      class="cursor-pointer rounded-sm p-3"
                      style="width:150px; height: 100px"
                      width="150"
                      height="100"
                      :src="brand.image"
                      fluid
                      @click="
                        $router.push({
                          name: `products`,
                          query: { brnd: brand.id, page: 1 },
                        })"
                      />
                  </div>
                </slide>
              </hooper>              
            </div>
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
      shops: {
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