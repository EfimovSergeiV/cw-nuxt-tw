<template>
  <div class="">

    <Header />

    <TopSliderSection :widebanners="widebanners" />

    <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">
      <div id="cat-title" class="flex justify-end mt-2">
        <p class="text-3xl font-bold">Личный кабинет</p>
      </div>
    </div>

    <Navbar :cts="cts" />



    <div class="mx-auto py-2 px-4 lg:max-w-7xl lg:px-8">

      <div class="grid md:grid-cols-2 gap-4">


        <div class="bg-white dark:bg-gray-800 px-4 py-4 border border-gray-300 dark:border-gray-700">
          <div class="grid gap-2">

            <div class="flex">
              <p class="text-sm">История заказов</p>
            </div>

            <div v-if="stat" class="overflow-y-scroll h-80">
              <div class="grid grid-cols-1 gap-2">
                
                <div v-for="i in 15" :key="i" class="">
                  <div class="bg-white dark:bg-gray-700 rounded-sm border dark:border-gray-600 p-1">
                    <div class="">
                      <p class="text-sm font-bold my-1 mx-1">{{ order.order_number }}</p>
                      
                      <div v-for="product, item in order.client_product" :key="item" class="py-2 mx-1 flex items-center justify-between">
                        
                        <nuxt-link :to="{ name: 'product-id', params: { id: product.id }}" class="text-xs">{{ item + 1 }}. {{ product.name }}</nuxt-link>
                        <div class="flex items-center justify-end gap-2">
                          <p class="text-xs">{{ product.price }} руб.</p>
                          <p class="text-xs">X</p>
                          <p class="text-xs">{{ product.quantity }}</p>                          
                        </div>

                      </div>
                      
                    </div>
                    <div class="flex items-end justify-end gap-4 mx-1 my-2">
                      <button to="#" class="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 text-xs">Удалить</button>
                      <button to="#" class="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 text-xs">Отменить</button>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            <div v-else>
              <div class="flex items-center justify-center h-80">
                <p>Нет товаров в истории</p>
              </div>
            </div>

          </div>
        </div>



        <div class="bg-white dark:bg-gray-800 px-4 py-4 border border-gray-300 dark:border-gray-700">
          <div class="grid gap-4 h-full">
            <div class="flex">
              <p class="text-sm">Персональные данные</p>
            </div>

            <div class="grid content-between">
              <div class="">
                <div class="">
                  <label for="message" class="block mt-2 mb-1 text-xs font-medium text-gray-900 dark:text-gray-400">Имя</label>
                  <div class="relative">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <p class="mdi mdi-account"></p>
                    </div>
                    <input :value="client.person" @change="clientPerson" type="text" id="person" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Иван Иванов">
                  </div>
                </div>

                <div class="">
                  <label for="message" class="block mt-2 mb-1 text-xs font-medium text-gray-900 dark:text-gray-400">Электронная почта</label>
                  <div class="relative">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <p class="mdi mdi-email"></p>
                    </div>
                    <input :value="client.email" @change="clientPerson" type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@domen.com">
                  </div>
                </div>

                <div class="">
                  <label for="message" class="block mt-2 mb-1 text-xs font-medium text-gray-900 dark:text-gray-400">Номер телефона</label>
                  <div class="relative">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <p class="mdi mdi-phone"></p>
                    </div>
                    <input :value="client.phone" @change="clientPerson" type="text" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+7 (987) 654 32 10">
                  </div>               
                </div>
              </div>

              <div class="flex items-center justify-end gap-4 h-full my-2">
                <div class="">
                  <button @click="savePerson" class="w-full relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-400 to-blue-800 group-hover:from-blue-400 group-hover:to-blue-800 hover:text-gray-100 dark:text-gray-300 hover:dark:text-gray-100 focus:ring-1 focus:outline-none focus:ring-cyan-200 dark:focus:ring-blue-700">
                    <span class="px-8 py-2 relative transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Сохранить
                    </span>
                  </button>
                </div>
                <div class="">
                  <button to="#" class="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 text-sm">Удалить профиль</button>
                </div>
              </div>

            </div>
          </div>
        </div>


        
        <div class="bg-white dark:bg-gray-800 px-4 py-4 border border-gray-300 dark:border-gray-700">
          <div class="flex">
            <p class="text-sm my-2">Товары в избранном</p>
          </div>
          <div v-if="favorites.length == 0" class="flex justify-center items-center h-24 min-h-full">
            <p>Нет товаров в избранном</p>
          </div>
          <div v-else class="">
            <div class="grid grid-cols-3 gap-4">
              <div v-for="product in favorites" :key="product.id" class="">
                
                <div class="flex items-center justify-center bg-white rounded-sm pb-12 relative">
                  <img :src="product.preview_image" class="h-20 rounded-sm"/>
                  <div class="absolute top-0 right-0 px-1">
                    <button @click="delProductToFav(product) && addToast('Товар удалён из избранных')" class="text-xs text-gray-700 font-semibold text-center mdi mdi-close"></button>
                  </div>   
                  <div class="absolute bottom-0 p-1">
                    <div  class="flex justify-center items-center text-center">
                      <nuxt-link :to="{ name: 'product-id', params: { id: product.id }}" class="text-xs text-gray-700 font-semibold">{{ product.name }}</nuxt-link>
                    </div>
                  </div>    
                </div>
                
              </div>
            </div>
          </div>
        </div>


        <div class="bg-white dark:bg-gray-800 px-4 py-4 border border-gray-300 dark:border-gray-700">
          <div class="flex">
            <p class="text-sm my-2">Товары в сравнении</p>
          </div>
          <div v-if="comp.length == 0" class="flex justify-center items-center h-24 min-h-full">
            <p>Нет товаров для сравнения</p>
          </div>
          <div v-else class="">
            <div class="grid grid-cols-3 gap-4">
              <div v-for="product in comp" :key="product.id" class="">
                
                <div class="flex items-center justify-center bg-white rounded-sm pb-12 relative">
                  <img :src="product.preview_image" class="h-20 rounded-sm"/>
                  <div class="absolute top-0 right-0 px-1">
                    <button @click="delToComparison(product) && addToast('Товар удалён из сравниваемых')" class="text-xs text-gray-700 font-semibold text-center mdi mdi-close"></button>
                  </div>   
                  <div class="absolute bottom-0 p-1">
                    <div  class="flex justify-center items-center text-center">
                      <nuxt-link :to="{ name: 'product-id', params: { id: product.id }}" class="text-xs text-gray-700 font-semibold">{{ product.name }}</nuxt-link>
                    </div>
                  </div>    
                </div>
                
              </div>
            </div>
          </div>
        </div>


      </div>

    </div>



    <Footer class="" />

  </div>
</template>
    
<script>
import { mapState, mapActions } from 'vuex'

import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
import Order from '~/components/sections/Order.vue'

import TopSliderSection from '~/components/sections/TopSliderSection.vue'

  export default {
    name: 'OrderPage',
      components: {
        TopSliderSection,
        Navbar,
        Order,
        Footer,
    },
    async asyncData({ $axios }) {
      const cts = await $axios.$get(`c/ct/`)
      const order = await $axios.$get(`o/orderinfo/MOW1485499/`)
      const widebanners = await $axios.$get('c/widebanners/')
      return { widebanners, cts, order }
    },
    data() {
      return {
        stat: true,
        comp: [ { "id": 171, "vcode": "0460300881", "description": "Аппарат Caddy оснащен большими разъемами ОКС 50 дпя выдерживания больших нагрузок. Благодаря компактной конструкции и поглощающему удары полимерному корпусу он отличается легкостью и удобством транспортировки. Большой блок охлаждения и тщательно выполненная конструкция обеспечивают длительный срок службы и позволяют работать даже в самых сложных условиях. Новый контроллер ArcPlus дополнительно оптимизирует процесс сварки, уменьшает разбрызгивание и улучшает повторное возбуждение дуги.", "name": "Сварочный инвертор ESAB Caddy Arc 251i, A34", "rating": "4.8", "only_price": 3179.1, "status": "order", "preview_image": "http://127.0.0.1:8000/files/img/c/preview/251i.png", "propstrmodel": [ { "id": 9902, "name": "Габаритные размеры, мм", "qname": "3b0e", "value": "418x188x208" }, { "id": 856, "name": "Максимальный сварочный ток, А", "qname": "jnzs", "value": "250" }, { "id": 9903, "name": "Напряжение холостого хода, В", "qname": "n3wd", "value": "65" }, { "id": 858, "name": "Основной режим работы", "qname": "pa0s", "value": "MMA" }, { "id": 857, "name": "Электропитание, В", "qname": "s7n4", "value": "трехфазная сеть 380 В 50 Гц" }, { "id": 9904, "name": "Частота питающей сети, Гц", "qname": null, "value": "50/60" }, { "id": 9905, "name": "Потребляемая мощность, В", "qname": null, "value": "400" } ], "brand": { "id": 3, "brand": "ESAB", "image": "http://127.0.0.1:8000/files/img/c/brand/esab_8CnTsO3.png", "carousel": true, "description": "" }, "quantity": 1 }, { "id": 813, "vcode": "0700300991", "description": "Мультипроцессные аппараты для промышленной сварки, сочетающие мощность и компактность. Эти мобильные и легкие сварочные аппараты обеспечат гибкость любой производственной среды. Производительные и надежные машины оснащены 4-роликовым механизмом подачи проволоки, который обеспечивает высокое и стабильное качество сварки, независимо от свариваемого материала.EMP 320ic с максимальной выходной мощностью 350А представляет собой идеальный универсальный сварочный аппарат для интенсивной работы со всеми видами сплошных и порошковых проволок диаметром 1.2 мм. Система EMP 255ic обладает максимальной выходной мощностью 300А.*Цену уточняйте у менеджера", "name": "Сварочный инвертор Rebel™ EMP 320ic", "rating": "4.0", "only_price": 4606.3, "status": "order", "preview_image": "http://127.0.0.1:8000/files/img/c/preview/320ic.png", "propstrmodel": [ { "id": 4591, "name": "Дополнительные режимы работы", "qname": "1jwq", "value": "MMA/TIG" }, { "id": 4592, "name": "Габаритные размеры, мм", "qname": "3b0e", "value": "686x292x495" }, { "id": 4593, "name": "Вес, кг", "qname": "7z26", "value": "31,4" }, { "id": 4595, "name": "Степень защиты", "qname": "ahev", "value": "IP23S" }, { "id": 4594, "name": "Максимальный сварочный ток, А", "qname": "jnzs", "value": "300" }, { "id": 4590, "name": "Основной режим работы", "qname": "pa0s", "value": "MIG/MAG" }, { "id": 4596, "name": "Электропитание, В", "qname": "s7n4", "value": "трехфазная сеть 380 В 50 Гц" } ], "brand": { "id": 3, "brand": "ESAB", "image": "http://127.0.0.1:8000/files/img/c/brand/esab_8CnTsO3.png", "carousel": true, "description": "" }, "quantity": 1 }, { "id": 1857, "vcode": "733921", "description": "Конструкция аппарата LHN 250i Plus имеет высокую прочность, мощность, надежность и другие характеристики, которые облегчат вашу повседневную работу - например, цифровую панель индикации, длинные сварочные кабели и несколько ручек для переноса аппарата. И самый важный момент: большая мощность при сохранении компактности и малого веса. Модель LHN 250i Plus имеет большой рабочий цикл при 250 A с эффективностью до 60%, что дает вам возможность работать целый день.", "name": "LHN 250I PLUS", "rating": "5.0", "only_price": 0, "status": "order", "preview_image": "http://127.0.0.1:8000/files/img/c/preview/2_fOdXRCk.jpg", "propstrmodel": [ { "id": 11870, "name": "Габаритные размеры, мм", "qname": "3b0e", "value": "446x140x330" }, { "id": 11872, "name": "Диапазон регулирования сварочного тока, А", "qname": "56np", "value": "30-250" }, { "id": 11871, "name": "Вес, кг", "qname": "7z26", "value": "11" }, { "id": 11875, "name": "Сварочные характеристики", "qname": null, "value": "." }, { "id": 11876, "name": "...", "qname": null, "value": "194 A @ 100%" }, { "id": 11877, "name": "...", "qname": null, "value": "250 A @ 60%" }, { "id": 11878, "name": "Потребляемое напряжение", "qname": null, "value": "." }, { "id": 11879, "name": "Частота, Hz", "qname": null, "value": "50-60" }, { "id": 11880, "name": "Фазы", "qname": null, "value": "1" }, { "id": 11881, "name": "В, V", "qname": null, "value": "220" }, { "id": 11882, "name": "Стандарты", "qname": null, "value": "IEC 60.974-1, EAC" }, { "id": 11873, "name": "Напряжение холостого хода, В", "qname": null, "value": "77" }, { "id": 11874, "name": "Плавкий предохранитель, А", "qname": null, "value": "50" } ], "brand": { "id": 3, "brand": "ESAB", "image": "http://127.0.0.1:8000/files/img/c/brand/esab_8CnTsO3.png", "carousel": true, "description": "" }, "quantity": 1 }, { "id": 81, "vcode": "0700300989", "description": "Rebel EMP 235ic с поддержкой 15 кг катушек является самым мобильным сварочным аппаратом в своем классе, и обладает достаточной мощностью и производительностью даже для самых требовательных работ. Многозадачность EMP 235ic в сочетании с небольшим весом и компактной формой делают его по-настоящему универсальным сварочным аппаратом.*Цену уточняйте у менеджера", "name": "Сварочный инвертор Rebel™ EMP 235ic", "rating": "3.7", "only_price": 3665.55, "status": "order", "preview_image": "http://127.0.0.1:8000/files/img/c/preview/235ic.png", "propstrmodel": [ { "id": 438, "name": "Дополнительные режимы работы", "qname": "1jwq", "value": "MMA/TIG" }, { "id": 441, "name": "Габаритные размеры, мм", "qname": "3b0e", "value": "686x292x495" }, { "id": 440, "name": "Диапазон регулирования сварочного тока, А", "qname": "56np", "value": "5-230" }, { "id": 443, "name": "Вес, кг", "qname": "7z26", "value": "28,6" }, { "id": 436, "name": "Максимальный сварочный ток, А", "qname": "jnzs", "value": "230" }, { "id": 439, "name": "Диаметр электрода, мм", "qname": "likf", "value": "0.6-1.2" }, { "id": 437, "name": "Основной режим работы", "qname": "pa0s", "value": "MIG/MAG" }, { "id": 442, "name": "Электропитание, В", "qname": "s7n4", "value": "трехфазная сеть 380 В 50 Гц" } ], "brand": { "id": 3, "brand": "ESAB", "image": "http://127.0.0.1:8000/files/img/c/brand/esab_8CnTsO3.png", "carousel": true, "description": "" }, "quantity": 1 }, { "id": 158, "vcode": "0459735880", "description": "Origo™ Tig 3000i AC/DC - аппарат для применения в промышленности и ответственного ремонта на двухколесной тележке. Промышленный трехфазный аппарат на 300 ампер для сварки на постоянном и переменном токе в среде аргона с высокочастотным поджигом дуги (HF TIG) и режимом ручной дуговой сварки (ММА) штучными покрытыми электродами.\r\n\r\nРазработан для высококачественной TIG сварки\r\nЭтот сварочный аппарат обеспечивает отличное зажигание и стабильную дугу, как на постоянном, так и на переменном токе. Может высококачественно сваривать любой материал различной толщины.\r\n\r\nСварка переменным током с функцией Qwave™\r\nОдной из наиболее важных задач сварочных аппаратов TIG сварки является обеспечение стабильной дуги.Аппарат Tig 3000i имеет функцию QWave™, обеспечивающую отличное управление дугой и низкий уровень шума, не снижающие в то же время качества сварки.\r\n\r\nЛегкость использования\r\nВысокая производительность и качество сварки являются достоинством этого аппарата. Панель управления аппарата Origo™ ТА24 AC/DC позволяет установить все необходимые функции для TIG DC (ТИГ Пост. ток). AC/DC (Пост./Перем. ток) и ММА сварки. Все параметры представлены так, что ввести их легко и просто", "name": "Сварочный инвертор ESAB Origo Tig 3000i AC/DC, TA24 AC/DC", "rating": "4.5", "only_price": 7507.57, "status": "order", "preview_image": "http://127.0.0.1:8000/files/img/c/preview/3000i.png", "propstrmodel": [ { "id": 805, "name": "Габаритные размеры, мм", "qname": "3b0e", "value": "652x412x423" }, { "id": 804, "name": "Диапазон регулирования сварочного тока, А", "qname": "56np", "value": "4-300" }, { "id": 806, "name": "Вес, кг", "qname": "7z26", "value": "42" }, { "id": 807, "name": "Основной режим работы", "qname": "pa0s", "value": "TIG" }, { "id": 803, "name": "Электропитание, В", "qname": "s7n4", "value": "трехфазная сеть 380 В 50 Гц" } ], "brand": { "id": 3, "brand": "ESAB", "image": "http://127.0.0.1:8000/files/img/c/brand/esab_8CnTsO3.png", "carousel": true, "description": "" }, "quantity": 1 } ],
        favorites: [ { "id": 171, "vcode": "0460300881", "description": "Аппарат Caddy оснащен большими разъемами ОКС 50 дпя выдерживания больших нагрузок. Благодаря компактной конструкции и поглощающему удары полимерному корпусу он отличается легкостью и удобством транспортировки. Большой блок охлаждения и тщательно выполненная конструкция обеспечивают длительный срок службы и позволяют работать даже в самых сложных условиях. Новый контроллер ArcPlus дополнительно оптимизирует процесс сварки, уменьшает разбрызгивание и улучшает повторное возбуждение дуги.", "name": "Сварочный инвертор ESAB Caddy Arc 251i, A34", "rating": "4.8", "only_price": 3179.1, "status": "order", "preview_image": "http://127.0.0.1:8000/files/img/c/preview/251i.png", "propstrmodel": [ { "id": 9902, "name": "Габаритные размеры, мм", "qname": "3b0e", "value": "418x188x208" }, { "id": 856, "name": "Максимальный сварочный ток, А", "qname": "jnzs", "value": "250" }, { "id": 9903, "name": "Напряжение холостого хода, В", "qname": "n3wd", "value": "65" }, { "id": 858, "name": "Основной режим работы", "qname": "pa0s", "value": "MMA" }, { "id": 857, "name": "Электропитание, В", "qname": "s7n4", "value": "трехфазная сеть 380 В 50 Гц" }, { "id": 9904, "name": "Частота питающей сети, Гц", "qname": null, "value": "50/60" }, { "id": 9905, "name": "Потребляемая мощность, В", "qname": null, "value": "400" } ], "brand": { "id": 3, "brand": "ESAB", "image": "http://127.0.0.1:8000/files/img/c/brand/esab_8CnTsO3.png", "carousel": true, "description": "" }, "quantity": 1 }, { "id": 813, "vcode": "0700300991", "description": "Мультипроцессные аппараты для промышленной сварки, сочетающие мощность и компактность. Эти мобильные и легкие сварочные аппараты обеспечат гибкость любой производственной среды. Производительные и надежные машины оснащены 4-роликовым механизмом подачи проволоки, который обеспечивает высокое и стабильное качество сварки, независимо от свариваемого материала.EMP 320ic с максимальной выходной мощностью 350А представляет собой идеальный универсальный сварочный аппарат для интенсивной работы со всеми видами сплошных и порошковых проволок диаметром 1.2 мм. Система EMP 255ic обладает максимальной выходной мощностью 300А.*Цену уточняйте у менеджера", "name": "Сварочный инвертор Rebel™ EMP 320ic", "rating": "4.0", "only_price": 4606.3, "status": "order", "preview_image": "http://127.0.0.1:8000/files/img/c/preview/320ic.png", "propstrmodel": [ { "id": 4591, "name": "Дополнительные режимы работы", "qname": "1jwq", "value": "MMA/TIG" }, { "id": 4592, "name": "Габаритные размеры, мм", "qname": "3b0e", "value": "686x292x495" }, { "id": 4593, "name": "Вес, кг", "qname": "7z26", "value": "31,4" }, { "id": 4595, "name": "Степень защиты", "qname": "ahev", "value": "IP23S" }, { "id": 4594, "name": "Максимальный сварочный ток, А", "qname": "jnzs", "value": "300" }, { "id": 4590, "name": "Основной режим работы", "qname": "pa0s", "value": "MIG/MAG" }, { "id": 4596, "name": "Электропитание, В", "qname": "s7n4", "value": "трехфазная сеть 380 В 50 Гц" } ], "brand": { "id": 3, "brand": "ESAB", "image": "http://127.0.0.1:8000/files/img/c/brand/esab_8CnTsO3.png", "carousel": true, "description": "" }, "quantity": 1 }, { "id": 1857, "vcode": "733921", "description": "Конструкция аппарата LHN 250i Plus имеет высокую прочность, мощность, надежность и другие характеристики, которые облегчат вашу повседневную работу - например, цифровую панель индикации, длинные сварочные кабели и несколько ручек для переноса аппарата. И самый важный момент: большая мощность при сохранении компактности и малого веса. Модель LHN 250i Plus имеет большой рабочий цикл при 250 A с эффективностью до 60%, что дает вам возможность работать целый день.", "name": "LHN 250I PLUS", "rating": "5.0", "only_price": 0, "status": "order", "preview_image": "http://127.0.0.1:8000/files/img/c/preview/2_fOdXRCk.jpg", "propstrmodel": [ { "id": 11870, "name": "Габаритные размеры, мм", "qname": "3b0e", "value": "446x140x330" }, { "id": 11872, "name": "Диапазон регулирования сварочного тока, А", "qname": "56np", "value": "30-250" }, { "id": 11871, "name": "Вес, кг", "qname": "7z26", "value": "11" }, { "id": 11875, "name": "Сварочные характеристики", "qname": null, "value": "." }, { "id": 11876, "name": "...", "qname": null, "value": "194 A @ 100%" }, { "id": 11877, "name": "...", "qname": null, "value": "250 A @ 60%" }, { "id": 11878, "name": "Потребляемое напряжение", "qname": null, "value": "." }, { "id": 11879, "name": "Частота, Hz", "qname": null, "value": "50-60" }, { "id": 11880, "name": "Фазы", "qname": null, "value": "1" }, { "id": 11881, "name": "В, V", "qname": null, "value": "220" }, { "id": 11882, "name": "Стандарты", "qname": null, "value": "IEC 60.974-1, EAC" }, { "id": 11873, "name": "Напряжение холостого хода, В", "qname": null, "value": "77" }, { "id": 11874, "name": "Плавкий предохранитель, А", "qname": null, "value": "50" } ], "brand": { "id": 3, "brand": "ESAB", "image": "http://127.0.0.1:8000/files/img/c/brand/esab_8CnTsO3.png", "carousel": true, "description": "" }, "quantity": 1 }, { "id": 81, "vcode": "0700300989", "description": "Rebel EMP 235ic с поддержкой 15 кг катушек является самым мобильным сварочным аппаратом в своем классе, и обладает достаточной мощностью и производительностью даже для самых требовательных работ. Многозадачность EMP 235ic в сочетании с небольшим весом и компактной формой делают его по-настоящему универсальным сварочным аппаратом.*Цену уточняйте у менеджера", "name": "Сварочный инвертор Rebel™ EMP 235ic", "rating": "3.7", "only_price": 3665.55, "status": "order", "preview_image": "http://127.0.0.1:8000/files/img/c/preview/235ic.png", "propstrmodel": [ { "id": 438, "name": "Дополнительные режимы работы", "qname": "1jwq", "value": "MMA/TIG" }, { "id": 441, "name": "Габаритные размеры, мм", "qname": "3b0e", "value": "686x292x495" }, { "id": 440, "name": "Диапазон регулирования сварочного тока, А", "qname": "56np", "value": "5-230" }, { "id": 443, "name": "Вес, кг", "qname": "7z26", "value": "28,6" }, { "id": 436, "name": "Максимальный сварочный ток, А", "qname": "jnzs", "value": "230" }, { "id": 439, "name": "Диаметр электрода, мм", "qname": "likf", "value": "0.6-1.2" }, { "id": 437, "name": "Основной режим работы", "qname": "pa0s", "value": "MIG/MAG" }, { "id": 442, "name": "Электропитание, В", "qname": "s7n4", "value": "трехфазная сеть 380 В 50 Гц" } ], "brand": { "id": 3, "brand": "ESAB", "image": "http://127.0.0.1:8000/files/img/c/brand/esab_8CnTsO3.png", "carousel": true, "description": "" }, "quantity": 1 }, { "id": 158, "vcode": "0459735880", "description": "Origo™ Tig 3000i AC/DC - аппарат для применения в промышленности и ответственного ремонта на двухколесной тележке. Промышленный трехфазный аппарат на 300 ампер для сварки на постоянном и переменном токе в среде аргона с высокочастотным поджигом дуги (HF TIG) и режимом ручной дуговой сварки (ММА) штучными покрытыми электродами.\r\n\r\nРазработан для высококачественной TIG сварки\r\nЭтот сварочный аппарат обеспечивает отличное зажигание и стабильную дугу, как на постоянном, так и на переменном токе. Может высококачественно сваривать любой материал различной толщины.\r\n\r\nСварка переменным током с функцией Qwave™\r\nОдной из наиболее важных задач сварочных аппаратов TIG сварки является обеспечение стабильной дуги.Аппарат Tig 3000i имеет функцию QWave™, обеспечивающую отличное управление дугой и низкий уровень шума, не снижающие в то же время качества сварки.\r\n\r\nЛегкость использования\r\nВысокая производительность и качество сварки являются достоинством этого аппарата. Панель управления аппарата Origo™ ТА24 AC/DC позволяет установить все необходимые функции для TIG DC (ТИГ Пост. ток). AC/DC (Пост./Перем. ток) и ММА сварки. Все параметры представлены так, что ввести их легко и просто", "name": "Сварочный инвертор ESAB Origo Tig 3000i AC/DC, TA24 AC/DC", "rating": "4.5", "only_price": 7507.57, "status": "order", "preview_image": "http://127.0.0.1:8000/files/img/c/preview/3000i.png", "propstrmodel": [ { "id": 805, "name": "Габаритные размеры, мм", "qname": "3b0e", "value": "652x412x423" }, { "id": 804, "name": "Диапазон регулирования сварочного тока, А", "qname": "56np", "value": "4-300" }, { "id": 806, "name": "Вес, кг", "qname": "7z26", "value": "42" }, { "id": 807, "name": "Основной режим работы", "qname": "pa0s", "value": "TIG" }, { "id": 803, "name": "Электропитание, В", "qname": "s7n4", "value": "трехфазная сеть 380 В 50 Гц" } ], "brand": { "id": 3, "brand": "ESAB", "image": "http://127.0.0.1:8000/files/img/c/brand/esab_8CnTsO3.png", "carousel": true, "description": "" }, "quantity": 1 } ],
      }
    },
    methods: {
      ...mapActions({
        addToast: 'addToast',
        clientPerson: 'clientPerson',
        createCookieData: 'createCookieData',
        createMainCookie: 'createMainCookie',
        delProductToFav: 'modules/favorites/delProductToFav',
        delToComparison: 'modules/comparison/delToComparison',
      }),
      savePerson(){
        /// Передача и присваение id на сервер, для определения клиента
        this.addToast("Ваши данные успешно сохранены")
      },
      createCookie() {
        console.log("Create cookie")
        this.$storage.setCookie("cookie", true)
        // this.$storage.setCookie("clientName", "EfimovSergeiV")
      },
      readCookie() {
        console.log("Read cookie")
        this.allCookie = this.$storage.getCookies()
      },
      editCookie() {
        console.log("Edit cookie")
      },
      removeCookie() {
        console.log("Remove cookie")
        this.$storage.removeCookie('cookie')
        // this.$storage.removeCookie('clientName')
      },
    },
    computed: {
    ...mapState({
      client: (state) => state.client,
      // comp: (state) => state.modules.comparison.products,
      // favorites: (state) => state.modules.favorites.products,
    }),
  },
  }
</script>