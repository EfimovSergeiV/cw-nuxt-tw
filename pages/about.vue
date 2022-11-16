<template>
  <div class="">

    <Header />
    <Navbar :cts="cts" />
    <About :shops="shops" />
    <ShopMaps :shops="shops" /> 
    <Footer class="" />

  </div>
</template>
  
<script>
import Navbar from '~/components/Navbar.vue'
import About from '~/components/sections/About.vue'
import ShopMaps from '~/components/sections/ShopMaps.vue'
import Footer from '~/components/Footer.vue'

  export default {
    name: 'AboutPage',
    components: {
      Navbar,
      About,
      ShopMaps,
      Footer,
    },
    async asyncData({ $axios }) {
      const shops = await $axios.$get(`c/shops/`)
      const cts = await $axios.$get('c/ct/')
      return { shops, cts }
    },
    data() {
      return {
        stat: false,
      }
    },
  }
</script>