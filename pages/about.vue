<template>
  <div class="">

    <Header />
    <Navbar :cts="cts" />
    <About :shops="shops" />
    <ShopMaps /> 
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
      const cts = await $axios.$get('c/ct/')
      return { cts }
    },
    data() {
      return {
        stat: false,
      }
    },
  }
</script>