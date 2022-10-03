<template>
  <div class="min-h-screen">

    <Header />
    <Navbar :cts="cts" />

    <Footer class="" />

  </div>
</template>
  
<script>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'

  export default {
    name: 'CartPage',
      components: {
        Navbar,
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