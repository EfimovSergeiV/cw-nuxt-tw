<template>
  <div class="">

    <Header />
    <Navbar :cts="cts" />



    <div class="mx-auto py-2 px-4 lg:max-w-7xl lg:px-8">


      <div class="bg-white dark:bg-gray-800 px-12 py-4 mb-4 border border-gray-300 dark:border-gray-700">
        <div class="flex gap-8">
          <nuxt-link to="#">Link one</nuxt-link>
          <nuxt-link to="#">Link two</nuxt-link>
          <nuxt-link to="#">Link third</nuxt-link>
          <nuxt-link to="#">Link five</nuxt-link>
        </div>
      </div>


      <div class="bg-white dark:bg-gray-800 px-12 py-4 border border-gray-300 dark:border-gray-700">


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

  export default {
    name: 'OrderPage',
      components: {
      Navbar,
      Order,
      Footer,
  },
    async asyncData({ $axios }) {
      const cts = await $axios.$get(`c/ct/`)
      const order = await $axios.$get(`o/orderinfo/MOW1485499/`)
      return { cts, order }
    },
    data() {
      return {
        stat: false,
        allCookie: null,
      }
    },
    methods: {
      ...mapActions({
        createCookieData: 'createCookieData',
        createMainCookie: 'createMainCookie'
      }),
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
  //   computed: {
  //   ...mapState({
  //     clientName: (state) => state.storage.clientName
  //   }),
  // },
  }
</script>