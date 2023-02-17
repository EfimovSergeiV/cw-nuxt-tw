<template>
  <div class="">

    <Header />
    <TopSliderSection :widebanners="widebanners" />
    <Navbar :cts="cts" />
    <ReviewSection :review="review" />
    <Footer :brands="brands" class="" />

  </div>
</template>
  
<script>
import TopSliderSection from '~/components/sections/TopSliderSection.vue'
import Navbar from '~/components/Navbar.vue'
import ReviewSection from '~/components/sections/ReviewSection.vue'
import Footer from '~/components/Footer.vue'
import CartForm from '~/components/sections/CartForm.vue'

  export default {
    name: 'CartPage',
      components: {
        Navbar,
        TopSliderSection,
        ReviewSection,
        Footer,
        CartForm
    },
    async asyncData({ params, $axios }) {
      const cts = await $axios.$get(`c/ct/`)
      const shops = await $axios.$get('/c/shops/')
      const brands = await $axios.$get('/c/brands/')
      const review = await $axios.$get(`c/reviews/${params.id}`)
      const widebanners = await $axios.$get('c/widebanners/')
      return { widebanners, cts, shops, brands, review }
    },
    data() {
      return {
        
      }
    },
  }
</script>