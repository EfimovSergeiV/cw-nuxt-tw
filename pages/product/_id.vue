<template>
  <div class="footer-bg">
    <Header />
    <Navbar />
    <Breadcrumbs />
    <ProductDetail :product="product" />
    <Footer />
  </div>
</template>
  
<script>
import Header from '~/components/Header.vue'
import Navbar from '~/components/Navbar.vue'
import ProductDetail from '~/components/sections/ProductDetail.vue'
import Breadcrumbs from '~/components/Breadcrumbs.vue'
import Footer from '~/components/Footer.vue'

  export default {
    name: 'ProductsPage',
      components: {
        Header,
        Navbar,
        ProductDetail,
        Breadcrumbs,
        Footer,
    },
    async asyncData({ params, $axios }) {
      const product = await $axios.$get(`c/prod/${params.id}`)
      const reviews = await $axios.$get(`u/reviews/?prod_id=${params.id}`)
      const regions = await $axios.$get(`o/cdek/regions/`)
      const mweld = await $axios.$get(`c/prod/1835/`)
      const breadcrumbs = await $axios.$get(`c/breadcrumb/?ct=${product.category.id}`)
      return { product, breadcrumbs, reviews, regions, mweld }
    },
    data() {
      return {
        stat: false,
      }
    },
  }
</script>