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


      <!-- <div class="bg-white dark:bg-gray-800 px-12 py-4 border border-gray-300 dark:border-gray-700">

        <div class="flex gap-4 my-4">
          <button @click="createMainCookie()" class="bg-green-500 rounded-sm px-5 py-1 shadow-md font-bold hover:bg-green-600 text-gray-100">Create State</button>
          <button @click="readCookie()" class="bg-blue-500 rounded-sm px-5 py-1 shadow-md font-bold hover:bg-blue-600 text-gray-100">Read State</button>
          <button @click="editCookie()" class="bg-yellow-500 rounded-sm px-6 py-1 shadow-md font-bold hover:bg-yellow-600 text-gray-100">Edit State</button>
          <button @click="removeCookie()" class="bg-red-500 rounded-sm px-6 py-1 shadow-md font-bold hover:bg-red-600 text-gray-100">Remove State</button>
        </div>

        <div class="flex gap-4 my-4">
          <button @click="createCookie()" class="bg-green-500 rounded-sm px-4 py-1 shadow-md font-bold hover:bg-green-600 text-gray-100">Create Cookie</button>
          <button @click="readCookie()" class="bg-blue-500 rounded-sm px-4 py-1 shadow-md font-bold hover:bg-blue-600 text-gray-100">Read Cookie</button>
          <button @click="editCookie()" class="bg-yellow-500 rounded-sm px-4 py-1 shadow-md font-bold hover:bg-yellow-600 text-gray-100">Edit Cookie</button>
          <button @click="removeCookie()" class="bg-red-500 rounded-sm px-4 py-1 shadow-md font-bold hover:bg-red-600 text-gray-100">Remove Cookie</button>
        </div>

      </div>

      <div class="bg-white dark:bg-gray-800 px-4 py-4 border border-gray-300 dark:border-gray-700 my-4">
        <div class="">
          <p class="text-xs">{{ JSON.stringify($storage.state) }}</p>
          <p class="text-xs">A : {{ $storage.state }}</p>
          <p class="text-xs">B : {{ $storage.state.clientName }}</p>
          <p class="text-xs">allCookie : {{ allCookie }}</p>
          <p class="text-xs">clientName : {{ clientName }}</p>
        </div>
      </div> -->

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
      comp: (state) => state.modules.comparison.products,
      favorites: (state) => state.modules.favorites.products,
    }),
  },
  }
</script>