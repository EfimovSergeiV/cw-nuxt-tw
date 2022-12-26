<template>
  <div class="">

    <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">


      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">

        <div v-for="product in comp.slice(0, 4)" :key="product.id" class="">

          <div class="bg-white border-gray-200 border rounded-sm dark:border-gray-700 dark:bg-gray-800 h-full">

            <div class="">

              <div class="bg-white flex items-center justify-center m-1 rounded-sm relative">
                <div class="">
                  <img :src="product.preview_image" />
                </div>
                <div class="absolute top-0 right-0">
                  <div class="cursor-pointer text-gray-700 hover:text-gray-900 dark:text-gray-700 hover:dark:text-gray-900">
                    <p class="mdi mdi-24px mdi-window-close"></p>
                  </div>
                </div>
                
              </div>

              <div class="flex items-center justify-center h-28">
                <nuxt-link :to="{ name: 'product-id', params: { id: product.id } }" class="text-sm text-center">{{ product.name }}</nuxt-link>
              </div>

              <div class="flex items-center justify-center gap-2 px-2">
                <div class="">
                  <LikeBtn cls="px-3 py-1.5" :product="product" />
                </div>
                <div class="">
                  <button @click="requestPriceProduct(product)" v-if="product.only_price === 0" class="w-full relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-400 to-blue-800 group-hover:from-blue-400 group-hover:to-blue-800 hover:text-gray-100 dark:text-gray-300 hover:dark:text-gray-100 focus:ring-1 focus:outline-none focus:ring-cyan-200 dark:focus:ring-blue-700">
                    <span class="w-full relative px-10 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Запросить
                    </span>
                  </button>
                  <CartBtn v-else cls="px-10 py-1.5" :product="product" />
                </div>
              </div>
              
            </div>


          </div>

        </div>
      </div>


      <div class="grid grid-cols-2 lg:grid-cols-4">
        <div v-for="prod in comp" :key="prod.id" class="my-4">
          <div class="flex gap-2 justify-center items-center">
            <div class="">
              <p class="text-xl">{{ prod.only_price.toLocaleString() }}</p>
            </div>
            <div class="">
              <p class="">руб.</p>
            </div>
          </div>
          
        </div>
      </div>


      <div class="my-4">
        <div v-for="prop in comp[0].propstrmodel" :key="prop.id" class="">


          <div class="bg-white border-gray-200 border rounded-sm dark:border-gray-700 dark:bg-gray-800 px-2 py-1">
            <p class="text-sm">{{ prop.name }}</p>
          </div>
          


          <div class="grid grid-cols-2 lg:grid-cols-4 items-center gap-4">
            <div v-for="product in comp.slice(0, 4)" :key="product.id">
              <div class="text-center my-2">
                <p>{{ getPropValue(product.propstrmodel, prop.name) }}</p>
              </div>
              
            </div>            
          </div>


        </div>
      </div>


    </div>

    <p class="text-xs mt-10">{{ comp }}</p>
  </div>
</template>
    
<script>
import { mapActions } from 'vuex'
import CartBtn from '../CartBtn.vue'
import LikeBtn from '../LikeBtn.vue'

  export default {
    name: 'CompareSection',
    components: {
      CartBtn,
      LikeBtn,
    },
    data() {
      return {
        comp: [
          {
            "id": 349,
            "vcode": "5678303WM0",
            "name": "Сварочные электроды Esab УОНИИ 13/45, 3.0 мм",
            "description": "Тип покрытия – основное\r\nАналогичные электроды, выпускаемые в соответствии с требованиями Федеральных норм и правил в области использования атомной энергии ПНАЭ Г-7-009-89.\r\nТок: = (+)\r\nПространственные положения при сварке: 1, 2, 3, 4, 6\r\nРежимы прокалки: 350-400°С, 2 часа\r\n\r\n*Цена указана за пачку",
            "promo": false,
            "discount": null,
            "rating": "5.0",
            "preview_image": "http://127.0.0.1:8000/files/img/c/preview/ozs-12_2.png",
            "only_price_status": true,
            "only_price": 1050.0,
            "currency": "RUB",
            "status": "order",
            "product_comp": [],
            "brand": {
                "id": 3,
                "brand": "ESAB",
                "image": "http://127.0.0.1:8000/files/img/c/brand/esab_8CnTsO3.png",
                "carousel": true,
                "description": ""
            },
            "propstrmodel": [
                {
                    "id": 2309,
                    "name": "Вес пачки, кг",
                    "qname": "2rzq",
                    "value": "4,5"
                },
                {
                    "id": 2312,
                    "name": "Диаметр, мм",
                    "qname": "6d53",
                    "value": "2,5"
                },
                {
                    "id": 2310,
                    "name": "Длина, мм",
                    "qname": "b9jb",
                    "value": "350"
                },
                {
                    "id": 2311,
                    "name": "Сила сварочного тока, А",
                    "qname": "dahl",
                    "value": "60-90"
                }
              ],
          },
          {
            "id": 806,
            "vcode": "0700300985",
            "name": "Сварочный инвертор Rebel™ EMP 215ic",
            "description": "Сварочные аппараты серии Rebel имеют универсальное питание 120/230 В и поддерживают новейшие технологии сварки. В революционной конструкции Rebel использованы идеи профессиональных сварщиков, что позволило создать готовую портативную машину для сварки самых разных металлов, например, углеродистой стали, MIG алюминия, нержавеющей стали.*Цену уточняйте у менеджера",
            "promo": false,
            "discount": null,
            "rating": "3.9",
            "preview_image": "http://127.0.0.1:8000/files/img/c/preview/215ic.png",
            "only_price_status": true,
            "only_price": 3280.42,
            "currency": "EUR",
            "status": "order",
            "product_comp": [],
            "brand": {
                "id": 3,
                "brand": "ESAB",
                "image": "http://127.0.0.1:8000/files/img/c/brand/esab_8CnTsO3.png",
                "carousel": true,
                "description": ""
            },
            "propstrmodel": [
                {
                    "id": 2207,
                    "name": "Вес пачки, кг",
                    "qname": "2rzq",
                    "value": "4,5"
                },
                {
                    "id": 2208,
                    "name": "Диаметр, мм",
                    "qname": "6d53",
                    "value": "3,2"
                },
                {
                    "id": 2206,
                    "name": "Длина, мм",
                    "qname": "b9jb",
                    "value": "350"
                },
                {
                    "id": 2205,
                    "name": "Сила сварочного тока, А",
                    "qname": "dahl",
                    "value": "90-155"
                }
            ],
          },
          {
            "id": 321,
            "vcode": "4804253000",
            "name": "Сварочные электроды Esab OK 48.04, 2.5 мм",
            "description": "Тип покрытия – основное. По своим свойствам электрод схож с OK 48.00, однако обладает чуть более высоким коэффициентом наплавки, а наплавленный металл имеет более высокие прочностные показатели. Однако сварку в вертикальных и потолочных положениях выполнять ими несколько сложнее. Кроме того, сварку можно производить как на постоянном токе обратной и прямой полярности, так и на переменном токе. Покрытие характеризуется повышенной влагостойкостью, а наплавленный металл стоек к образованию трещин.\r\n*Цена указана за пачку",
            "promo": false,
            "discount": null,
            "rating": "3.9",
            "preview_image": "http://127.0.0.1:8000/files/img/c/preview/ok46_5.658x658_iefYtvM.jpg",
            "only_price_status": true,
            "only_price": 48.92,
            "currency": "EUR",
            "status": "order",
            "product_comp": [],
            "brand": {
                "id": 3,
                "brand": "ESAB",
                "image": "http://127.0.0.1:8000/files/img/c/brand/esab_8CnTsO3.png",
                "carousel": true,
                "description": ""
            },
            "propstrmodel": [
                {
                    "id": 2203,
                    "name": "Вес пачки, кг",
                    "qname": "2rzq",
                    "value": "4,3"
                },
                {
                    "id": 2204,
                    "name": "Диаметр, мм",
                    "qname": "6d53",
                    "value": "2,5"
                },
                {
                    "id": 2202,
                    "name": "Длина, мм",
                    "qname": "b9jb",
                    "value": "350"
                },
                {
                    "id": 2201,
                    "name": "Сила сварочного тока, А",
                    "qname": "dahl",
                    "value": "75-100"
                }
            ],
          },
        ]
      }
    },
    methods: {
      ...mapActions({
        addToast: 'addToast',
      }),
      getPropValue(props, name) {
        let value = null
        props.forEach((el) => {
          if (el.name === name) {
            value = el.value
          }
        })
        return value
      },
    }
  }
</script>