<template>

  <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">
    <div class="">

      <div class="md:flex md:justify-between items-center py-4">
        <div class="flex py-4">
          <img src="~/assets/images/vk-logo.svg" alt="vk-logo" width="20px" height="20px"/>
          <a href="https://vk.com/glsvar" target="_blank" class="font-bold text-base mx-2">МЫ ВКОНТАКТЕ</a>
        </div>
        <div class="w-full md:w-1/2">
          <p class="text-[10px] md:text-xs text-right my-3 select-none">
            Все цены и материаллы, указанные на сайте www.glsvar.ru, приведены как справочная информация и не являются публичной офертой, определяемой положениями ст. 437 ГК РФ, и могут быть изменены в любое время без предупреждения. 
            Для получения подробной информации о стоимости, сроках и условиях поставки просьба обращаться по указанным на сайте телефонам.
          </p>          
        </div>
      </div>


      <div class="">
        <div class="md:flex md:justify-between">
          <ul class="flex flex-wrap items-center justify-center text-xs mt-3 md:text-sm sm:mt-0 md:order-last py-2 relative">
            <li>
              <nuxt-link :to="{ name: 'policy'}" class="mr-4 md:mr-6 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">Политика обработки данных</nuxt-link>
            </li>

            <li>

              <div class="group">
                <nuxt-link :to="{ name: 'about' }" class="mr-4 md:mr-6 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">Производители</nuxt-link>
                
                <div class="absolute bottom-0 left-0 translate-y-0 group-hover:-translate-y-4 py-4 w-full transition invisible group-hover:visible opacity-0 group-hover:opacity-100 duration-500 ease-in-out group-hover:transform z-50">
                  <div class="bg-white border border-gray-500/50 rounded-sm">
                    <div class="grid grid-cols-4 gap-2 p-2">
                      <div v-for="brand in brands" :key="brand.id" class="py-1">
                        <nuxt-link class="text-gray-700 :hover:text-gray-900 text-xs" :to="{ name: 'prods', query: { brnd: brand.id, page: 1 }}">{{ brand.brand }}</nuxt-link>
                      </div>                      
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
          <span class="text-xs text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 flex items-end justify-center md:justify-start py-2">© 2023 <p class="mx-1">Главный сварщик</p></span>
        </div>
      </div>

    </div>
  </div>

<!-- <div class="mx-auto py-1 px-4 lg:max-w-7xl lg:px-8">

    <div class="">

      <div class="md:flex md:justify-between items-center my-4">
        <div class="flex my-4">
          <img src="~/assets/images/vk-logo.svg" alt="vk-logo" width="20px" height="20px"/>
          <a href="https://vk.com/glsvar" target="_blank" class="font-bold text-base mx-2">МЫ ВКОНТАКТЕ</a>
        </div>
        <div class="w-full md:w-1/2">
          <p class="text-[10px] md:text-xs text-right my-3 select-none">
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

    </div>
  </div> -->
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
