<template>
  <section id="filters-with-pagination">
    <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">

      <div class="relative">

        <div class="flex justify-between items-center">

          <div class="bg-white group rounded-sm border dark:border-gray-700 dark:bg-gray-800 my-4 shadow-md py-1 px-2">
            <p class="text-sm cursor-pointer mdi mdi-filter-outline"> Фильтр по товарам</p>

            <div class="invisibleee left-0 group-hover:visible delay-500 absolute bg-white dark:bg-gray-800 border shadow-md rounded-sm dark:border-gray-700 w-full top-0">
              <div class="bg-white group rounded-sm dark:bg-gray-800 my-4 py-1 px-2">
                <p class="text-sm mdi mdi-filter"> Фильтр по товарам</p>
              </div>

              <div class="px-2">
                <div class="columns-3 lg:columns-4">
                  <div class="break-inside-avoid-column">
                    
                    <div id="checkbox-form my-2">
                      <p class="text-base mb-2 mt-1"> Форма чекбокс</p>
                      <div class="flex flex-wrap">
                        <p class="flex items-center text-sm mx-1"><input type="checkbox" class="mr-1 appearance-none indeterminate:bg-gray-300" /> Telwin</p>
                        <p class="flex items-center text-sm mx-1"><input type="checkbox" class="mr-1 appearance-none indeterminate:bg-gray-300" /> Aurora</p>
                        <p class="flex items-center text-sm mx-1"><input type="checkbox" class="mr-1 appearance-none indeterminate:bg-gray-300" /> Grovers</p>
                        <p class="flex items-center text-sm mx-1"><input type="checkbox" class="mr-1 appearance-none indeterminate:bg-gray-300" /> Linkoln Elektric</p>
                        <p class="flex items-center text-sm mx-1"><input type="checkbox" class="mr-1 appearance-none indeterminate:bg-gray-300" /> ESAB</p>
                        <p class="flex items-center text-sm mx-1"><input type="checkbox" class="mr-1 appearance-none indeterminate:bg-gray-300" /> Кедр</p>
                        <p class="flex items-center text-sm mx-1"><input type="checkbox" class="mr-1 appearance-none indeterminate:bg-gray-300" /> Fubag</p>
                      </div>                      
                    </div>

                  </div>

                  <div class="break-inside-avoid-column">
                    <div id="range-form my-2">
                      <p class="text-base my-1"> Форма диапазон</p>
                      <div class="">

                        <div class="flex justify-start mx-1 my-2">
                          <input type="text" id="min" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-gray-500 focus:border-gray-500 block w-24 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="3100" required>
                          <p class="mx-2"> - </p>
                          <input type="text" id="max" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-gray-500 focus:border-gray-500 block w-24 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="160000" required>
                        </div>
                        <div class="grid grid-cols-1">
                          <div class=""><p class="flex items-center text-sm mx-1"><input type="checkbox" class="mr-1 appearance-none indeterminate:bg-gray-300" /> 3100 - 5000</p></div>
                          <div class=""><p class="flex items-center text-sm mx-1"><input type="checkbox" class="mr-1 appearance-none indeterminate:bg-gray-300" /> 5000 - 100000</p></div>
                          <div class=""><p class="flex items-center text-sm mx-1"><input type="checkbox" class="mr-1 appearance-none indeterminate:bg-gray-300" /> 100000 - 160000</p></div>
                        </div>

                      </div>
                    </div>
                  </div>

                </div>                
              </div>

              <div class="flex justify-end p-4">
                <button class="text-sm mx-2 mdi mdi-filter-variant-minus"> Очистить</button>
                <button class="text-sm mx-2 mdi mdi-filter-variant-plus"> Применить</button>
              </div>

            </div>

          </div>

          <div class="">
            <Pagination />
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
      async asyncData({ query, $axios }) {
        const cts = await $axios.$get('c/ct/')
        const brands = await $axios.$get(`c/ctbrand/`, {params: { ct: query.ct },})
        const props = await $axios.$get(`c/props/`, {params: { ct: query.ct },})
        const rands = await $axios.$get(`c/random/`, {params: { ct: query.ct },})
        const response = await $axios.$get(`c/prods/`, {params: query,})
        const breadcrumbs = await $axios.$get(`c/breadcrumb/`, {params: query,})

        return { cts, response, brands, props, rands, breadcrumbs }
      },
      data() {
        return {
          stat: false,
        }
      },
  }
</script>