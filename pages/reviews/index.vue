<template>
  <div class="">

    <Header />
    <TopSliderSection :widebanners="widebanners" />
    <Navbar :cts="cts" />
    <ReviewsSection :reviews="reviews.results" />
    <Footer :brands="brands" class="" />

  </div>
</template>
  
<script>
import TopSliderSection from '~/components/sections/TopSliderSection.vue'
import Navbar from '~/components/Navbar.vue'
import ReviewsSection from '~/components/sections/ReviewsSection.vue'
import Footer from '~/components/Footer.vue'
import CartForm from '~/components/sections/CartForm.vue'

  export default {
    name: 'CartPage',
      components: {
        Navbar,
        TopSliderSection,
        ReviewsSection,
        Footer,
        CartForm
    },
    async asyncData({ $axios }) {
      const cts = await $axios.$get(`c/ct/`)
      const shops = await $axios.$get('/c/shops/')
      const brands = await $axios.$get('/c/brands/')
      const widebanners = await $axios.$get('c/widebanners/')
      const reviews = await $axios.$get(`c/reviews/`)
      return { widebanners, cts, shops, brands, reviews }
    },
    data() {
      return {

      }
    },
  }
</script>