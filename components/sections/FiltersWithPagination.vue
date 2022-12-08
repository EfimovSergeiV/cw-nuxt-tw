<template>
  <section id="filters-with-pagination">
    <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">

      <!-- <div class="">
        <ul>
          <li class="relative group">
            <button class="hover:opacity-30">THIS IS BUTTON</button>
            <div class="absolute top-0 left-0 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
              <div class="relative w-full">
                <p>Hallo welt</p>
              </div>
            </div>
          </li>
          <li></li>
          <li></li>
        </ul>
      </div> -->


      <div class="relative">

        <div class="flex justify-between items-center">

          <div class="bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 my-4 shadow-md py-2 px-2">
            <div class="group">
              <p class="text-xs md:text-sm mdi mdi-filter-outline"> Фильтр по товарам</p>

              <div class="absolute top-0 left-0 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 transform">

                <div class="pt-8">
                  <div class="bg-white dark:bg-gray-800 border shadow-md rounded-sm dark:border-gray-700 px-2">
                    <div class="columns-1 lg:columns-3 gap-4">
                      <div class="py-2">
                        <div class="break-inside-avoid-column border border-gray-200 hover:border-gray-300 dark:border-gray-700 dark:hover:border-gray-600 rounded-sm p-1">
                          
                          <div id="checkbox-form my-2">
                            <p class="text-sm mb-2 m-1">Производитель</p>
                            <div class="flex flex-wrap">

                              <div class="flex items-center mr-4 p-1" v-for="brand in brands" :key="brand.id">
                                <input :id="brand.id" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded-sm border-gray-300 focus:ring-blue-500 dark:focus:ring-gray-700 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label :for="brand.id" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ brand.brand }}</label>
                              </div>
                            
                            </div>                      
                          </div>

                        </div>
                      </div>
                      

                      <div class="" v-for="prop in props" :key="prop.id">

                        <div class="py-2" v-if="prop.propwidget == 'value'">
                          <div class="break-inside-avoid-column border border-gray-200 hover:border-gray-300 dark:border-gray-700 dark:hover:border-gray-600 rounded-sm p-1">
                            
                            <div id="checkbox-form my-2">
                              <p class="text-sm mb-2 m-1">{{ prop.name }}</p>
                              <div class="flex flex-wrap">
                                <p class="text-sm">{{ prop.prop_ops }}</p>
                                <div class="flex items-center mr-4 p-1" v-for="ops in prop.prop_ops" :key="ops.id">
                                  
                                  <input @change="changeForm(prop.prop_alias, ops.opskey )" :id="ops.opskey" type="checkbox" :value="ops.ops" class="w-4 h-4 text-blue-600 bg-gray-100 rounded-sm border-gray-300 focus:ring-blue-500 dark:focus:ring-gray-700 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                  <label :for="ops.opskey" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">VAL:{{ ops.ops }}</label>
                                
                                </div>
                              
                              </div>                      
                            </div>

                          </div>
                        </div>
                        <p class="text-sm">TAIL: {{ checkedNames }} OPTS: {{ opts }}</p>

                        <!-- { "ct": "14", "brnd": [ 8, 27 ], "6d53": [ "2,0", "2,5", "3,0", "3,2" ] } -->

                        <!-- <div class="py-2" v-if="prop.propwidget == 'range'">
                          <div class="break-inside-avoid-column border border-gray-200 hover:border-gray-300 dark:border-gray-700 dark:hover:border-gray-600 rounded-sm p-1">
                            <div id="range-form my-2">
                              <p class="text-sm m-1">{{ prop.name }}</p>
                              <div class="">

                                <div class="flex justify-start mx-1 my-2">
                                  <input type="text" id="min" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-gray-500 focus:border-gray-500 block w-24 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="3100" required>
                                  <p class="mx-2"> - </p>
                                  <input type="text" id="max" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-gray-500 focus:border-gray-500 block w-24 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="160000" required>
                                </div>

                                <div class="grid grid-cols-1">
                                  <div class="m-1">
                                    <div class="flex items-center mr-4 p-1" v-for="ops in prop.prop_ops" :key="ops.id">
                                      <p class="text-sm">{{ ops }}</p>
                                      <input :id="ops.id" type="checkbox" v-model="opts[prop.prop_alias]" :key="ops.id" :value="ops.opskey" class="w-4 h-4 text-blue-600 bg-gray-100 rounded-sm border-gray-300 focus:ring-blue-500 dark:focus:ring-gray-700 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                      <label :for="ops.id" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">RANGE:{{ ops.ops }}</label>
                                    </div>
                                  </div>
                                </div>

                              </div>
                            </div>
                          </div>
                        </div>                  -->
                      
                      </div>

                    </div> 
                    
                    
                    <div class="flex justify-end p-4">
                      <nuxt-link :to="{ name: 'prods', query: { ct: opts.ct, page: undefined }}" class="text-sm mx-2 mdi mdi-filter-variant-minus text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"> Очистить</nuxt-link>
                      <nuxt-link :to="{ name: 'prods', query: { ...opts, page: undefined }}" class="text-sm mx-2 mdi mdi-filter-variant-plus text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"> Применить</nuxt-link>
                    </div>
                    
                    <p class="text-sm">OPTS: {{ opts }}</p>

                  </div>
                </div>
                </div>                
              </div>
            </div>




          <div class="">
            <Pagination :response="response" />
          </div>
        </div>


      </div>      
    </div>

  </section>
</template>

<script>
  import Pagination from '~/components/Pagination.vue'

  export default {
    name: 'FiltersWithPagination',
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
        // tail: { "ct": "14", "brnd": [ 3, 27 ], "6d53": [ "2,0", "2,5", "3,0", "3,2" ] }
      }
    },
    methods: {
      changeForm(key, value) {
        console.log("Change form KEY: ", key, "VALUE: ", value)
        this.opts = { "ct": 14 ,"brnd": [ 3, 27 ], "6d53": [ "2,0", "2,5", "3,0", "3,2" ]}
        console.log('OPTS: ',this.opts )
      },
    }
  }
</script>