<template>
  <div class="">

    <Header />
    <TopSliderSection :widebanners="widebanners" />

    <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">
      <div id="cat-title" class="flex justify-end mt-2">
        <p class="text-2xl ">Сравнение параметров</p>
      </div>
    </div>

    <Navbar :cts="cts" />

    <CompareSection />

    <Footer :brands="brands" class="" />

  </div>
</template>
  
<script>
import { mapActions } from 'vuex'
import Navbar from '~/components/Navbar.vue'
import TopSliderSection from '~/components/sections/TopSliderSection.vue'
import CompareSection from '~/components/sections/CompareSection.vue'


import Footer from '~/components/Footer.vue'

  export default {
    name: 'AboutPage',
    components: {
      Navbar,
      TopSliderSection,
      CompareSection,

      Footer,
    },
    async asyncData({ $axios }) {
      const widebanners = await $axios.$get('c/widebanners/')
      const brands = await $axios.$get('/c/brands/')
      const cts = await $axios.$get('c/ct/')
      return { widebanners, cts, brands }
    },
    data() {
      return {
        stat: false,
      }
    },
  }
</script>