<template>
  <section id="filters-with-pagination">
    <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">

      <div class="relative">

        <div class="flex justify-between items-center">

          <div class="bg-white group rounded-sm border dark:border-gray-700 dark:bg-gray-800 my-4 shadow-md py-1 px-2">
            <p class="text-sm cursor-pointer">Фильтр по товарам</p>

            <div class="invisible left-0 group-hover:visible delay-500 absolute bg-white dark:bg-gray-800 border shadow-md rounded-sm dark:border-gray-700 w-full top-0">
              <div class="bg-white group rounded-sm dark:bg-gray-800 my-4 py-1 px-2">
                <p class="text-sm">Фильтр по товарам</p>
              </div>

              <div class="p-2">
                <div class="columns-3 lg:columns-4">
                  <div class="break-inside-avoid-column">
                    
                    <div id="checkbox-form">
                      <p class="text-base my-1"> Форма чекбокс</p>
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

                    <div id="range-form">

                    </div>

                  </div>
                </div>                
              </div>

              <div class="flex justify-end p-4">
                <button class="text-sm">Применить</button>
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