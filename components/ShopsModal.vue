<template>


    <div class="relative z-50 " aria-labelledby="modal-title" role="dialog" aria-modal="true">

            <div class="fixed inset-0 overflow-y-hidden overscroll-y-none">
              <div class="flex min-h-full justify-center p-4 text-center items-center sm:p-0">

                <div class="relative transform overflow-hidden rounded-lg bg-gray-700 text-left shadow-xl transition-all sm:my-8 sm:max-w-4xl mx-4 w-10/12">

                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                      <div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                            Выберите город
                        </h3>
                        <button @click="showShopsModal" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                      </div>
                      
                      
                      <!-- <div v-for="shop in shops" :key="shop.id">
                        {{ shop.adress }}
                      </div> -->

                        <div class="px-2 py-4">

                        
                          <div v-if="selected">
                            Сейчас: <code>{{ selected.item }}, <br /> {{selected}}</code>
                          </div>

                          <div class="">
                            <vue-autosuggest
                              v-model="query"
                              :suggestions="filteredOptions"
                              :get-suggestion-value="getSuggestionValue"
                              :should-render-suggestions="shouldRenderSuggestions"
                              :input-props="{ id:'', placeholder:'Введите название' }"
                              :section-configs="{ 'default': { limit: 10 } }"
                              class="text-gray-500">

                              <div slot-scope="{suggestion}" style="display: flex; align-items: center;">
                                <!-- <img :style="{ display: 'flex', width: '25px', height: '25px', borderRadius: '15px', marginRight: '10px'}" :src="suggestion" /> -->
                                <div class="text-gray-300">{{ suggestion.item }}</div>
                              </div>

                            </vue-autosuggest>

                          </div>

                        </div>

                      </div>


                      <div class="flex justify-end items-end px-2 py-2 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">

                        <div class="">
                          <button data-modal-toggle="defaultModal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-2">Сохранить</button>
                        </div>

                      </div>
                    </div>

                      <!-- <div class="">
                        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mx-1 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-400 to-blue-800 group-hover:from-blue-400 group-hover:to-blue-800 hover:text-gray-100 dark:text-gray-300 hover:dark:text-gray-100 focus:ring-1 focus:outline-none focus:ring-cyan-200 dark:focus:ring-blue-700">
                          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                              В корзину
                          </span>
                        </button>
                        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mx-1 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-400 to-blue-800 group-hover:from-blue-400 group-hover:to-blue-800 hover:text-gray-100 dark:text-gray-300 hover:dark:text-gray-100 focus:ring-1 focus:outline-none focus:ring-cyan-200 dark:focus:ring-blue-700">
                          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                              выбрать
                          </span>
                        </button>
                      </div> -->

                    </div>


            </div>
        </div>


</template>

<script>
import { mapActions, mapState } from 'vuex';
import { VueAutosuggest } from "vue-autosuggest";
import cities from '@/cities.js'

  export default {
      name: 'ShopModal',
      components: {
        VueAutosuggest
    },
    props: {
      shops: {
        type: Array,
        default: Array,
      },
    },
    data() {
      return {
        selected: { item : "Псков"},
        cities: cities,
        query: "",
      }
    },
    methods: {
      ...mapActions({
        showShopsModal: 'showShopsModal',
      }),
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
    },
    computed: {
      ...mapState({
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
      // sectionConfigs: {
      //   'default': {
      //       limit: 6,
      //       onSelected: function(item, originalInput) {
      //           console.log(item, originalInput, `Selected "${item.item}"`);
      //       }
      //   },
      // }
    },
  }
</script>