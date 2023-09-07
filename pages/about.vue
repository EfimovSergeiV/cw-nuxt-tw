<template>
  <div class="">

    <Header />
    <TopSliderSection :widebanners="widebanners" />
    <Navbar :cts="cts" />
    <About :shops="shops" />
    <ShopMaps />
    <Footer :brands="brands" class="" />

  </div>
</template>
  
<script>
import Navbar from '~/components/Navbar.vue'
import TopSliderSection from '~/components/sections/TopSliderSection.vue'
import About from '~/components/sections/About.vue'
import ShopMaps from '~/components/sections/ShopMaps.vue'
import Footer from '~/components/Footer.vue'

  export default {
    name: 'AboutPage',
    components: {
      Navbar,
      TopSliderSection,
      About,
      ShopMaps,
      Footer,
    },
    async asyncData({ $axios }) {
      const widebanners = await $axios.$get('c/widebanners/')
      const brands = await $axios.$get('/c/brands/')
      const cts = await $axios.$get('c/ct/')
      const shops = await $axios.$get('c/shops/')
      return { widebanners, cts, brands, shops }
    },
    data() {
      return {
        stat: false,
      }
    },
  }
</script>