<template>

  <div class="relative z-50 " aria-labelledby="modal-title" role="dialog" aria-modal="true">


    <div class="fixed inset-0 overflow-y-hidden overscroll-y-none bg-gray-500/50 backdrop-blur-sm">
      <div class="flex min-h-full justify-center p-4 text-center items-center">

        <div class="relative transform overflow-hidden rounded-lg bg-gray-700 text-left shadow-xl transition-all sm:my-8 sm:max-w-4xl mx-4">
                  

          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                  Запрос стоимости товара
              </h3>
              <button @click="hideRequestModal" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                  <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  <span class="sr-only"></span>
              </button>
            </div>


            <div class="p-6 space-y-6 h-72 xl:h-96 overflow-y-auto">
              <div class="grid grid-cols-1 justify-center md:flex gap-4">
                <div class="flex items-center justify-center rounded-sm w-full bg-white ">
                  <div class="flex items-center justify-centerp-1 h-[157px] w-[215px]">
                    <img 
                      :src="requestPrice.preview_image"
                      onerror="this.src='../../noimage-235-177.png'"
                      :alt="requestPrice.preview_image"
                      loading=lazy
                      width="235px"
                      height="177px"
                      class="p-4 rounded-lg" 
                    />
                  </div>
                </div>
                <div class="">
                  <div class="flex items-start justify-end">
                    <p class="text-xs">Артикул: {{ requestPrice.vcode }}</p>
                  </div>
                  <p class="text-xl">{{ requestPrice.name }}</p>
                  <div class="mt-3">
                    
                    <div class="">
                      <div class="" v-if="requestPrice.description.length > 300">
                        <p class="text-sm">{{ requestPrice.description.slice(0, 300) }}...</p>
                        <!-- <div class="flex justify-end">
                          <nuxt-link class=" text-xs border-b" :to="{ name: 'product-id', params: { id: requestPrice.id } }">перейти к товару</nuxt-link>
                        </div> -->
                        
                      </div>
                      <div class="" v-else>
                        <p class="text-sm">{{ requestPrice.description }}</p> 
                      </div>                      
                    </div>

                  </div>                  
                </div>
              </div>
              <div class="">
                <p class="text-xs my-1">Характеристики:</p>
                <div class="columns-1 lg:columns-2 gap-4">
                  <div v-for="param in requestPrice.propstrmodel" :key="param.id" class="border-b border-gray-300 hover:border-gray-400 dark:border-gray-600 dark:hover:border-gray-500">
                    <div class="flex justify-between">
                      <div class=""><small>{{ param.name }} :</small></div>
                      <div class="text-right"><small>{{ param.value }}</small></div>                
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div class="grid grid-cols-2 px-4 pt-4 pb-1 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
              <div class="">
                <div class="text-xs flex items-center">
                  <p class="my-1 mr-2">Ваш город {{ region }}</p>
                  <p>(</p>
                  <button @click="regionForm = !regionForm">Изменить</button>
                  <p>)</p>
                </div>
                
                <transition name="fade">
                  <input v-if="regionForm" v-model="regionHand" type="text" id="city" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-50 dark:border-gray-600 placeholder-gray-600 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ваш город">
                </transition>
              </div>
            </div>

            <div class="grid grid-cols-1 gap-2 px-4 pb-4">
              <div class="">
                <p class="text-xs my-1">Как с вами связаться?</p>
                <input v-model="contact" type="text" id="contacts" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-50 dark:border-gray-600 placeholder-gray-600 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ваш номер телефона или email">
              </div>
              <div class="flex justify-end items-end">
                <div class="">
                  <button @click="sendRequestPrice" class="text-white px-4 py-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Запросить стоимость</button>
                </div>
              </div>
            </div>
            
          </div>


        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { mapActions, mapState } from 'vuex';

  export default {
      name: 'RequestPriceModal',
      components: {
    },
    props: {
      cts: {
        type: Array,
        default: Array,
      },
    },
    data() {
      return {
        contact: null,
        sended: false,
        regionForm: false,
        regionHand: null,
      }
    },
    // watch: {
    //   regionHand() {
    //     this.changeRegion(this.regionHand)
    //   }
    // },
    computed: {
      ...mapState({
        region: (state) => state.region,
        adress: (state) => state.adress,
        requestPrice: (state) => state.modules.cart.requestPrice,
        pricerequest: (state) => state.modules.pricerequest,
      }),
    },
    methods: {
      ...mapActions({
        addToast: 'addToast',
        displayForm: 'displayForm',
        changeRegion: 'changeRegion',
        showCartModal: 'modules/cart/showCartModal',
        delProductToCart: 'modules/cart/delProductToCart',
        incProductToCart: 'modules/cart/incProductToCart',
        decProductToCart: 'modules/cart/decProductToCart',
        delProductToCart: 'modules/cart/delProductToCart',
        hideRequestModal: 'modules/cart/hideRequestModal',
        addToComparison: 'modules/comparison/addToComparison',
        delToComparison: 'modules/comparison/delToComparison',
        addProductToFav: 'modules/favorites/addProductToFav',
        delProductToFav: 'modules/favorites/delProductToFav',
      }),
      sendRequestPrice() {
        let city = this.region

        if (this.adress) {
          city = String(this.adress)
        }

        if (this.regionHand) {
          city = String(this.regionHand)
        }

        this.$axios
          .$post('o/request-price/', {
            city: city,
            contact: this.contact,
            product: `id: ${this.requestPrice.id} vc: ${this.requestPrice.vcode} name: ${this.requestPrice.name}`,
          })
          .then((resp) => {
            this.addToast('Запрос отправлен, мы свяжемся с вами в ближайшее время.')
            this.hideRequestModal()
          })
          .catch(() => {
            this.hideRequestModal
            this.addToast('Произошла ошибка.')
          })
        },
      },
    }
</script>