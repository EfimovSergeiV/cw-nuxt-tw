<template>
    <div class="fixed inset-0" id="my-modal" >
      <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">


        <div class="mt-3 text-center">




            <div class="py-4">
              <label for="message" class="block mt-2 mb-1 text-xs font-medium text-gray-700">Где вы находитесь?</label>
              <div class="relative">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <p class="mdi mdi-map-marker text-gray-700"></p>
                </div>
                <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm w-full rounded-sm focus:ring-blue-500 focus:border-blue-500 block  pl-10 p-2.5" placeholder="Город">
              </div>
            </div>

            <div class="py-4">
              <label for="message" class="block mt-2 mb-1 text-xs font-medium text-gray-700">Как с вами связаться?</label>
              <div class="relative">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <p class="mdi mdi-monitor-cellphone text-gray-700"></p>
                </div>
                <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm w-full rounded-sm focus:ring-blue-500 focus:border-blue-500 block  pl-10 p-2.5" placeholder="Телефон или email">
              </div>
            </div>

            <div class="">
              <label for="message" class="block mt-2 mb-1 text-xs font-medium text-gray-900 dark:text-gray-400">sdflksd</label>
              <textarea v-model="comment" id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Напишите что-нибудь..."></textarea>
            </div>


          <div class="items-center px-4 py-3">
            <button id="ok-btn" class="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300">
              Отправить
            </button>
          </div>

        </div>
      </div>

    </div>
  </template>
  
  
  
  <script>
  
    export default {
        name: 'showWriteUsModal',
        components: {
      },
      props: {
  
      },
      data() {
        return {
  
        }
      },
  
      methods: {
  
        },
      }
  </script>