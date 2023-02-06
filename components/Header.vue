<template>
  <div class="mx-auto max-w-7xl px-4 lg:max-w-7xl lg:px-8 pt-2">


    <div class="relative">
      <div id="main-info" class="flex justify-between items-center gap-2 my-2 md:gap-6">
 
        <div class="my-4">
          <div class="flex justify-center md:justify-start">
            <nuxt-link to="/">
              <img src="../assets/images/blue-svar.png" alt="glsvar-logo" class=" h-14 md:h-16" />
            </nuxt-link>
          </div>
        </div>

        <div class="">
          <div id="color-mode" class="flex gap-1">

            <div class="flex gap-2 bg-white hover:bg-gray-100 dark:bg-gray-800 hover:dark:bg-gray-700 border border-gray-300 hover:border-gray-400 dark:border-gray-700 hover:dark:border-gray-600 px-2 py-1 rounded-2xl">
              <ColorScheme tag="span">
                <span v-if="$colorMode.preference === 'system'" @click="$colorMode.preference = 'dark'" class="cursor-pointer text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"><p class="text-base mdi mdi-laptop"></p></span>
                <span v-if="$colorMode.preference === 'dark'" @click="$colorMode.preference = 'light'" class="cursor-pointer text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"><p class="text-base mdi mdi-weather-night"></p></span>
                <span v-if="$colorMode.preference === 'light'" @click="$colorMode.preference = 'system'" class="cursor-pointer text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"><p class="text-base mdi mdi-white-balance-sunny"></p></span>
              </ColorScheme>
            </div>

            <div class="flex gap-3 bg-white hover:bg-gray-100 dark:bg-gray-800 hover:dark:bg-gray-700 border border-gray-300 hover:border-gray-400 dark:border-gray-700 hover:dark:border-gray-600 px-3 py-1 rounded-2xl">
              <nuxt-link :to="{ name: 'person' }" class="mdi mdi-account text-base cursor-pointer text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"></nuxt-link>
              <nuxt-link :to="{ name: 'compare' }" class="mdi mdi-compare text-base cursor-pointer text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"></nuxt-link>
              <nuxt-link :to="{ name: 'person' }" class="mdi mdi-heart-outline text-base cursor-pointer text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"></nuxt-link>
            </div>

          </div>
        </div>


      </div>

    </div>


    <div class="flex justify-end items-center">
      <div class="">
          <ul class="flex items-center flex-row space-x-3">

            <li class="">
              <a href="mailto:zakaz@glsvar.ru" class="uppercase mdi mdi-email-open-outline text-xs text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"> zakaz@glsvar.ru</a>
            </li>

            <li>
              <a :href="`tel:${shop.phone}`" class="uppercase mdi mdi-phone text-xs text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">{{ shop.phone }}</a>
            </li>


            <li id="navabar-menu" class=" group">
              <p hover="true" id="change-city" data-collapse-toggle="change-city" class="uppercase mdi mdi-map-marker cursor-pointer text-xs text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 mt-1"> {{ region }}</p>
              
              <div class="absolute top-0 right-0 transition group-hover:translate-y-4 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50">

                <div class="menu-section pt-5">
                  <div id="change-city-dropdown" class="rounded-md bg-white">

                    
                    <div class="px-2 py-4">

                      <div class="flex gap-2 my-4 text-sm text-gray-700">
                        <p>Сейчас:</p>
                        <p> {{ region }}</p>
                      </div>


                      <div class="flex items-center justify-center gap-1">
                        <div class="text-gray-700">
                          <vue-autosuggest
                            v-model="query"
                            @focus="focusMe"
                            @click="clickHandler"
                            @input="onInputChange"
                            @selected="onSelected"
                            :suggestions="filteredOptions"
                            :get-suggestion-value="getSuggestionValue"
                            :should-render-suggestions="shouldRenderSuggestions"
                            :input-props="{ id:'', placeholder:'Введите название' }"
                            :section-configs="{ 'default': { limit: 6 } }"
                            class="">

                            <div slot-scope="{suggestion}" class="text-gray-700 hover:text-gray-900 bg-white rounded-sm border my-2 mx-1 py-2 px-2 cursor-pointer">
                              <div class="text-sm mx-1">{{ suggestion.item }}</div>
                            </div>                              

                          </vue-autosuggest>
                        </div>

                      </div>





                    </div>


                  </div>
                </div>
                
              </div>
            </li>



          </ul>
        </div>
    </div>


    <div class="grid grid-cols-1 md:grid-cols-2 items-center">

      <div class="">
        <!-- <div class="flex justify-center md:justify-start">
          <nuxt-link to="/">
            <img src="../assets/images/blue-svar.png" alt="glsvar-logo" class=" h-14 md:h-16" />
          </nuxt-link>
        </div> -->
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
                        <nuxt-link :to="{ name: 'product-id', params: { id: searchresult.id } }" class="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
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

  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import cities from '@/cities.js';
import { VueAutosuggest } from "vue-autosuggest";


  export default {
      name: 'Header',
      components: {
        VueAutosuggest
    },
    // props: {
    //   shops: {
    //     type: Array,
    //     default: Array,
    //   },
    // },
    data() {
      return {
        search: '',
        query: "",
        selected: '',
        cities: cities,
        searchResult: [],
      }
    },
    watch: {
      search() {
        this.debouncedGetAnswer()
      },
      selected() {
        this.changeRegion(this.selected.item)
        this.findSelectedShop()
      }
    },
    created() {
      this.findSelectedShop()
      this.debouncedGetAnswer = this.lodash.debounce(this.goSearch, 300)
    },
    computed: {
      ...mapState({
        region: (state) => state.region,
        shop: (state) => state.shop,
        shops: (state) => state.shops,
      }),
      filteredOptions() {
        return [
          { 
            data: this.cities.filter(option => {
              return option.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
            })
          }
        ];
      },
    },
    methods: {
      ...mapActions({
        changeRegion: 'changeRegion',
        showShopsModal: 'showShopsModal',
        selectShop: 'selectShop',
        // delProductToCart: 'modules/cart/delProductToCart',
        // addToComparison: 'modules/comparison/addToComparison',
        // delToComparison: 'modules/comparison/delToComparison',
        // addProductToFav: 'modules/favorites/addProductToFav',
        // delProductToFav: 'modules/favorites/delProductToFav',
      }),
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
        },
      findSelectedShop() {
        this.shops.forEach((element) => {
          if (element.city.toLowerCase() === this.region.toLowerCase()) {
            this.selectShop(element)
          }
        })
      },

      clickHandler(item) {
      // event fired when clicking on the input
      },
      onSelected(item) {
        this.selected = item;
      },
      onInputChange(text) {
        // event fired when the input changes
        console.log(text)
      },
      /**
       * This is what the <input/> value is set to when you are selecting a suggestion.
       */
      getSuggestionValue(suggestion) {
        return suggestion.item;
      },
      shouldRenderSuggestions (size, loading) {
        // This is the default behavior
        return size >= 0 && !loading
      },
      focusMe(e) {
        console.log('FocusEvent') // FocusEvent
      } 


    }
  }
  </script>
