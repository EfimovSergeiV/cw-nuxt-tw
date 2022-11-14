<template>
  <section id="shop-maps">
    <div class="mx-auto py-2 px-4 lg:max-w-7xl lg:px-8">
      <div class="grid grid-cols-2 lg:grid-cols-6 gap-4 text-center">
        <div class="mt-2 bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 shadow-md cursor-pointer group" v-for="(city, pk) in ['Москва', 'Санкт-Петербург', 'Псков', 'Смоленск', 'Петрозаводск', 'Великие луки',]" :key="pk">
          <p class="text-base my-1" @click="selectCity = city"> {{ city }}</p>
        </div>
      </div>

      <div class="mt-2 bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 shadow-md">
        <div class="relative">
          <iframe :src="mapURLs[selectCity]" width="100%" height="350" frameborder="0" loading="lazy" class="rounded-sm"></iframe>
          <div class="absolute top-0 bg-gradient-to-r from-gray-100/95 dark:from-gray-700/95 to-gray-500/0 w-2/3 h-full">
            <div class="mx-2">
              <p class="my-1 font-bold text-gray-700 dark:text-gray-300">Главный сварщик | {{ selectCity}}</p>
              <div class="">
                <div class="my-1" v-for="shop in shops" :key="shop.id">
                  <div class="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 text-xs" v-if="shop.city == selectCity">
                    <div class="border border-gray-200 dark:border-gray-300/30 w-2/3 p-1 transition-all duration-300 rounded-sm hover:border-gray-300 dark:hover:border-gray-100 cursor-pointer hover:bg-white/50 dark:hover:bg-gray-700/50 ">
                      <p class="mdi mdi-map-marker"> {{ shop.adress }}</p>
                      <a href="tel:+78112606005"><p class="my-1 mdi mdi-phone"> {{ shop.phone }}</p></a>
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
    </div>
  </section>
</template>

<script>

  export default {
    name: 'ShopMaps',
    components: {
    },
    props: {
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
  },
}
</script>