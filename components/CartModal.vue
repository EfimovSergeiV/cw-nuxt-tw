<template>


    <div class="relative z-10 hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true">

        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div class="fixed inset-0 z-10 overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                <div class="relative transform overflow-hidden rounded-lg bg-gray-700 text-left shadow-xl transition-all sm:my-8 sm:max-w-4xl mx-4">
                    

                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                      <div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                              Товар добавлен в корзину
                          </h3>
                          <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                              <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                              <span class="sr-only">Close modal</span>
                          </button>
                      </div>
                      <div class="p-6 space-y-6 h-96 overflow-y-auto">


                          <div v-for="product in cart" :key="product.id">
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

                          </div>


                      </div>


                      <div class="flex items-end p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600 justify-between">
                        <div class="">
                          <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Не показывать больше</label>
                          </div>
                        </div>
                        <div class="flex justify-end">
                          <button data-modal-toggle="defaultModal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-2">Продолжить покупки</button>
                          <button data-modal-toggle="defaultModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Перейти в корзину</button>
                        </div>
                      </div>
                    </div>



                <!-- <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div class="sm:flex sm:items-start">
                    <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">

                        <svg class="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 10.5v3.75m-9.303 3.376C1.83 19.126 2.914 21 4.645 21h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 4.88c-.866-1.501-3.032-1.501-3.898 0L2.697 17.626zM12 17.25h.007v.008H12v-.008z" />
                        </svg>
                    </div>
                    <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <h3 class="text-lg font-medium leading-6 text-gray-900" id="modal-title">Deactivate account</h3>
                        <div class="mt-2">
                        <p class="text-sm text-gray-500">Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.</p>
                        </div>
                    </div>
                    </div>
                </div>

                <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button type="button" class="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm">Deactivate</button>
                    <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
                </div> -->

                </div>
            </div>
        </div>
    </div>

  <!-- <div id="bottom-left-modal" data-modal-placement="bottom-left" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
    <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">

        
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">

            
            <div class="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
                <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                    Bottom left modal
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="bottom-left-modal">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>

            
            <div class="p-6 space-y-6">
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                </p>
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    The European Unions General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                </p>
            </div>

            
            <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                <button data-modal-toggle="bottom-left-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                <button data-modal-toggle="bottom-left-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
            </div>
        </div>
    </div>
  </div> -->

</template>

<script>    
  export default {
      name: 'Navbar',
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
        "cart": [ { "id": 1634, "vcode": "38672", "name": "FUBAG источник SW 1000", "description": "Инверторный источник для сварки под флюсом.\r\n\r\nВходит в комплект для сварки под слоем флюса. Востребован при изготовлении металлических конструкции. Мощный источник питания SW 1000 и сварочный трактор TW 1000 – идеальный тандем для получения качественных сварных соединений при высочайшей производительности. FUBAG SW / TW 1000 позволяет проводить сварку под флюсом внахлест, сварку тавровых и стыковых соединений.\r\n\r\n• Полный контроль параметров сварки на панели\r\n• 100 % ПВ при максимальном токе\r\n• Экономия энергии до 35% за счет высокого КПД\r\n• Встроенные режимы MMA и дуговой строжки (Air Gouge)\r\n• Сварка проволокой диаметром до 6 мм\r\n• Пространственная регулировка положения горелки по 4 осям.", "promo": false, "discount": null, "rating": "5.0", "preview_image": "http://127.0.0.1:8000/files/img/c/preview/prodksd.jpg", "only_price_status": true, "only_price": 554810, "currency": "RUB", "product_comp": [ { "id": 1, "rel_id": 1638, "completed": true } ], "brand": { "id": 1, "brand": "FUBAG", "image": "http://127.0.0.1:8000/files/img/c/brand/fubag_HJDp3ph.png", "carousel": true, "description": "" }, "propstrmodel": [ { "id": 9509, "name": "Напряжение питающей сети, В", "qname": null, "value": "380" }, { "id": 9510, "name": "Напряжение холостого хода, В", "qname": null, "value": "81" }, { "id": 9511, "name": "Диапазон сварочного тока, А", "qname": null, "value": "90 - 1000" }, { "id": 9513, "name": "ПВ, % при максимальном токе", "qname": null, "value": "100" }, { "id": 9531, "name": "Габаритные размеры, мм", "qname": null, "value": "750x350x850" }, { "id": 9532, "name": "Вес, кг", "qname": null, "value": "100" } ], "prod_price": [ { "shop": 10, "price": 554810, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 11, "price": 554810, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 1, "price": 554810, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 2, "price": 554810, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 3, "price": 554810, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 4, "price": 554810, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 5, "price": 554810, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 6, "price": 554810, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 9, "price": 554810, "currency": "RUB", "quantity": 0, "status": "order" } ] }, { "id": 1635, "vcode": "38674", "name": "FUBAG Источник для сварки под флюсом SW 1250", "description": "FUBAG Источник для сварки под флюсом SW 1250 входит в комплект:\r\nаппарат для сварки под флюсом SW 1250 + трактор сварочный TW 1250 + набор соединительных кабелей", "promo": false, "discount": null, "rating": "5.0", "preview_image": "http://127.0.0.1:8000/files/img/c/preview/prodkfk.jpg", "only_price_status": true, "only_price": 581110, "currency": "RUB", "product_comp": [ { "id": 2, "rel_id": 1639, "completed": true } ], "brand": { "id": 1, "brand": "FUBAG", "image": "http://127.0.0.1:8000/files/img/c/brand/fubag_HJDp3ph.png", "carousel": true, "description": "" }, "propstrmodel": [ { "id": 9514, "name": "Сеть питания, В", "qname": null, "value": "380" }, { "id": 9515, "name": "Диапазон сварочного тока, А", "qname": null, "value": "90 - 1250" }, { "id": 9516, "name": "Напряжение холостого хода, В", "qname": null, "value": "81" }, { "id": 9517, "name": "Габаритные размеры, мм", "qname": null, "value": "750x350x805" }, { "id": 9518, "name": "Вес нетто, кг", "qname": null, "value": "105" } ], "prod_price": [ { "shop": 10, "price": 581110, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 11, "price": 581110, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 1, "price": 581110, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 2, "price": 581110, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 3, "price": 581110, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 4, "price": 581110, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 5, "price": 581110, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 6, "price": 581110, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 9, "price": 581110, "currency": "RUB", "quantity": 0, "status": "order" } ] }, { "id": 1638, "vcode": "38673", "name": "FUBAG сварочный трактор TW 1000", "description": "Сварочный трактор TW 1000 входит в комплект для сварки под слоем флюса. Востребован при изготовлении металлических конструкции. Мощный источник питания SW 1000 и сварочный трактор TW 1000 – идеальный тандем для получения качественных сварных соединений при высочайшей производительности. FUBAG SW / TW 1000 позволяет проводить сварку под флюсом внахлест, сварку тавровых и стыковых соединений.\r\n\r\n• Полный контроль параметров сварки на панели\r\n• 100 % ПВ при максимальном токе\r\n• Экономия энергии до 35% за счет высокого КПД\r\n• Встроенные режимы MMA и дуговой строжки (Air Gouge)\r\n• Сварка проволокой диаметром до 6 мм\r\n• Пространственная регулировка положения горелки по 4 осям.", "promo": false, "discount": null, "rating": "5.0", "preview_image": "http://127.0.0.1:8000/files/img/c/preview/prodljk.jpg", "only_price_status": false, "only_price": 0, "currency": "RUB", "product_comp": [], "brand": { "id": 1, "brand": "FUBAG", "image": "http://127.0.0.1:8000/files/img/c/brand/fubag_HJDp3ph.png", "carousel": true, "description": "" }, "propstrmodel": [ { "id": 9533, "name": "Скорость сварки, м/мин", "qname": null, "value": "0,2 - 1,5" }, { "id": 9534, "name": "Скорость подачи проволоки, м/мин", "qname": null, "value": "0,25 - 2,5" }, { "id": 9535, "name": "Диаметр проволоки, мм", "qname": null, "value": "3 - 5" }, { "id": 9536, "name": "Емкость флюсового бункера, л", "qname": null, "value": "6" }, { "id": 9537, "name": "Емкость кассеты с проволокой, кг", "qname": null, "value": "25" }, { "id": 9538, "name": "Габаритные размеры, мм", "qname": null, "value": "1020x480x740" }, { "id": 9539, "name": "Вес, кг", "qname": null, "value": "58" } ], "prod_price": [ { "shop": 1, "price": 0, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 2, "price": 0, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 3, "price": 0, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 4, "price": 0, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 5, "price": 0, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 6, "price": 0, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 9, "price": 0, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 10, "price": 0, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 11, "price": 0, "currency": "RUB", "quantity": 0, "status": "order" } ] }, { "id": 1639, "vcode": "38675", "name": "FUBAG сварочный трактор TW 1250", "description": "FUBAG сварочный трактор TW 1250 входит в комплект:\r\nисточник для сварки под флюсом SW 1250 + трактор сварочный TW 1250 + набор соединительных кабелей", "promo": false, "discount": null, "rating": "5.0", "preview_image": "http://127.0.0.1:8000/files/img/c/preview/prodsa_FiVaugp.jpg", "only_price_status": false, "only_price": 0, "currency": "RUB", "product_comp": [], "brand": { "id": 1, "brand": "FUBAG", "image": "http://127.0.0.1:8000/files/img/c/brand/fubag_HJDp3ph.png", "carousel": true, "description": "" }, "propstrmodel": [], "prod_price": [ { "shop": 1, "price": 0, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 2, "price": 0, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 3, "price": 0, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 4, "price": 0, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 5, "price": 0, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 6, "price": 0, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 9, "price": 0, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 10, "price": 0, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 11, "price": 0, "currency": "RUB", "quantity": 0, "status": "order" } ] } ]
      }
    },
  }
</script>