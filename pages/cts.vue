<template>
  <div class="min-h-screen">

    <div class="">
      <Navbar :cts="cts" />
    </div>
    <div class="">
      <Categories :cts="cts" />
    </div>
    <div class="">
      <Footer class="" />
    </div>

  </div>
</template>
  
<script>
import Navbar from '~/components/Navbar.vue'
import Categories from '~/components/sections/Categories.vue'
import Footer from '~/components/Footer.vue'

  export default {
    name: 'CategoryPage',
    components: {
    Navbar,
    Categories,
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