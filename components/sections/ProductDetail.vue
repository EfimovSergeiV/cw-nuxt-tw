<template>
  <section id="product-detail">
    <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">
      <div class="bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 shadow-md my-4">
        <div class="p-2">
          <h1>{{ product.name }}</h1>
        </div>
      </div>

      <div class="bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 shadow-md">
        <div class="p-2">
          <div class="flex flex-row gap-4">
            
            <div class="basis-1/4">
              <div class="flex items-center justify-center p-2 bg-white rounded-sm">
                <img src="https://api.glsvar.ru/files/img/c/preview/strong-400.png" width="235" height="177" class="rounded-sm"/>
              </div>
              
            </div>

            <div class="basis-1/2">

              <div class="">
                <div v-for="param in product.propstrmodel" :key="param.id">
                  <div class="flex justify-between">
                    <div class=""><small>{{ param.name }} :</small></div>
                    <div class="text-right"><small>{{ param.value }}</small></div>                
                  </div>
                </div>                  
              </div>

            </div>

            <div class="basis-1/4 flex items-center justify-center">


              <div class="text-center">
                <p class="text-4xl font-bold dark:text-gray-300 my-4">12 500 руб.</p>
                <div class=" ">
                  <div class="flex items-center justify-center">
                    <div class="">
                      <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            В избранное
                        </span>
                      </button>
                    </div>
                    <div class="">
                      <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            В корзину
                        </span>
                      </button>
                    </div>                  
                  </div>

                </div>

              </div>
              
            </div>

          </div>
          
          <div class="py-8">
            <p>{{ product.decription }}</p>
          </div>


        </div>

      </div>


      <div class="text-xs mt-6">
        <p>{{ product }}</p>
      </div>
    </div>

  </section>
</template>

<script>
  export default {
    name: 'ProductDetail',
      components: {
    },
    // props: {
    //   product: {
    //     type: Object,
    //     default: Object,
    //   },
    // },
    data() {
      return {
        product: {
          name: "Cварочный инвертор AuroraPRO STRONGHOLD 400M",
          decription: "Профессиональный инвертор STRONGHOLD 400M предназначендля работы штучными электродами (MMA) в условиях небольшого производства. Максимальный ток в 400А достигается при весе всего 22 кг.Профессиональный сварщик по достоинству оценит данный аппарат.Широкие возможности настроек инвертора обеспечивают высокое качество сварки практически в любых условиях.",
          propstrmodel: [
              {
                  "id": 7924,
                  "name": "Наибольшая пропускная способность при наибольшем рабочем давлении, л/мин",
                  "qname": "03sn",
                  "value": "30"
              },
              {
                  "id": 7920,
                  "name": "Габаритные размеры, мм",
                  "qname": "3b0e",
                  "value": "128х158х232"
              },
              {
                  "id": 7922,
                  "name": "Масса комплекта, кг",
                  "qname": "8q2m",
                  "value": "1"
              },
              {
                  "id": 7923,
                  "name": "Наименьшее давление газа на входе, при наибольшем расходе МПа (кгс/см2)",
                  "qname": "hekh",
                  "value": "0,8 (8)"
              },
              {
                  "id": 7921,
                  "name": "Наибольшее давление газа на входе, МПа (кгс/см2)",
                  "qname": "ik6q",
                  "value": "10 (100)"
              },
              {
                  "id": 9759,
                  "name": "Вес, кг",
                  "qname": "7z26",
                  "value": "5"
              },
              {
                  "id": 11635,
                  "name": "Тип проволоки",
                  "qname": "cop",
                  "value": "омеднённая"
              },
              {
                  "id": 9758,
                  "name": "Диаметр проволоки, мм",
                  "qname": "emjx",
                  "value": "1,0"
              }
          ],
        },
      }
    },
  }
</script>