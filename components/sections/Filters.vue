<template>
  <section id="filters">


    <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">

      <div class="flex items-center justify-between py-4">

        <button @click="(show = !show)" class="text-base mdi mdi-filter-outline hover:text-gray-900 dark:hover:text-gray-100"> Фильтр по товарам</button>

        <Pagination :response="response" />
        
      </div>

    </div>


    <transition tag="div" name="left-emergence">
      <div v-if="(show && $nuxt.$route.name === 'prods')" class="fixed z-40 top-0 left-0">
        <div class="bg-gradient-to-br from-gray-300 to-gray-200 dark:from-gray-900 dark:to-gray-800 w-screen md:w-[420px] h-screen overflow-y-auto border-r border-gray-300 hover:border-gray-400 dark:border-gray-700 hover:dark:border-gray-600">
          <div class="p-4 relative">


            <div class="flex items-center justify-between">
              <div class=""><p class="">Фильтр по товарам</p></div>
              <div class=""><button @click="show = !show" class="mdi mdi-24px mdi-close cursor-pointer"></button></div>
            </div>

            <div class="">

              <div class="py-2">
                  <div class="break-inside-avoid-column border border-gray-300 hover:border-gray-400 dark:border-gray-700 dark:hover:border-gray-600 rounded-sm p-1">
                    
                    <div id="checkbox-form my-2">
                      <p class="text-sm mb-2 m-1">Производитель</p>
                      
                      <p class="text-xs">{{ brands }}</p>

                      <div class="flex flex-wrap">
                        <div class="flex items-center mr-4 p-1" v-for="brand in brands" :key="brand.id">
                          
                          <input @change="changeForm('brnd', brand.id )" type="checkbox"  class="w-4 h-4 text-blue-600 bg-gray-100 rounded-sm border-gray-300 focus:ring-blue-500 dark:focus:ring-gray-700 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                          <label class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ brand.brand }}</label>
                        
                        </div>
                      
                      </div>                      
                    </div>

                  </div>
                </div>

              <div class="" v-for="prop in props" :key="prop.id">

                <div class="py-2" v-if="prop.propwidget == 'value'">
                  <div class="break-inside-avoid-column border border-gray-300 hover:border-gray-400 dark:border-gray-700 dark:hover:border-gray-600 rounded-sm p-1">
                    
                    <div id="checkbox-form my-2">
                      <p class="text-sm mb-2 m-1">{{ prop.name }}</p>
                      <div class="flex flex-wrap">
                        <div class="flex items-center mr-4 p-1" v-for="ops in prop.prop_ops" :key="ops.id">
                          
                          <input @change="changeForm(prop.prop_alias, ops.opskey )" :id="ops.opskey" type="checkbox" :value="ops.ops" class="w-4 h-4 text-blue-600 bg-gray-100 rounded-sm border-gray-300 focus:ring-blue-500 dark:focus:ring-gray-700 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                          <label :for="ops.opskey" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">VAL:{{ ops.ops }}</label>
                        
                        </div>
                      
                      </div>                      
                    </div>

                  </div>
                </div>

              </div>
            </div>

            <div>
              <p class="text-sm mt-6">OPTS: {{ opts }}</p>
            </div>

            <div class="flex justify-end p-4">
              <button @click="clearFilter" class="text-sm mx-2 mdi mdi-filter-variant-minus text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"> Очистить</button>
              <button @click="appFilter" class="text-sm mx-2 mdi mdi-filter-variant-plus text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"> Применить</button>
            </div>


          </div>

          

        </div>
      </div>
    </transition>

  </section>
</template>

<script>
  import Pagination from '~/components/Pagination.vue'

  export default {
    name: 'Filters',
    components: {
      Pagination,
    },
    props: {
      response: {
        type: Object,
        default: Object,
      },
      props: {
        type: Array,
        default: Array,
      },
      brands: {
        type: Array,
        default: Array,
      },
    },
    data() {
      return {
        opts: this.$route.query,
        show: false,
      }
    },
    methods: {
      changeForm(key, value) {
        console.log("Change form KEY: ", key, "VALUE: ", value)

        /// Обработка параметров

        this.opts = { "ct": 14 ,"brnd": [ 3, 27 ], "6d53": [ "2,0", "2,5", "3,0", "3,2" ], "page": 1 }
        console.log('FILTERS: ',this.opts )
      },
      appFilter() {
        this.show = false
        this.$router.push({ name: 'prods', query: {...this.opts} })
      },
      clearFilter() {
        console.log(this.opts.ct)
        this.$router.push({ name: 'prods', query: {"ct": this.opts.ct, "page": 1 } })
      }
    }
  }
</script>