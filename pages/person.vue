<template>
  <div class="">

    <Header />

    <TopSliderSection :widebanners="widebanners" />

    <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">
      <div id="cat-title" class="flex justify-end mt-2">
        <p class="text-3xl font-bold">Ваши заказы</p>
      </div>
    </div>

    <Navbar :cts="cts" />



    <div class="mx-auto py-2 px-4 lg:max-w-7xl lg:px-8">



      <div class="">
        <div class="border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-sm py-1 px-4 transition-all">

          <div class="py-2 grid grid-cols-1 gap-2">
            <p class="text-lg">Ваш заказ успешно принят!</p>
            <p class="">Мы свяжемся с вами по указанным вами контактам</p>
          </div>

          <div class="py-2">
            <p class="text-lg">Контактные данные:</p>

            <div class="py-2 px-4 grid grid-cols-1 gap-2">
              <p class="text-sm">Имя: {{ client.person }}</p>
              <p class="text-sm">Телефон: {{ client.phone }}</p>
              <p class="text-sm">Электронная почта: {{ client.email }}</p>
            </div>
            
          </div>

          <div class="py-2">
            <p class="text-lg">Подробности заказа:</p>
            <div v-for="order in orders" :key="order.id" class="px-4 py-2">
              
              <div class="grid grid-cols-1 gap-2">
                <p class="text-sm">Номер заказа: <span class="font-semibold">{{ order.order_number }}</span></p>

                <div class="flex gap-4">
                  <p class="text-sm">Статус заказа:</p>
                  <div class="">
                    <p v-if="order.status === 'notprocessed'">Не обработан</p>
                    <p v-else>Обработан</p>
                  </div>
                </div>                
              </div>
              
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div v-for="product in order.client_product" :key="product.id" class="">              
                  <div class="py-2">
                    <div class="grid grid-cols-1 md:flex gap-4">
                      
                      <div class="py-4 px-8 bg-white rounded-sm flex items-center justify-center">
                        <img :src="product.preview_image" alt="" class=" h-40 md:h-20" />
                      </div>
                      
                      <div class="">
                        <div class="">
                          <p class="text-xs">{{ product.vcode }}</p>
                          <div class="py-2">
                            <p class="text-sm">{{ product.name }}</p>
                            <p class="text-sm">{{ product.price }} руб.</p>                          
                          </div>
                          <p class="text-sm">Кол-во: {{ product.quantity }}</p>
                        </div>
                      </div>

                    </div>                  
                  </div>
                </div>
              </div>


              <p class="text-sm">Итог заказа: <span class="text-base">{{ order.total.toLocaleString() }}</span> руб.</p>

            </div>
            
          </div>

          <div class="py-6 flex items-center justify-center">
            <nuxt-link :to="{ name: 'cts' }" class="uppercase">Продолжить покупки</nuxt-link>
          </div>

        </div>
      </div>

      


    </div>

    <Recommend :recommends="recommends" />
    <Footer :brands="brands" class="" />

  </div>
</template>
    
<script>
import { mapState, mapActions } from 'vuex'

import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
import Order from '~/components/sections/Order.vue'
import Recommend from '~/components/sections/Recommend.vue'

import TopSliderSection from '~/components/sections/TopSliderSection.vue'

  export default {
    name: 'OrderPage',
      components: {
        TopSliderSection,
        Navbar,
        Order,
        Recommend,
        Footer,
    },
    async asyncData({ $axios }) {
      const cts = await $axios.$get(`c/ct/`)
      const brands = await $axios.$get('/c/brands/')
      const widebanners = await $axios.$get('c/widebanners/')
      const recommends = await $axios.$get(`c/recommend/`)
      return { widebanners, cts, brands, recommends }
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
      // createCookie() {
      //   console.log("Create cookie")
      //   this.$storage.setCookie("cookie", true)
      //   this.$storage.setCookie("clientName", "EfimovSergeiV")
      // },
      readCookie() {
        console.log("Read cookie")
        this.allCookie = this.$storage.getCookies()
      },
      editCookie() {
        console.log("Edit cookie")
      },
      // removeCookie() {
      //   console.log("Remove cookie")
      //   this.$storage.removeCookie('cookie')
      //   this.$storage.removeCookie('clientName')
      // },
    },
    computed: {
    ...mapState({
      client: (state) => state.client,
      orders: (state) => state.modules.cart.orders,
      comp: (state) => state.modules.comparison.products,
      favorites: (state) => state.modules.favorites.products,
    }),
  },
  }
</script>