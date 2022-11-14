<template>
  <div class="">

    <Header />
    <Navbar :cts="cts" />

    <CartForm :shops="shops" />

    <Footer class="" />

  </div>
</template>
  
<script>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
import CartForm from '~/components/sections/CartForm.vue'

  export default {
    name: 'CartPage',
      components: {
      Navbar,
      Footer,
      CartForm
  },
    async asyncData({ $axios }) {
      const cts = await $axios.$get(`c/ct/`)
      const shops = await $axios.$get('/c/shops/')
      return { cts, shops }
    },
    data() {
      return {
        stat: false,
      }
    },
  }
</script>