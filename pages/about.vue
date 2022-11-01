<template>
  <div class="">

    <Header />
    <Navbar :cts="cts" />
    <About :shops="shops" />
    <Footer class="" />

  </div>
</template>
  
<script>
import Navbar from '~/components/Navbar.vue'
import About from '~/components/sections/About.vue'
import Footer from '~/components/Footer.vue'

  export default {
    name: 'AboutPage',
    components: {
      Navbar,
      About,
      Footer,
    },
    async asyncData({ $axios }) {
      const shops = await $axios.$get(`c/shops/`)
      return { shops }
    },
    data() {
      return {
        stat: false,
      }
    },
  }
</script>