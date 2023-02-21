<template>
  <section id="main-welder" class="">
    <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">

      <div class="grid grid-cols-2 gap-4 mt-4">

        <div class="">
          <div class="bg-white dark:bg-gray-800 h-full rounded-sm border dark:border-gray-600 border-gray-200 shadow-sm">
            <div class="relative">
              <img src="main-mw-banner.png" class="" />
              <div class="absolute h-full w-full top-0 bg-gray-800/50">
                <div class="flex items-center h-full px-2">
                  
                  <div class="">

                    <div class="flex gap-2">
                      <p class="text-2xl font-semibold my-4 uppercase shadow-2xl">Становись профессионалом</p>
                      <p class="text-2xl font-bold my-4 uppercase shadow-2xl text-white">с нами!</p>
                    </div>
                    
                    <nuxt-link :to="{ name: 'cts'}" class="lowercase">Перейти в каталог</nuxt-link>
                  </div>
                  
                </div>


              </div>              
            </div>
          </div>
        </div>


        <div class="grid grid-cols-2 gap-4">
          <div class="bg-white dark:bg-gray-800 h-full rounded-sm border dark:border-gray-600 border-gray-200 shadow-sm">
            <div class="relative">
              <img src="first-mw-banner.jpg" class="" />
              <div class="absolute h-full w-full top-0 bg-gray-800/50">
                <div class="flex items-center h-full px-2">
                  <div class="">
                    <div class="flex gap-2">
                      <div class="px-2 grid grid-cols-1 gap-4">
                        <p class=" text-lg font-bold text-white">Ручная дуговая сварка</p>
                        <nuxt-link :to="{ name: 'cts'}" class="uppercase text-xs font-semibold underline">Перейти в категорию</nuxt-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>              
            </div>
          </div>

          <div class="relative">
            <div class="bg-white dark:bg-gray-800 h-full rounded-sm border dark:border-gray-600 border-gray-200 shadow-sm">
              <div class="relative">
                <img src="two-mw-banner.jpg" class="" />
                <div class="absolute h-full w-full top-0 bg-gray-800/50">
                  <div class="flex items-center h-full px-2">
                    <div class="">
                      <div class="flex gap-2">
                        <div class="px-2 grid grid-cols-1 gap-4">
                          <p class=" text-lg font-bold text-white">Полуавтоматическая сварка</p>
                          <nuxt-link :to="{ name: 'cts'}" class="uppercase text-xs font-semibold underline">Перейти в категорию</nuxt-link>
                        </div>
                      </div>
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
    name: 'MainWelderSection',
    components: {
      // Hooper,
    },
    props: {
        mpromobs: {
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