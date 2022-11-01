<template>
  <section id="map-shops" class="my-4">

    <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">

      <div class="mt-4 p-1 bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 shadow-md">      

        
        <div class="">
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


        <div class="">
          <p class="text-gray-700 dark:text-gray-300 font-bold">Адреса магазинов:</p>
          <div class="grid grid-cols-4 gap-2">

            <div class="py-2 text-gray-700 dark:text-gray-300" v-for="shop in shops" :key="shop.id">
              <p class="text-sm font-bold">{{ shop.city }}:</p>
              <p class="text-xs">{{ shop.phone }}</p>
              <p class="text-xs">{{ shop.adress }}</p>
              <!-- <p class="text-xs">{{ shop.wday }}</p>
              <p class="text-xs">{{ shop.wend }}</p> -->
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
    name: 'mapShops',
      components: {
        Hooper,
        Slide
    },
    props: {
      shops: {
        type: Array,
        default: Array,
      },
      barnds: {
        type: Array,
        default: Array,
      },
    },
    // computed: {
    //   ...mapGetters({
    //     true_brand: 'carouselBrand',
    //   }),
    // },
    methods: {
      copyToBuffer(addres) {
        navigator.clipboard.writeText(addres)
        .then(() => {
          this.$bvToast.toast(
            addres,
            {
              title: 'Скопировано в буфер обмена',
              variant: 'success',
            }
          )
        })
      }
    }
  }
  </script>