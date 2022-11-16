<template>
  <section id="filters-with-pagination">
    <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">

      <div class="relative z-30">

        <div class="flex justify-between items-center">

          <div class="bg-white group rounded-sm border dark:border-gray-700 dark:bg-gray-800 my-4 shadow-md py-1 px-2">
            <p class="text-sm cursor-pointer mdi mdi-filter-outline"> Фильтр по товарам</p>

            <div class="ii invisible left-0 group-hover:visible delay-500 absolute bg-white dark:bg-gray-800 border shadow-md rounded-sm dark:border-gray-700 w-full top-0">
              <div class="bg-white group rounded-sm dark:bg-gray-800 my-4 py-1 px-2">
                <p class="text-sm mdi mdi-filter"> Фильтр по товарам</p>
              </div>

              <!-- <p>{{ props }}</p> -->

              <div class="px-2">
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

                    <div class="py-2" v-if="prop.propwidget == 'range'">
                      <div class="break-inside-avoid-column border border-gray-200 hover:border-gray-300 dark:border-gray-700 dark:hover:border-gray-600 rounded-sm p-1">
                        
                        <div id="checkbox-form my-2">
                          <p class="text-sm mb-2 m-1">{{ prop.name }}</p>
                          <div class="flex flex-wrap">

                            <div class="flex items-center mr-4 p-1" v-for="ops in prop.prop_ops" :key="ops.id">
                              <input :id="ops.id" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded-sm border-gray-300 focus:ring-blue-500 dark:focus:ring-gray-700 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                              <label :for="ops.id" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ ops.ops }}</label>
                            </div>
                          
                          </div>                      
                        </div>

                      </div>
                    </div>

                    <div class="py-2" v-if="prop.propwidget == 'value'">
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
                                  <input :id="ops.id" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded-sm border-gray-300 focus:ring-blue-500 dark:focus:ring-gray-700 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                  <label :for="ops.id" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ ops.ops }}</label>
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

              <div class="flex justify-end p-4">
                <nuxt-link to="#" class="text-sm mx-2 mdi mdi-filter-variant-minus text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"> Очистить</nuxt-link>
                <nuxt-link to="#" class="text-sm mx-2 mdi mdi-filter-variant-plus text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"> Применить</nuxt-link>
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
        type: Array,
        default: Array,
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
        stat: false,
      }
    },
  }
</script>