<template>
  <section id="cart-form">

    <!-- <CartModal /> -->
    <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">

      <div class="mt-3">

        <div class="lg:columns-2 gap-4">
          <div v-for="product in cart" :key="product.id" class="mb-4">

            <div class=" bg-white border-gray-200 border dark:border-gray-700 dark:bg-gray-800">
              <div class="py-2 px-2">
                <div class="my-2">
                  <nuxt-link to="#" class="">{{ product.name }}</nuxt-link>
                </div>
                <div class="flex justify-between">
                  <div class="">
                    <div class="flex items-center">
                      <div class="bg-white p-4 rounded-sm">
                        <img :src="product.preview_image" class="rounded-sm" width="80" />
                      </div>
                    </div>
                  </div>
                  <div class="">
                    <div class="md:flex items-center md:justify-end">
                      <div class="flex justify-between items-center md:w-56">
                        <div class="flex justify-center w-20">
                          <div class="mdi mdi-minus cursor-pointer"></div>
                          <div class="mx-2"><p>1</p></div>
                          <div class="mdi mdi-plus cursor-pointer"></div>
                        </div>
                        <div class="text-sm">
                          <div class="flex justify-end">
                            <p class="mx-2 text-xs">{{ product.prod_price[0].price}}</p>
                            <p class="text-xs">руб./шт</p>
                          </div>
                          <div class="mt-2">
                            <p>Итог: 45000 руб.</p>
                          </div>
                        </div>
                      </div>
                    </div>               

                    <div class="mt-4">
                      <button class="bg-blue-700 hover:bg-blue-800 dark:bg-blue-700 dark:hover:bg-blue-800 text-sm font-bold px-3 py-1 mx-3 rounded-sm text-yellow-300">В избранное</button>
                      <button type="button" class="text-gray-800 dark:text-gray-200 text-xs">Удалить из корзины</button>
                    </div>
                  </div>


                  </div>
                </div>                
              </div>
            </div>


            <!-- <div class="px-3 bg-white border-gray-200 border dark:border-gray-700 dark:bg-gray-800">


              <div class="flex justify-between">

                <div class="flex items-center">
                  <div class="bg-white p-2 rounded-sm">
                    <img :src="product.preview_image" class="rounded-sm" width="80" />
                  </div>
                </div>
                <div class="md:flex items-center md:justify-end">
                  <div class="flex justify-between items-center md:w-56">
                    <div class="flex justify-center w-20">
                      <div class="mdi mdi-minus cursor-pointer"></div>
                      <div class="mx-2"><p>1</p></div>
                      <div class="mdi mdi-plus cursor-pointer"></div>
                    </div>
                    <div class="text-sm">
                      <div class="flex justify-end">
                        <p class="mx-2 text-xs">{{ product.prod_price[0].price}}</p>
                        <p class="text-xs">руб./шт</p>
                      </div>
                      <div class="mt-2">
                        <p>Итог: 45000 руб.</p>
                      </div>
                    </div>
                  </div>
                </div>               
              </div>

              <div class="flex justify-end py-2">
                <button class="bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 text-sm px-3 py-1 mx-3 rounded-md text-gray-200">в избранное</button>
                <button type="button" class="text-gray-800 dark:text-gray-200">удалить</button>
              </div>

            </div> -->
            
          </div>
        </div>



        <div class="grid grid-cols-2 gap-4">

          <div class="bg-white border-gray-200 border dark:border-gray-700 dark:bg-gray-800 p-4">

            <form>
              <div class="relative z-0 mb-6 w-full group">
                  <input type="email" name="floating-email" id="floating-email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label for="floating-email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email адрес</label>
              </div>
              <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 mb-6 w-full group">
                    <input type="text" name="floating-first_name" id="floating-first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating-first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Имя *</label>
                </div>
                <div class="relative z-0 mb-6 w-full group">
                    <input type="text" name="floating-last_name" id="floating-last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating-last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Фамилия</label>
                </div>
              </div>
              <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 mb-6 w-full group">
                    <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating-phone" id="floating-phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating-phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Номер телефона *</label>
                </div>
                <div class="relative z-0 mb-6 w-full group">
                    <input type="text" name="floating-company" id="floating-company" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating-company" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. Google)</label>
                </div>
              </div>
              <div class="relative z-0 mb-6 w-full group">
                  <input type="text" name="your-comment" id="your-comment" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label for="your-comment" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Комментарий к заказу</label>
              </div>              
              <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Сделать заказ</button>
            </form>
          </div>

          <div class="">
            <p>hallo welt</p>
          </div>


        </div>
      


    </div>


  </section>

</template>

<script>
import CartModal from '../CartModal.vue';

  export default {
    name: 'CartForm',
    components: {
      CartModal
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