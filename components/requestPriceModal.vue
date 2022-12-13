<template>

  <div class="relative z-50 " aria-labelledby="modal-title" role="dialog" aria-modal="true">


    <div class="fixed inset-0 overflow-y-hidden overscroll-y-none">
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


            <div v-if="sended" class="">
              <div class="flex items-center px-6 h-40">
                <p class="text-base">
                  Мы уточним стоимость товара и сразу с вами свяжемся по указанным вами контактам
                </p>                
              </div>
            </div>

            <div v-else class="p-6 space-y-6 h-96 overflow-y-auto">
              <div class="grid justify-center md:flex gap-4">
                <div class="flex justify-center w-full">
                  <div class="bg-white rounded-sm p-1 w-[235px]">
                    <img 
                      :src="requestPrice.preview_image"
                      onerror="this.src='../../noimage-235-177.jpg'"
                      :alt="requestPrice.preview_image"
                      loading=lazy
                      width="235"
                      height="177"
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
                    <p class="text-sm">{{ requestPrice.description }}</p>
                  </div>                  
                </div>
              </div>
              <div class="">
                <p class="text-sm my-2">Характеристики:</p>
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






            <div class="grid grid-cols-2 px-4 py-4 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
              <div class="">
                <p class="text-xs my-1">Ваш номер телефона или email:</p>
                <input v-model="contact" type="text" id="contacts" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500" :placeholder="placeholder">
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
      name: 'requestPriceModal',
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
        city: "Псков",
        contact: null,
        sended: false,
      }
    },
    computed: {
      ...mapState({
        requestPrice: (state) => state.modules.cart.requestPrice,
        pricerequest: (state) => state.modules.pricerequest,
      }),
    },
    methods: {
      ...mapActions({
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
        this.$axios
          .$post('o/request-price/', {
            city: this.city,
            contact: this.contact,
            product: `id: ${this.requestPrice.id} vc: ${this.requestPrice.vcode} name: ${this.requestPrice.name}`,
          })
          .then((resp) => {
            this.sended = true
            console.log("Заявка отправлена")
          })
          .catch(() => {
            console.log("Произошла ошибка")
          })
        },
      },
    }
</script>