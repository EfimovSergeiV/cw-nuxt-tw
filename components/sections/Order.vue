<template>
    <div class="">
      <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">

        <div class="bg-white border-gray-200 border dark:border-gray-700 dark:bg-gray-800 rounded-sm">
          <div class="p-2">
            <p>Ваш заказ {{ order.order_number }}</p>
            <br />
            <p>Стутус: {{ statusOrders[order.status] }}</p>
            
            <p>Итог заказа: {{ order.total }}</p>

            <br />
            <p>Заказ:</p>
            <div class="" v-for="product in order.client_product" :key="product.id">
              <a :href="`/product/${ product.id }`" target="_blank">{{ product.name }}</a>
            </div>


            <div class="mt-4">
              <button class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-400 to-blue-800 group-hover:from-blue-400 group-hover:to-blue-800 hover:text-gray-100 dark:text-gray-300 hover:dark:text-gray-100 focus:ring-1 focus:outline-none focus:ring-cyan-200 dark:focus:ring-blue-700">
                <span class="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Отменить заказ
                </span>
              </button>              
            </div>  
          </div>
        </div>

        <small>{{ order }}</small>
  
      </div>
    </div>
  </template>
  
  <script>
    
    export default {
      name: 'OrderSection',
      components: {

  },
      props: {
        order: {
          type: Array,
          default: Array,
        },
      },
      data() {
        return {
          dataset: true,
          statusOrders: {
            "notprocessed": "не обработан",
            "inprocessed": "в обработке",
            "processed": "обработан",
            "awaitingpayment": "ожидает оплаты",
            "delivery": "доставка ТК",
            "waitingclient": "ожидает клиента",
            "completed": "выполнен",
            "notcompleted": "не выполнен",
          }
        }
      },
    }
  </script>