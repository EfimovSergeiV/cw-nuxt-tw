<template>
  <section id="main-welder" class="">
    <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">

        <div class="">
          <div class="bg-white dark:bg-gray-800 h-full rounded-sm border border-gray-100 dark:border-gray-700 shadow-sm">
            <div class="relative">
              <img src="main-mw-banner.png" class="rounded-sm h-full w-full" fluid />
              <div class="absolute h-full w-full top-0 bg-gray-800/80 rounded-sm">
                <div class="flex items-center h-full px-4">
                  
                  <div class="grid grid-cols-1 gap-2">

                    <div class="flex gap-2">
                      <p class="text-base md:text-xl font-semibold uppercase shadow-2xl text-red-500">Становись профессионалом</p>
                      <p class="text-base md:text-xl font-bold uppercase shadow-2xl text-gray-100 ">с нами!</p>
                    </div>
                    
                    <nuxt-link :to="{ name: 'cts'}" class="lowercase text-gray-100">Перейти в каталог</nuxt-link>
                  </div>
                  
                </div>


              </div>              
            </div>
          </div>
        </div>


        <div class="grid grid-cols-2 gap-4">
          <div class="bg-white dark:bg-gray-800 h-full rounded-sm border border-gray-100 dark:border-gray-700 shadow-sm">
            <div class="relative h-full w-full">
              <img src="first-mw-banner.jpg" class="overflow-hidden rounded-sm h-full w-full" />
              <div class="absolute h-full w-full top-0 bg-gray-800/80 rounded-sm">
                
                <div class="flex items-center h-full px-2">
                  <div class="">
                    
                    <div class="my-2">
                      <nuxt-link to="#" class="text-sm font-semibold">Сварочное оборудование</nuxt-link>
                    </div>
                    

                    <div class="">
                      <div class="">

                      </div>
                      <div class="flex items-center gap-4 my-2">
                        <div class=" w-20 h-20">
                          <div class="bg-white rounded-md w-full h-full">
                            <img src="icons/esab-sm.png" class="rounded-md p-2" />
                          </div>
                        </div>
                        <div class="grid grid-cols-1 gap-2">
                          <nuxt-link to="#" class="text-xs">Ручная дуговая сварка</nuxt-link>
                          <nuxt-link to="#" class="text-xs">Полуавтоматическая сварка</nuxt-link>
                          <nuxt-link to="#" class="text-xs">Аргонодуговая сварка</nuxt-link>
                        </div>
                      </div>
                    </div>                     
                  </div>
                </div>

              </div>              
            </div>
          </div>

          <div class="relative">
            <div class="bg-white dark:bg-gray-800 h-full rounded-sm border border-gray-100 dark:border-gray-700 shadow-sm">
              <div class="relative h-full w-full">
                <img src="two-mw-banner.jpg" class="overflow-hidden rounded-sm h-full w-full"/>
                <div class="absolute h-full w-full top-0 bg-gray-800/80 rounded-sm">

                  
                  <div class="flex items-center h-full px-2">
                    <div class="">
                      
                      <div class="my-2">
                        <nuxt-link to="#" class="text-sm font-semibold">Сопутствующие товары</nuxt-link>
                      </div>
                      

                      <div class="">
                        <div class="">

                        </div>
                        <div class="flex items-center gap-4 my-2">
                          <div class=" w-20 h-20">
                            <div class="bg-white rounded-md w-full h-full">
                              <img src="icons/mask-sm.png" class="rounded-md p-2" />
                            </div>
                          </div>
                          <div class="grid grid-cols-1 gap-2">
                            <nuxt-link to="#" class="text-xs">Сварочные маски</nuxt-link>
                            <div class="flex gap-1">
                              <nuxt-link to="#" class="text-xs">Электроды</nuxt-link>
                              <p class="text-xs"> и </p>
                              <nuxt-link to="#" class="text-xs">проволока</nuxt-link>
                            </div>
                            <nuxt-link to="#" class="text-xs">Химия для сварки</nuxt-link>
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