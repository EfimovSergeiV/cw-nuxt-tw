<template>
  <div class="min-h-screen">

    <Header />
    <Navbar :cts="cts" />
    <Categories :cts="cts" />
    <Recommend :recommends="recommends" />
    <Footer class="" />

  </div>
</template>
  
<script>
import Navbar from '~/components/Navbar.vue'
import Categories from '~/components/sections/Categories.vue'
import Recommend from '~/components/sections/Recommend.vue'
import Footer from '~/components/Footer.vue'

  export default {
    name: 'CategoryPage',
    components: {
    Navbar,
    Categories,
    Recommend,
    Footer,

},
    async asyncData({ $axios }) {
      const cts = await $axios.$get(`c/ct/`)
      const recommends = await $axios.$get(`c/recommend/`)
      return { cts, recommends }
    },
    data() {
      return {
        stat: false,
      }
    },
  }
</script>