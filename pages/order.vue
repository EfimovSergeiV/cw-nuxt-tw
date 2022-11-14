<template>
    <div class="">
  
      <Header />
      <Navbar :cts="cts" />
  
      <Order />
  
      <Footer class="" />
  
    </div>
  </template>
    
  <script>
  import Navbar from '~/components/Navbar.vue'
  import Footer from '~/components/Footer.vue'
  import Order from '~/components/sections/Order.vue'
  
    export default {
      name: 'CartPage',
        components: {
        Navbar,
        Order,
        Footer,
    },
      async asyncData({ $axios }) {
        const cts = await $axios.$get(`c/ct/`)
        return { cts }
      },
      data() {
        return {
          stat: false,
        }
      },
    }
  </script>