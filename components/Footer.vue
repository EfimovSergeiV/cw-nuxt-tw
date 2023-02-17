<template>
  <div class="mx-auto py-1 px-4 lg:max-w-7xl lg:px-8">

    <div class="">

      <div class="md:flex md:justify-between items-center my-4">
        <div class="flex my-4">
          <img src="~/assets/images/vk-logo.svg" alt="vk-logo" width="20px" height="20px"/>
          <a href="https://vk.com/glsvar" target="_blank" class="font-bold text-base mx-2">МЫ ВКОНТАКТЕ</a>
        </div>
        <div class="w-full md:w-1/2">
          <p class="text-xs text-right my-3 select-none">
            Все цены и материаллы, указанные на сайте www.glsvar.ru, приведены как справочная информация и не являются публичной офертой, определяемой положениями ст. 437 ГК РФ, и могут быть изменены в любое время без предупреждения. 
            Для получения подробной информации о стоимости, сроках и условиях поставки просьба обращаться по указанным на сайте телефонам.
          </p>          
        </div>
      </div>

      <div class="md:flex md:justify-between">
        <ul class="flex flex-wrap items-center justify-center text-xs mt-3 md:text-sm sm:mt-0 md:order-last my-2">
          <li>
            <nuxt-link :to="{ name: 'policy'}" class="mr-4 md:mr-6 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">Политика обработки данных</nuxt-link>
          </li>

          <li>

            <div class=" relative group">
              <nuxt-link :to="{ name: 'about' }" class="mr-4 md:mr-6 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">Производители</nuxt-link>
              <div class="absolute pb-4 bottom-2 translate-y-4 group-hover:translate-y-0 transition invisible group-hover:visible opacity-0 group-hover:opacity-100 duration-500 ease-in-out group-hover:transform z-50">
                <!-- -->
                <div class="bg-white border border-gray-300 rounded-sm px-6 py-2 w-48">
                  <div v-for="brand in brands" :key="brand.id" class="my-1">
                    <nuxt-link class="text-gray-700 :hover:text-gray-900 hover:font-semibold" :to="{ name: 'prods', query: { brnd: brand.id, page: 1 }}">{{ brand.brand }}</nuxt-link>
                  </div>
                </div>

              </div>
            </div>

          </li>

          <li>
            <nuxt-link :to="{ name: 'about' }" class="mr-4 md:mr-6 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">Сертификаты</nuxt-link>
          </li>

          <li>
            <button @click="showAllert()" class="mr-4 md:mr-6 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">Способы оплаты</button>
          </li>
          <li>
            <button @click="showAllert()" class="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">Доставка</button>
          </li>
        </ul>
        <span class="text-xs text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 flex items-end justify-center md:justify-start my-2">© 2023 <p class="mx-1">Главный сварщик</p></span>
      </div>

    

      <!-- <div class="relative z-10 hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true">

        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div class="fixed inset-0 z-10 overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

              <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:max-w-4xl mx-4">
                

                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                          Terms of Service
                      </h3>
                      <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
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
                      <button data-modal-toggle="defaultModal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                      <button data-modal-toggle="defaultModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                  </div>
                </div>



              <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
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
              </div>

            </div>
          </div>
        </div>
      </div> -->

    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

  export default {
      name: 'Footer',
      components: {
    },
    props: {
      brands: {
        type: Array,
        default: Array,
      },
    },
    data() {
      return {
  
      }
    },
    methods: {
      ...mapActions({
        addToast: 'addToast',
      }),
      showAllert() {
        this.addToast('Раздел временно не доступен')
      }
    }
  }
</script>
