<template>
  <section id="main-welder" class="">
    <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">

        <div class="bg-[url('images/mw-one-bg.jpg')] bg-no-repeat bg-cover rounded-sm">
          <div class="bg-white/80 dark:bg-gray-800/80 h-full rounded-sm border border-gray-100 dark:border-gray-700 shadow-sm">

                <div class="flex items-center justify-center md:justify-start h-full px-4 py-6">
                  
                  <div class="grid grid-cols-1 gap-2">

                    <div class="flex gap-2">
                      <p class="text-base md:text-xl font-semibold uppercase shadow-2xl text-red-500">Становись профессионалом</p>
                      <p class="text-base md:text-xl font-bold uppercase shadow-2xl text-gray-700 dark:text-gray-100 ">с нами!</p>
                    </div>
                    
                    <nuxt-link :to="{ name: 'cts'}" class="text-gray-700 hover:text-gray-900 dark:text-gray-300 hover:dark:text-gray-100 transition-all text-sm">Перейти в каталог</nuxt-link>
                  </div>
                  
                </div>
            

          </div>
        </div>



            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="bg-[url('images/mw-two-bg.jpg')] bg-no-repeat bg-cover rounded-sm">
                <div class="bg-white/80 dark:bg-gray-800/80 h-full rounded-sm border border-gray-100 dark:border-gray-700 shadow-sm">
                  <div class="flex items-center h-full px-2">
                    <div class="">
                      <div class="my-2">
                        <nuxt-link :to="{ name: 'prods', query: { 'ct': 1 }}" class="text-sm text-gray-900 dark:text-gray-100 transition-all">Сварочное оборудование</nuxt-link>
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
                            <nuxt-link :to="{ name: 'prods', query: { 'ct': 8 }}" class="text-xs text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-all">MMA сварка</nuxt-link>
                            <nuxt-link :to="{ name: 'prods', query: { 'ct': 9 }}" class="text-xs text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-all">MIG/MAG сварка</nuxt-link>
                            <nuxt-link :to="{ name: 'prods', query: { 'ct': 11 }}" class="text-xs text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-all">TIG сварка</nuxt-link>
                          </div>
                        </div>
                      </div>                     
                    </div>
                  </div>                  
                </div>
              </div>
              <div class="bg-[url('images/mw-third-bg.jpg')] bg-no-repeat bg-cover rounded-sm">
                <div class="bg-white/80 dark:bg-gray-800/80 h-full rounded-sm border border-gray-100 dark:border-gray-700 shadow-sm">
                  <div class="flex items-center h-full px-2">
                    <div class="">
                      <div class="my-2">
                        <p class="text-sm text-gray-900 dark:text-gray-100 transition-all">Сопутствующие товары</p>
                      </div>
                      <div class="">
                        <div class="">
                        </div>
                        <div class="flex items-center gap-4 my-2">
                          <div class=" w-20 h-20">
                            <div class="bg-white rounded-md w-full h-full">
                              <div class="">
                                <img src="icons/mask-sm.png" class="rounded-md p-2" />
                              </div>
                            </div>
                          </div>
                          <div class="grid grid-cols-1 gap-2">
                            <nuxt-link :to="{ name: 'prods', query: { 'ct': 108 }}" class="text-xs text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-all">Средства защиты</nuxt-link>
                            <div class="flex gap-1">
                              <nuxt-link :to="{ name: 'prods', query: { 'ct': 14 }}" class="text-xs text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-all">Электроды</nuxt-link>
                              <p class="text-xs"> и </p>
                              <nuxt-link :to="{ name: 'prods', query: { 'ct': 18 }}" class="text-xs text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-all">проволока</nuxt-link>
                            </div>
                            <nuxt-link :to="{ name: 'prods', query: { 'ct': 5 }}" class="text-xs text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-all">Химия для сварки</nuxt-link>
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