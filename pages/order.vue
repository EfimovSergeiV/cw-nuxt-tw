<template>
  <div class="">

    <Header />
    <Navbar :cts="cts" />

    <Order :order="order" />

    <Footer class="" />

  </div>
</template>
    
<script>
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
      const order = await $axios.$get(`o/orderinfo/PSK1156363/`)
      return { cts, order }
    },
    data() {
      return {
        stat: false,
      }
    },
  }
</script>