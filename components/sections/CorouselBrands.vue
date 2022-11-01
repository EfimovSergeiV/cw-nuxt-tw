<template>
  <section id="" class="">
    <div class="mx-auto py-2 px-4 lg:max-w-7xl lg:px-8">

      <div class="mt-2 p-2 bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 shadow-md">
        


        <div class="">
          <p class="text-gray-700 dark:text-gray-300 font-bold my-4">Адреса магазинов:</p>
          <div class="grid grid-cols-3 md:grid-cols-4 gap-4">

            <div class="text-gray-700 dark:text-gray-300 hover:text-gray-800 hover:dark:text-gray-200 group cursor-pointer" v-for="shop in shops" :key="shop.id">
              <div class="bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 h-full group-hover:border-gray-600">
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
        </div>

        <div class="mt-8">
          <div class="text-gray-700 dark:text-gray-300 font-bold">
            <p class="text-gray-700 dark:text-gray-300 font-bold">Папулярные бренды:</p>

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
    computed: {
    ...mapGetters({
      true_brand: 'carouselBrand',
    }),
  },
}
</script>