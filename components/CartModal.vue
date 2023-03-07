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
                          <!-- <div v-for="product in cart" :key="product.id">
                            <div class="md:flex items-center md:justify-between">

                              <div class="flex items-center">
                                <img :src="product.preview_image" class="rounded-sm" width="80" />
                                <nuxt-link to="#" class="mx-3">{{ product.name }}</nuxt-link>
                              </div>

                              <div class="flex justify-between items-center md:w-56">
                                <div class="flex justify-center w-20">
                                  <div class="mdi mdi-minus cursor-pointer"></div>
                                  <div class="mx-2"><p>1</p></div>
                                  <div class="mdi mdi-plus cursor-pointer"></div>
                                </div>
                                <div class="">
                                  <div class="flex justify-end">
                                    <p class="mx-2">{{ product.prod_price[0].price}}</p>
                                    <p>руб./шт</p>
                                  </div>
                                  <div class="">
                                    <p>Итог: 45000 руб.</p>
                                  </div>
                                </div>
                              </div>

                            </div>

                            <div class="flex justify-end py-2">
                              <button class="bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 px-4 py-1 mx-3 rounded-md">в избранное</button>
                              <button type="button" class="">удалить</button>
                            </div>

                          </div> -->


                      </div>


                      <div class="grid grid-cols-1 items-end justify-between p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                        <div class="">
                          <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
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
        // "cart": [ { "id": 1634, "vcode": "38672", "name": "FUBAG источник SW 1000", "description": "Инверторный источник для сварки под флюсом.\r\n\r\nВходит в комплект для сварки под слоем флюса. Востребован при изготовлении металлических конструкции. Мощный источник питания SW 1000 и сварочный трактор TW 1000 – идеальный тандем для получения качественных сварных соединений при высочайшей производительности. FUBAG SW / TW 1000 позволяет проводить сварку под флюсом внахлест, сварку тавровых и стыковых соединений.\r\n\r\n• Полный контроль параметров сварки на панели\r\n• 100 % ПВ при максимальном токе\r\n• Экономия энергии до 35% за счет высокого КПД\r\n• Встроенные режимы MMA и дуговой строжки (Air Gouge)\r\n• Сварка проволокой диаметром до 6 мм\r\n• Пространственная регулировка положения горелки по 4 осям.", "promo": false, "discount": null, "rating": "5.0", "preview_image": "http://127.0.0.1:8000/files/img/c/preview/prodksd.jpg", "only_price_status": true, "only_price": 554810, "currency": "RUB", "product_comp": [ { "id": 1, "rel_id": 1638, "completed": true } ], "brand": { "id": 1, "brand": "FUBAG", "image": "http://127.0.0.1:8000/files/img/c/brand/fubag_HJDp3ph.png", "carousel": true, "description": "" }, "propstrmodel": [ { "id": 9509, "name": "Напряжение питающей сети, В", "qname": null, "value": "380" }, { "id": 9510, "name": "Напряжение холостого хода, В", "qname": null, "value": "81" }, { "id": 9511, "name": "Диапазон сварочного тока, А", "qname": null, "value": "90 - 1000" }, { "id": 9513, "name": "ПВ, % при максимальном токе", "qname": null, "value": "100" }, { "id": 9531, "name": "Габаритные размеры, мм", "qname": null, "value": "750x350x850" }, { "id": 9532, "name": "Вес, кг", "qname": null, "value": "100" } ], "prod_price": [ { "shop": 10, "price": 554810, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 11, "price": 554810, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 1, "price": 554810, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 2, "price": 554810, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 3, "price": 554810, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 4, "price": 554810, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 5, "price": 554810, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 6, "price": 554810, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 9, "price": 554810, "currency": "RUB", "quantity": 0, "status": "order" } ] }, { "id": 1635, "vcode": "38674", "name": "FUBAG Источник для сварки под флюсом SW 1250", "description": "FUBAG Источник для сварки под флюсом SW 1250 входит в комплект:\r\nаппарат для сварки под флюсом SW 1250 + трактор сварочный TW 1250 + набор соединительных кабелей", "promo": false, "discount": null, "rating": "5.0", "preview_image": "http://127.0.0.1:8000/files/img/c/preview/prodkfk.jpg", "only_price_status": true, "only_price": 581110, "currency": "RUB", "product_comp": [ { "id": 2, "rel_id": 1639, "completed": true } ], "brand": { "id": 1, "brand": "FUBAG", "image": "http://127.0.0.1:8000/files/img/c/brand/fubag_HJDp3ph.png", "carousel": true, "description": "" }, "propstrmodel": [ { "id": 9514, "name": "Сеть питания, В", "qname": null, "value": "380" }, { "id": 9515, "name": "Диапазон сварочного тока, А", "qname": null, "value": "90 - 1250" }, { "id": 9516, "name": "Напряжение холостого хода, В", "qname": null, "value": "81" }, { "id": 9517, "name": "Габаритные размеры, мм", "qname": null, "value": "750x350x805" }, { "id": 9518, "name": "Вес нетто, кг", "qname": null, "value": "105" } ], "prod_price": [ { "shop": 10, "price": 581110, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 11, "price": 581110, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 1, "price": 581110, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 2, "price": 581110, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 3, "price": 581110, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 4, "price": 581110, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 5, "price": 581110, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 6, "price": 581110, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 9, "price": 581110, "currency": "RUB", "quantity": 0, "status": "order" } ] }, { "id": 1638, "vcode": "38673", "name": "FUBAG сварочный трактор TW 1000", "description": "Сварочный трактор TW 1000 входит в комплект для сварки под слоем флюса. Востребован при изготовлении металлических конструкции. Мощный источник питания SW 1000 и сварочный трактор TW 1000 – идеальный тандем для получения качественных сварных соединений при высочайшей производительности. FUBAG SW / TW 1000 позволяет проводить сварку под флюсом внахлест, сварку тавровых и стыковых соединений.\r\n\r\n• Полный контроль параметров сварки на панели\r\n• 100 % ПВ при максимальном токе\r\n• Экономия энергии до 35% за счет высокого КПД\r\n• Встроенные режимы MMA и дуговой строжки (Air Gouge)\r\n• Сварка проволокой диаметром до 6 мм\r\n• Пространственная регулировка положения горелки по 4 осям.", "promo": false, "discount": null, "rating": "5.0", "preview_image": "http://127.0.0.1:8000/files/img/c/preview/prodljk.jpg", "only_price_status": false, "only_price": 0, "currency": "RUB", "product_comp": [], "brand": { "id": 1, "brand": "FUBAG", "image": "http://127.0.0.1:8000/files/img/c/brand/fubag_HJDp3ph.png", "carousel": true, "description": "" }, "propstrmodel": [ { "id": 9533, "name": "Скорость сварки, м/мин", "qname": null, "value": "0,2 - 1,5" }, { "id": 9534, "name": "Скорость подачи проволоки, м/мин", "qname": null, "value": "0,25 - 2,5" }, { "id": 9535, "name": "Диаметр проволоки, мм", "qname": null, "value": "3 - 5" }, { "id": 9536, "name": "Емкость флюсового бункера, л", "qname": null, "value": "6" }, { "id": 9537, "name": "Емкость кассеты с проволокой, кг", "qname": null, "value": "25" }, { "id": 9538, "name": "Габаритные размеры, мм", "qname": null, "value": "1020x480x740" }, { "id": 9539, "name": "Вес, кг", "qname": null, "value": "58" } ], "prod_price": [ { "shop": 1, "price": 0, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 2, "price": 0, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 3, "price": 0, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 4, "price": 0, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 5, "price": 0, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 6, "price": 0, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 9, "price": 0, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 10, "price": 0, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 11, "price": 0, "currency": "RUB", "quantity": 0, "status": "order" } ] }, { "id": 1639, "vcode": "38675", "name": "FUBAG сварочный трактор TW 1250", "description": "FUBAG сварочный трактор TW 1250 входит в комплект:\r\nисточник для сварки под флюсом SW 1250 + трактор сварочный TW 1250 + набор соединительных кабелей", "promo": false, "discount": null, "rating": "5.0", "preview_image": "http://127.0.0.1:8000/files/img/c/preview/prodsa_FiVaugp.jpg", "only_price_status": false, "only_price": 0, "currency": "RUB", "product_comp": [], "brand": { "id": 1, "brand": "FUBAG", "image": "http://127.0.0.1:8000/files/img/c/brand/fubag_HJDp3ph.png", "carousel": true, "description": "" }, "propstrmodel": [], "prod_price": [ { "shop": 1, "price": 0, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 2, "price": 0, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 3, "price": 0, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 4, "price": 0, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 5, "price": 0, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 6, "price": 0, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 9, "price": 0, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 10, "price": 0, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 11, "price": 0, "currency": "RUB", "quantity": 0, "status": "order" } ] } ]
      }
    },
    computed: {
      ...mapState({
        cart: (state) => state.modules.cart.products,
      }),
    },
    methods: {
      ...mapActions({
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