<template>
  <section id="cart-form">

    <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div v-for="product in cart" :key="product.id" class="">
          <div class="bg-white border-gray-200 border dark:border-gray-700 dark:bg-gray-800 rounded-sm">
            <div class="py-1 px-2">
              <div class="py-1">
                <nuxt-link to="#" class="text-sm">{{ product.name }}</nuxt-link>
              </div>
              <div class="flex justify-between items-end">
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
                  <div class="mt-4 flex gap-2">
                    <div class="">
                      <button class="relative inline-flex items-center justify-center p-0.5  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-400 to-blue-800 group-hover:from-blue-400 group-hover:to-blue-800 hover:text-gray-100 dark:text-gray-300 hover:dark:text-gray-100 focus:ring-1 focus:outline-none focus:ring-cyan-200 dark:focus:ring-blue-700">
                        <span class="relative px-4 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          В избранное
                        </span>
                      </button>              
                    </div>

                    <button type="button" class="text-gray-800 dark:text-gray-200 text-xs">Удалить из корзины</button>
                  </div>
                </div>
              </div>
            </div>                
          </div>
        </div>
      </div>
      <div class="mt-4">
        <div class="bg-white border-gray-200 border dark:border-gray-700 dark:bg-gray-800 p-4 rounded-sm">

          <label>
              <input  type="radio" name="option" id="option1" class="hidden peer" />
              <div class="peer-checked:bg-red-600">option1</div>
              <div></div>
              <p class="peer-checked:bg-blue-600">hallo</p>
          </label>

          <div class="flex items-center justify-between">
            <div class="">
              1. Данные покупателя
            </div>
            <div class="flex justify-end gap-4">

              <ul class="grid gap-6 w-full md:grid-cols-2">
                <li>
                  <input type="radio" id="hosting-small" name="person" v-model="entity" value="false" class="hidden peer" required>
                  <label for="hosting-small" class=" peer-checked:mt-4 inline-flex justify-between items-center p-2 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                      <div class="">
                          <p class="mdi mdi-check  peer-checked:hidden"></p>
                          <div class="w-full peer-checked:bg-red-600"> Физическое лицо</div>
                      </div>
                  </label>
                </li>
                <li>
                  <input type="radio" id="hosting-big" name="person" v-model="entity" value="true" class="hidden peer">
                  <label for="hosting-big" class="inline-flex justify-between items-center p-2 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                      <div class="block">
                        <div class="w-full">Юридическое лицо</div>
                      </div>
                  </label>
                </li>
              </ul>
            </div>
          </div>


          <div class="grid md:grid-cols-2 gap-4">

            <div class="">
              <label for="message" class="block mt-2 mb-1 text-xs font-medium text-gray-900 dark:text-gray-400">Имя (необязательно)</label>
              <div class="relative">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <p class="mdi mdi-account"></p>
                </div>
                <input type="text" id="email-address-icon" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Иван Иванов">
              </div>                
            </div>
            <div class="">
              <label for="message" class="block mt-2 mb-1 text-xs font-medium text-gray-900 dark:text-gray-400">Электронная почта (необязательно)</label>
              <div class="relative">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <p class="mdi mdi-email"></p>
                </div>
                <input type="text" id="email-address-icon" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@domen.com">
              </div>                
            </div>
            <div class="">
              <label for="message" class="block mt-2 mb-1 text-xs font-medium text-gray-900 dark:text-gray-400">Номер телефона</label>
              <div class="relative">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <p class="mdi mdi-phone"></p>
                </div>
                <input type="text" id="email-address-icon" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+7 (987) 654 32 10">
              </div>                
            </div>

          </div>


        </div>
      </div>

      <div v-if="entity == 'true'" class="mt-4">
        <div class="bg-white border-gray-200 border dark:border-gray-700 dark:bg-gray-800 p-4 rounded-sm transition-all duration-300">
          <p class="">Дополнительные поля для юр.лиц:</p>
          <div class="grid md:grid-cols-3 gap-4">
            <CartField v-model="legaladress" placeholder="Россия, Москва, 117312, ул. Вавилова, д. 123" title="Юридический адрес" />
            <CartField v-model="company" placeholder="ООО Полное название компании" title="Полное наименование" />
            <CartField v-model="inn" placeholder="Россия, Москва, 117312, ул. Вавилова, д. 123" title="ИНН" />
            <CartField v-model="legaladress" placeholder="1234567890" title="Юридический адрес" />
            <CartField v-model="kpp" placeholder="12356789" title="КПП" />
            <CartField v-model="okpo" placeholder="12345678" title="ОКПО (необязательно)" />
            <CartField v-model="bankname" placeholder="ПАО Сбербанк" title="Наименование банка" />
            <CartField v-model="currentacc" placeholder="12312123112341234567" title="Расчетный счет (необязательно)" />
            <CartField v-model="corresponding" placeholder="12312123112341234567" title="Корреспондентский счет (необязательно)" />
            <CartField v-model="bic" placeholder="123456789" title="БИК (необязательно)" />
          </div>
        </div>
      </div>
      

      <div class="mt-4">
        <div class="bg-white border-gray-200 border dark:border-gray-700 dark:bg-gray-800 p-4 rounded-sm">

          <div class="flex items-center justify-between">
            <div class="">
              2. Способ получения
            </div>
            <div class="flex justify-end gap-4">
              <ul class="grid gap-6 w-full md:grid-cols-2">
                <li>
                  <input type="radio" id="hosting-smalll" name="hosting1" value="hosting-small" class="hidden peer" required>
                  <label for="hosting-smalll" class="inline-flex justify-between items-center p-2 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                      <div class="block">
                          <div class="w-full">Самовывоз из магазина</div>
                      </div>
                  </label>
                </li>
                <li>
                  <input type="radio" id="hosting-bigg" name="hosting1" value="hosting-big" class="hidden peer">
                  <label for="hosting-bigg" class="inline-flex justify-between items-center p-2 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                      <div class="block">
                          <div class="w-full">Доставка ТК</div>
                      </div>
                  </label>
                </li>
              </ul>
            </div>
          </div>


          <label for="countries" class="block mt-2 mb-1 text-xs font-medium text-gray-900 dark:text-gray-400">Выберите магазин</label>


          <div class="border dark:border-gray-600 rounded-sm bg-gray-50 dark:bg-gray-700">
            <div class="">
              <div class="grid lg:grid-cols-2 justify-items-stretch items-center ">
                <div class="mx-2 my-2">
                  <select v-model="selectedShop" id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option disabled value="">Выберие магазин</option>
                    <option v-for="shop in shops" :key="shop.id" :value="shop">{{ shop.adress }}</option>
                  </select>                    
                </div>
                <div class="justify-self-center mx-2 my-2">
                  <div class="" v-if="selectedShop.phone">
                    <div class="flex items-center">
                      <div class="border-r">
                        <a class="text-2xl mx-2" :href="'tel:' + selectedShop.phone.replace(/[^+\d]/g, '')">{{ selectedShop.phone }}</a>
                      </div>
                      <div class="mx-2">
                        <p class="text-xs font-bold mt-1">{{ selectedShop.wday }}</p>
                        <p class="text-xs font-bold">{{ selectedShop.wend }}</p>   
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div class="">
              <iframe :src="selectedShop.google_maps" width="100%" height="250" class="rounded-sm" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>

          <label for="message" class="block mt-2 mb-1 text-xs font-medium text-gray-900 dark:text-gray-400">Комментарий к заказу (необязательно)</label>
          <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Напишите что-нибудь..."></textarea>

          <div class="my-4">
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-400 to-blue-800 group-hover:from-blue-400 group-hover:to-blue-800 hover:text-gray-100 dark:text-gray-300 hover:dark:text-gray-100 focus:ring-1 focus:outline-none focus:ring-cyan-200 dark:focus:ring-blue-700">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Сделать заказ
              </span>
            </button>              
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CartModal from '../CartModal.vue';
import CartField from '../CartField.vue'

  export default {
    name: 'CartForm',
    components: {
      CartModal,
      CartField,
    },
    props: {
      cts: {
        type: Array,
        default: Array,
      },
      shops: {
        type: Array,
        default: Array,
      },
    },
    data() {
      return {
        cart: [ { "id": 1634, "vcode": "38672", "name": "FUBAG источник SW 1000", "description": "Инверторный источник для сварки под флюсом.\r\n\r\nВходит в комплект для сварки под слоем флюса. Востребован при изготовлении металлических конструкции. Мощный источник питания SW 1000 и сварочный трактор TW 1000 – идеальный тандем для получения качественных сварных соединений при высочайшей производительности. FUBAG SW / TW 1000 позволяет проводить сварку под флюсом внахлест, сварку тавровых и стыковых соединений.\r\n\r\n• Полный контроль параметров сварки на панели\r\n• 100 % ПВ при максимальном токе\r\n• Экономия энергии до 35% за счет высокого КПД\r\n• Встроенные режимы MMA и дуговой строжки (Air Gouge)\r\n• Сварка проволокой диаметром до 6 мм\r\n• Пространственная регулировка положения горелки по 4 осям.", "promo": false, "discount": null, "rating": "5.0", "preview_image": "http://127.0.0.1:8000/files/img/c/preview/prodksd.jpg", "only_price_status": true, "only_price": 554810, "currency": "RUB", "product_comp": [ { "id": 1, "rel_id": 1638, "completed": true } ], "brand": { "id": 1, "brand": "FUBAG", "image": "http://127.0.0.1:8000/files/img/c/brand/fubag_HJDp3ph.png", "carousel": true, "description": "" }, "propstrmodel": [ { "id": 9509, "name": "Напряжение питающей сети, В", "qname": null, "value": "380" }, { "id": 9510, "name": "Напряжение холостого хода, В", "qname": null, "value": "81" }, { "id": 9511, "name": "Диапазон сварочного тока, А", "qname": null, "value": "90 - 1000" }, { "id": 9513, "name": "ПВ, % при максимальном токе", "qname": null, "value": "100" }, { "id": 9531, "name": "Габаритные размеры, мм", "qname": null, "value": "750x350x850" }, { "id": 9532, "name": "Вес, кг", "qname": null, "value": "100" } ], "prod_price": [ { "shop": 10, "price": 554810, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 11, "price": 554810, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 1, "price": 554810, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 2, "price": 554810, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 3, "price": 554810, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 4, "price": 554810, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 5, "price": 554810, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 6, "price": 554810, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 9, "price": 554810, "currency": "RUB", "quantity": 0, "status": "order" } ] }, { "id": 1635, "vcode": "38674", "name": "FUBAG Источник для сварки под флюсом SW 1250", "description": "FUBAG Источник для сварки под флюсом SW 1250 входит в комплект:\r\nаппарат для сварки под флюсом SW 1250 + трактор сварочный TW 1250 + набор соединительных кабелей", "promo": false, "discount": null, "rating": "5.0", "preview_image": "http://127.0.0.1:8000/files/img/c/preview/prodkfk.jpg", "only_price_status": true, "only_price": 581110, "currency": "RUB", "product_comp": [ { "id": 2, "rel_id": 1639, "completed": true } ], "brand": { "id": 1, "brand": "FUBAG", "image": "http://127.0.0.1:8000/files/img/c/brand/fubag_HJDp3ph.png", "carousel": true, "description": "" }, "propstrmodel": [ { "id": 9514, "name": "Сеть питания, В", "qname": null, "value": "380" }, { "id": 9515, "name": "Диапазон сварочного тока, А", "qname": null, "value": "90 - 1250" }, { "id": 9516, "name": "Напряжение холостого хода, В", "qname": null, "value": "81" }, { "id": 9517, "name": "Габаритные размеры, мм", "qname": null, "value": "750x350x805" }, { "id": 9518, "name": "Вес нетто, кг", "qname": null, "value": "105" } ], "prod_price": [ { "shop": 10, "price": 581110, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 11, "price": 581110, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 1, "price": 581110, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 2, "price": 581110, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 3, "price": 581110, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 4, "price": 581110, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 5, "price": 581110, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 6, "price": 581110, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 9, "price": 581110, "currency": "RUB", "quantity": 0, "status": "order" } ] }, { "id": 1638, "vcode": "38673", "name": "FUBAG сварочный трактор TW 1000", "description": "Сварочный трактор TW 1000 входит в комплект для сварки под слоем флюса. Востребован при изготовлении металлических конструкции. Мощный источник питания SW 1000 и сварочный трактор TW 1000 – идеальный тандем для получения качественных сварных соединений при высочайшей производительности. FUBAG SW / TW 1000 позволяет проводить сварку под флюсом внахлест, сварку тавровых и стыковых соединений.\r\n\r\n• Полный контроль параметров сварки на панели\r\n• 100 % ПВ при максимальном токе\r\n• Экономия энергии до 35% за счет высокого КПД\r\n• Встроенные режимы MMA и дуговой строжки (Air Gouge)\r\n• Сварка проволокой диаметром до 6 мм\r\n• Пространственная регулировка положения горелки по 4 осям.", "promo": false, "discount": null, "rating": "5.0", "preview_image": "http://127.0.0.1:8000/files/img/c/preview/prodljk.jpg", "only_price_status": false, "only_price": 0, "currency": "RUB", "product_comp": [], "brand": { "id": 1, "brand": "FUBAG", "image": "http://127.0.0.1:8000/files/img/c/brand/fubag_HJDp3ph.png", "carousel": true, "description": "" }, "propstrmodel": [ { "id": 9533, "name": "Скорость сварки, м/мин", "qname": null, "value": "0,2 - 1,5" }, { "id": 9534, "name": "Скорость подачи проволоки, м/мин", "qname": null, "value": "0,25 - 2,5" }, { "id": 9535, "name": "Диаметр проволоки, мм", "qname": null, "value": "3 - 5" }, { "id": 9536, "name": "Емкость флюсового бункера, л", "qname": null, "value": "6" }, { "id": 9537, "name": "Емкость кассеты с проволокой, кг", "qname": null, "value": "25" }, { "id": 9538, "name": "Габаритные размеры, мм", "qname": null, "value": "1020x480x740" }, { "id": 9539, "name": "Вес, кг", "qname": null, "value": "58" } ], "prod_price": [ { "shop": 1, "price": 0, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 2, "price": 0, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 3, "price": 0, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 4, "price": 0, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 5, "price": 0, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 6, "price": 0, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 9, "price": 0, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 10, "price": 0, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 11, "price": 0, "currency": "RUB", "quantity": 0, "status": "order" } ] }, { "id": 1639, "vcode": "38675", "name": "FUBAG сварочный трактор TW 1250", "description": "FUBAG сварочный трактор TW 1250 входит в комплект:\r\nисточник для сварки под флюсом SW 1250 + трактор сварочный TW 1250 + набор соединительных кабелей", "promo": false, "discount": null, "rating": "5.0", "preview_image": "http://127.0.0.1:8000/files/img/c/preview/prodsa_FiVaugp.jpg", "only_price_status": false, "only_price": 0, "currency": "RUB", "product_comp": [], "brand": { "id": 1, "brand": "FUBAG", "image": "http://127.0.0.1:8000/files/img/c/brand/fubag_HJDp3ph.png", "carousel": true, "description": "" }, "propstrmodel": [], "prod_price": [ { "shop": 1, "price": 0, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 2, "price": 0, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 3, "price": 0, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 4, "price": 0, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 5, "price": 0, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 6, "price": 0, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 9, "price": 0, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 10, "price": 0, "currency": "RUB", "quantity": 0, "status": "order" }, { "shop": 11, "price": 0, "currency": "RUB", "quantity": 0, "status": "order" } ] } ],
        selectedShop: '',
        entity: "false",
        legaladress: '',
      }
    },
  }
</script>