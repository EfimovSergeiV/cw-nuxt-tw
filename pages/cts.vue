<template>
  <div class="min-h-screen">

    <Header />
    <TopSliderSection :widebanners="widebanners" />
    <Navbar :cts="cts" />
    <Categories :cts="cts" />
    <Recommend :recommends="recommends" />
    <Footer class="" />

  </div>
</template>
  
<script>
import Navbar from '~/components/Navbar.vue'
import TopSliderSection from '~/components/sections/TopSliderSection.vue'
import Categories from '~/components/sections/Categories.vue'
import Recommend from '~/components/sections/Recommend.vue'
import Footer from '~/components/Footer.vue'

  export default {
    name: 'CategoryPage',
    components: {
    Navbar,
    TopSliderSection,
    Categories,
    Recommend,
    Footer,

},
    async asyncData({ $axios }) {
      const widebanners = await $axios.$get('c/widebanners/')
      const cts = await $axios.$get(`c/ct/`)
      const recommends = await $axios.$get(`c/recommend/`)
      return { widebanners, cts, recommends }
    },
    data() {
      return {
        stat: false,
      }
    },
  }
</script>