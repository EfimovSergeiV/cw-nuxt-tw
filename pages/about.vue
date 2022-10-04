<template>
  <div class="min-h-screen">

    <Header />
    <Navbar :cts="cts" />
    <About />
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