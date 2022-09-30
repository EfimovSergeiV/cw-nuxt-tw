<template>
  <div class="mx-auto max-w-7xl px-4 lg:max-w-7xl lg:px-8 py-4">
    <div class="grid grid-cols-1 md:grid-cols-2 items-end justify-items-stretch">

      <div class="grid justify-items-center md:justify-items-start my-3">
        <nuxt-link to="/">
          <img src="blue-svar.png" width="380" />
        </nuxt-link>
      </div>
      
      <div class="group my-3">

        <label class="relative block">
          
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <div class="mdi mdi-24px mdi-store-search text-slate-800"></div>
          </span>
          <input v-model="search" class="text-gray-900 placeholder:text-slate-800 block bg-white w-full border border-slate-300 rounded-sm py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-800 focus:ring-sky-800 sm:text-sm" placeholder="Поиск по товарам" type="text" name="search"/>


          <div class="absolute z-40 w-full invisible group-focus-within:visible hover:visible group-hover:opacity-100">
            <div class="container">
              <div class="">
                <div class="search-result bg-white border-gray-200 shadow-sm border dark:bg-gray-800 dark:border-gray-600">
                  
                  <div v-if="searchResult.length > 0" class="h-96 overflow-y-auto">

                    <div v-for="searchresult in searchResult" :key="searchresult.id" class="px-4 py-2">
                      <div>
                        <nuxt-link to="#" class="text-gray-500 dark:text-gray-300">
                          {{ searchresult.name }}
                        </nuxt-link>                      
                      </div>
                    </div>

                  </div>

                  <div v-else class="px-4 py-4">
                    <p>Начните вводить запрос</p>
                  </div>

                  <!-- <div class="px-4 py-4 bg-white shadow-sm dark:bg-gray-900 dark:border-gray-600">
                    <nuxt-link to="#">
                       Показать все результаты
                      <span class="inline-block items-center">
                       <div class="mdi mdi-arrow-right-bold"></div>
                      </span>
                    </nuxt-link>
                  </div> -->

                </div>
              </div>
            </div>
          </div>

        </label>

      </div>
      
    </div>
  </div>
</template>

<script>    
  export default {
      name: 'Header',
      components: {
    },
    props: {
      searchresult: {
        type: Array,
        default: Array,
      },
    },
    data() {
      return {
        search: '',
        searchResult: [],
      }
    },
    watch: {
      search() {
        this.debouncedGetAnswer()
      },
    },
    created() {
      this.debouncedGetAnswer = this.lodash.debounce(this.goSearch, 300)
    },

    methods: {
      goSearch() {
      if (this.search.length > 3) {
        this.$axios
          .$post('/c/search/', { name: this.search.toLowerCase() })
          // .then((response) => {
          //   this.searchResult = response
          // })
          .then((response) => {
            if (response.length > 0) {
              this.searchResult = response
            } else {
              this.searchResult = [{"id":0,"name":"По запросу ничего не найдено"}]
            }
          })
      }
    }
  }
}
  </script>