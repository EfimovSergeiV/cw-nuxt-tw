<template>

  <!-- <div>

    <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenter" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
      <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
        <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
          <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
            <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalScrollableLabel">
              Modal title
            </h5>
            <button type="button"
              class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
              data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body relative p-4">
            <p>This is a vertically centered modal.</p>
          </div>
          <div
            class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
            <button type="button"
              class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
              data-bs-dismiss="modal">
              Close
            </button>
            <button type="button"
              class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>

  </div> -->

    <div class="relative z-50 " aria-labelledby="modal-title" role="dialog" aria-modal="true">


            <div class="fixed inset-0 overflow-y-hidden overscroll-y-none">
                <div class="flex min-h-full justify-center p-4 text-center items-center">

                <div class="relative transform overflow-hidden rounded-lg bg-gray-700 text-left shadow-xl transition-all sm:my-8 sm:max-w-4xl mx-4">
                    

                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                      <div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                              Товар добавлен в корзину
                          </h3>
                          <button @click="showCartModal" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                              <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                              <span class="sr-only">Close modal</span>
                          </button>
                      </div>
                      
                      <div class="p-6 space-y-6 h-96 overflow-y-auto">

                        
                        <div class="overflow-x-auto w-full">
                          <div class="">

                            <div class="grid gap-2 px-2 py-4">
                              <div class="flex">
                                <div class="flex justify-center w-24"><p class="text-sm">Изображение</p></div>
                                <div class="flex justify-center w-1/2"><p class="text-sm">Наименование</p></div>
                                <div class="flex justify-center w-32"><p class="text-sm">Количество</p></div>
                                <div class="flex justify-center w-32"><p class="text-sm">Наличие</p></div>
                                <div class="flex justify-center w-32"><p class="text-sm">Стоимость</p></div>
                                <div class="flex justify-center w-20"><p class="text-sm">Удалить</p></div>
                              </div>
                            </div>

                            <div class="grid gap-2 px-1">
                              <transition-group tag="div" name="left-emergence">
                                <div v-for="product in cart" :key="product.id" class="my-4">
                                  <div class="flex items-center gap-2">
                                    <div class="flex justify-center items-center w-24 bg-white rounded-sm">
                                      <img :src="product.preview_image" :alt="product.name" width="235px" height="177px" class="rounded-sm w-20" />
                                    </div>
                                    <div class="flex justify-center w-1/2">
                                      <p class="text-sm">{{ product.name }}</p>
                                    </div>
                                    <div class="flex justify-center w-32">
                                      <button  @click="decProductToCart(product)" class="mdi mdi-minus cursor-pointer"></button>
                                      <div class="mx-2"><p>{{ product.quantity }}</p></div>
                                      <button @click="incProductToCart(product)" class="mdi mdi-plus cursor-pointer"></button>
                                    </div>
                                    <div class="flex justify-center w-32">
                                      <p v-if="product.status === 'stock'" class="text-sm">в наличии</p>
                                      <p v-if="product.status === 'order'" class="text-sm">под заказ</p>
                                    </div>
                                    <div class="flex justify-center w-32"><p class="text-sm">{{ product.only_price.toLocaleString() }} руб/шт</p></div>
                                    <div class="flex justify-center w-20">
                                      <button @click="delProductToCart(product)" class="mdi mdi-24px mdi-close cursor-pointer"></button>
                                    </div>
                                    
                                  </div>
                                  
                                </div>
                              </transition-group>
                            </div>
                          </div>
                        </div>
                      </div>


                      <div class="grid grid-cols-1 items-end justify-between p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                        <div class="">
                          <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" :value="stateCartModal" @change="actionStateCartModal" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Не показывать больше</label>
                          </div>
                        </div>
                        <div class="flex justify-center w-full md:justify-end">
                          <button @click="showCartModal" data-modal-toggle="defaultModal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-2">Продолжить покупки</button>
                          <button @click="goCart" data-modal-toggle="defaultModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Перейти в корзину</button>
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
      name: 'cartModal',
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

      }
    },
    computed: {
      ...mapState({
        cart: (state) => state.modules.cart.products,
        stateCartModal: (state) => state.modules.cart.stateCartModal,
      }),
    },
    methods: {
      ...mapActions({
        actionStateCartModal: 'modules/cart/actionStateCartModal',
        showCartModal: 'modules/cart/showCartModal',
        delProductToCart: 'modules/cart/delProductToCart',
        incProductToCart: 'modules/cart/incProductToCart',
        decProductToCart: 'modules/cart/decProductToCart',
        delProductToCart: 'modules/cart/delProductToCart',
        addToComparison: 'modules/comparison/addToComparison',
        delToComparison: 'modules/comparison/delToComparison',
        addProductToFav: 'modules/favorites/addProductToFav',
        delProductToFav: 'modules/favorites/delProductToFav',
      }),
      goCart(){
        this.showCartModal()
        this.$router.push({ name: 'cart' })
      }     
    },

  }
</script>