<template>
  <div class="mx-auto max-w-7xl px-4 lg:max-w-7xl lg:px-8 pt-2">


    <div id="main-info" class="flex justify-between gap-2 my-2 md:gap-6">
 
      <div id="color-mode" class="">

        <ColorScheme placeholder="ColorMode" tag="span">
          <span class="text-sm">Color mode: </span>
          <span v-if="$colorMode.preference === 'system'" @click="$colorMode.preference = 'dark'" class="cursor-pointer text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"> <b>{{ $colorMode.preference }}</b></span>
          <span v-if="$colorMode.preference === 'dark'" @click="$colorMode.preference = 'light'" class="cursor-pointer text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"> <b>{{ $colorMode.preference }}</b></span>
          <span v-if="$colorMode.preference === 'light'" @click="$colorMode.preference = 'system'" class="cursor-pointer text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"> <b>{{ $colorMode.preference }}</b></span>

          <span v-if="$colorMode.preference === 'system'">(<i>{{ $colorMode.value }}</i>)</span>
        </ColorScheme>

      </div>
      
      <div class="grid md:grid-cols-3 text-right gap-4">
        <a href="mailto:zakaz@glsvar.ru" class="mdi mdi-email-open-outline text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"> zakaz@glsvar.ru</a>
        <a href="tel:+78112606005" class="mdi mdi-phone text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"> +7 (8112) 60-60-05</a>
        <p class="mdi mdi-map-marker cursor-pointer text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"> Cанкт-Петербург</p>          
      </div>
      
    </div>


    <div class="grid grid-cols-1 md:grid-cols-2 items-center">

      <div class="my-4">
        <div class="flex justify-center md:justify-start">
          <nuxt-link to="/">
            <img src="../assets/images/blue-svar.png" width="380" />
          </nuxt-link>
        </div>
      </div>

      
      <div class="group my-4">

        <label class="relative block">
          
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <div class="mdi mdi-magnify text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"></div>
          </span>
          <input v-model="search" class="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 placeholder:text-slate-500 focus:ring-0 peer block bg-white dark:bg-gray-800 dark:placeholder:text-slate-600 w-full border dark:border-slate-600 border-slate-300 rounded-sm py-2 pl-7 pr-3 shadow-sm focus:outline-none focus:border-sky-800 focus:ring-sky-800 sm:text-sm" placeholder="Поиск по товарам" type="text" name="search"/>


          <div class="absolute z-40 w-full invisible group-focus-within:visible hover:visible group-hover:opacity-100">
            <div class="container">
              <div class="">
                <div class="search-result bg-white border-gray-200 shadow-sm border dark:bg-gray-800 dark:border-gray-600">
                  
                  <div v-if="searchResult.length > 0" class="h-96 overflow-y-auto">

                    <div v-for="searchresult in searchResult" :key="searchresult.id" class="px-4 py-2">
                      <div>
                        <nuxt-link to="#" class="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
                          {{ searchresult.name }}
                        </nuxt-link>                      
                      </div>
                    </div>

                  </div>

                  <div v-else class="px-4 py-4">
                    <p class="text-sm">Начните вводить запрос</p>
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


    <div class="border dark:border-gray-700 rounded-sm">

      <hooper
        :center-mode="true"
        :wheel-control="false"
        :auto-play="false"
        :play-speed="7000"
        style="height: 100%;"
        class="main-hooper"
      >
        <slide v-for="i in 10" :key="i" class="">
          <img
            src="../assets/images/header-banner.png"
            style="width: 100%;"
            class="rounded-sm"
            onerror="this.src='./noimage-960-540.jpg'"
          />
        </slide>
        <hooper-navigation slot="hooper-addons"></hooper-navigation>
        <hooper-pagination slot="hooper-addons"></hooper-pagination>
      </hooper>

    </div>

  </div>
</template>

<script>
  import {
    Hooper,
    Slide,
    Navigation as HooperNavigation,
    Pagination as HooperPagination,
  } from 'hooper'

  export default {
      name: 'Header',
      components: {
        Hooper,
        Slide,
        HooperNavigation,
        HooperPagination,
    },
    // props: {
    //   searchresult: {
    //     type: Array,
    //     default: Array,
    //   },
    // },
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