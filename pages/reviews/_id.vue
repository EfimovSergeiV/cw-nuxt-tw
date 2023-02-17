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
        review: { "id": "", "name": "", "link": "#", "video": "" },
        reviews: [
          {
            id: 1,
            name: 'Правильная сварка - Сварог',
            link: { name: `prods`, query: { brnd: 9, page: 1 } },
            video:
              'https://www.youtube.com/embed/SakTd5qGn24?autoplay=0&amp;loop=1&amp;&amp;playlist=SakTd5qGn24',
          },
          {
            id: 2,
            name: 'PRO TIG 315P AC/DC - Сварог',
            link: { name: 'product-id', params: { id: 1035 } },
            video:
              'https://www.youtube.com/embed/600W5mJjTco?autoplay=0&amp;loop=1&amp;&amp;playlist=600W5mJjTco',
          },
          {
            id: 3,
            name: 'REAL SMART MIG 200 - Сварог',
            link: { name: 'product-id', params: { id: 1039 } },
            video:
              'https://www.youtube.com/embed/TV4Ku9q9M0Y?autoplay=0&amp;loop=1&amp;&amp;playlist=TV4Ku9q9M0Y',
          },
          {
            id: 4,
            name: 'REAL SMART ARC 160 - Сварог',
            link: { name: 'product-id', params: { id: 1058 } },
            video:
              'https://www.youtube.com/embed/owyfZ-ATr9Y?autoplay=0&amp;loop=1&amp;&amp;playlist=owyfZ-ATr9Y',
          },

          {
            id: 5,
            name: 'REAL SMART ARC 160 - Сварог',
            link: null,
            video:
              'https://www.youtube.com/embed/RMXycPSo6WE',
          },
          {
            id: 6,
            name: 'REAL SMART ARC 160 - Сварог',
            link: null,
            video:
              'https://www.youtube.com/embed/LIRjPeQSP_w',
          },
          {
            id: 7,
            name: 'REAL SMART ARC 160 - Сварог',
            link: null,
            video:
              'https://www.youtube.com/embed/rg7rONVwq6A',
          },
          {
            id: 8,
            name: 'REAL SMART ARC 160 - Сварог',
            link: null,
            video:
              'https://www.youtube.com/embed/k1f8S3K3m5w',
          },
        ],
      }
    },
    mounted() {
      this.$nextTick(function () {
        this.review = this.reviews.find((item) => item.id === Number(this.$router.currentRoute.params.id) )

      })
    }
  }
</script>