<template>
  <section id="filters">


    <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">

      <div class="flex items-center justify-between py-4">
        <!-- <button @click="(show = !show)" class="py-2.5 md:py-2 px-3 text-xs md:text-sm leading-tight text-gray-500 bg-white rounded-r-sm border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"> Фильтр по товарам</button> -->
        
        <div class="flex gap-2 items-center ">
          <button @click="(show = !show)" class="py-2.5 md:py-2 px-3 text-xs md:text-sm leading-tight text-gray-500 bg-white rounded-r-sm border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"> Фильтр</button>
          <button @click="(show = !show)" class="py-2.5 md:py-2 px-3 text-xs md:text-sm leading-tight text-gray-500 bg-white rounded-r-sm border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"> Новые</button>
          <button @click="(show = !show)" class="py-2.5 md:py-2 px-3 text-xs md:text-sm leading-tight text-gray-500 bg-white rounded-r-sm border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"> Дешевле</button>
          <button @click="(show = !show)" class="py-2.5 md:py-2 px-3 text-xs md:text-sm leading-tight text-gray-500 bg-white rounded-r-sm border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"> Дороже</button>
        </div>
        
        <Pagination :response="response" />  
      </div>


      

    </div>


    <transition tag="div" name="left-emergence">
      <div v-if="(show && $nuxt.$route.name === 'prods')" class="fixed z-40 top-0 left-0">
        <div class="bg-gradient-to-br from-gray-300 to-gray-200 dark:from-gray-900 dark:to-gray-800 w-screen md:w-[420px] h-screen overflow-y-auto border-r border-gray-300 dark:border-gray-700">
          <div class="p-4 relative">


            <div class="flex items-center justify-between">
              <div class=""><p class="">Фильтр по товарам</p></div>
              <div class=""><button @click="show = !show" class="mdi mdi-24px mdi-close cursor-pointer"></button></div>
            </div>

            <div class="pb-14">

              <div class="py-2">
                  <div class="break-inside-avoid-column border border-gray-300 hover:border-gray-400 dark:border-gray-700 dark:hover:border-gray-600 rounded-sm p-1">
                    
                    <div id="checkbox-form my-2">
                      <p class="text-sm mb-2 m-1">Производитель</p>

                      <div class="flex flex-wrap">
                        <div class="flex items-center mr-4 p-1" v-for="brand in brands" :key="brand.id">
                          
                          <input @change="changeForm('brnd', brand.id )" v-model="filte['brnd']" :id="brand.id" :value="brand.id" type="checkbox"  class="w-4 h-4 text-blue-600 bg-gray-100 rounded-sm border-gray-300 focus:ring-blue-500 dark:focus:ring-gray-700 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                          <label :for="brand.id" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ brand.brand }}</label>
                        
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
                          
                          <input @change="changeForm(prop.prop_alias, ops.opskey )" v-model="filte[prop.prop_alias]" :id="ops.opskey" :value="ops.opskey" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded-sm border-gray-300 focus:ring-blue-500 dark:focus:ring-gray-700 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                          <label :for="ops.opskey" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ ops.ops }}</label>
                        
                        </div>
                      
                      </div>                      
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>

          <div class="absolute bottom-0 right-0 w-full">
            <div class="bg-gray-300 dark:bg-gray-800">
              <div class="flex justify-end p-4">
                <button @click="clearFilter" class="text-sm mx-2 mdi mdi-filter-variant-minus text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"> Очистить</button>
                <button @click="appFilter" class="text-sm mx-2 mdi mdi-filter-variant-plus text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"> Применить</button>
              </div>                
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
        filter: {},
        filte: {}, ///{ "2rzq": [], "6d53": [] },
        count: 1,
        checkedNames: []
      }
    },
    methods: {
      changeForm(key, value) {
        console.log()
        if (key in this.filter) {
          // this.filter[key].push(value.toString())
        } else {
          this.filter[key] = [value.toString(),]
          this.filte[key] = [value.toString(),]
        }
      },
      appFilter() {
        this.show = false
        this.$router.push({ name: 'prods', query: {"ct": this.opts.ct, ...this.filte, "page": 1 } })
      },
      clearFilter() {
        this.filte = {}
        this.filter = {}
        this.$router.push({ name: 'prods', query: {"ct": this.opts.ct, "page": 1 } })
      }
    }
  }
</script>