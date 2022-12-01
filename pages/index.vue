<template>
  <div class="">

    <Header />
    <TopSliderSection />
    <Navbar :cts="cts" />
    <Main :latest="latest" :banners="banners" />
    <Reviews :reviews="banners" />
    <ESAB :esab="esab" />
    <CorouselProducts :latest="latest" />
    <MWeld :mweld="mweld" />
    <Svarog :mpromobs="mpromobs" />
    <Recommend :recommends="recommends" />
    <Latest :latest="latest" />
    <ShopMaps />
    <CorouselBrands :brands="filterCarouselBrands(brands)" />
    <Footer />

    <!-- <ShopsModal :shops="shops" /> -->

  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import TopSliderSection from '~/components/sections/TopSliderSection.vue'
import Navbar from '~/components/Navbar.vue'
import Main from '~/components/sections/Main.vue'
import Reviews from '~/components/sections/Reviews.vue'
import ESAB from '~/components/sections/ESAB.vue'
import CorouselProducts from '~/components/sections/CorouselProducts.vue'
import MWeld from '~/components/sections/MWeld.vue'
import Svarog from '~/components/sections/Svarog.vue'
import Recommend from '~/components/sections/Recommend.vue'
import Latest from '~/components/sections/Latest.vue'
import CartModal from '~/components/CartModal.vue'
import CorouselBrands from '~/components/sections/CorouselBrands.vue'
import ShopMaps from '~/components/sections/ShopMaps.vue'
import ShopsModal from '~/components/ShopsModal.vue'
import Footer from '~/components/Footer.vue'

  export default {
    name: 'IndexPage',
    components: {
      Header,
      TopSliderSection,
      Navbar,
      Main,
      Reviews,
      ESAB,
      CorouselProducts,
      MWeld,
      Svarog,
      Recommend,
      Latest,
      CartModal,
      Footer,
      CorouselBrands,
      ShopMaps,
      ShopsModal,
    },
    async asyncData({ $axios }) {
      const banners = await $axios.$get('c/mainbanner/')
      const brands = await $axios.$get('/c/brands/')
      const cts = await $axios.$get('c/ct/')
      const esab = await $axios.$get('c/prods/?brnd=3')
      const latest = await $axios.$get('c/neues/')
      const mpromobs = await $axios.$get('c/mpromob/')
      const recommends = await $axios.$get(`c/recommend/`)
      const mweld = await $axios.$get(`c/prod/1835/`)

      return { banners, brands, cts, latest, mpromobs, esab, recommends, mweld }
    },
    methods: {
        filterCarouselBrands(brands) {
          const truebrand = []
          brands.forEach((element) => {
            if (element.carousel === true) {
              truebrand.push(element)
            }
          })
          return truebrand
        }
      }
  }
</script>
