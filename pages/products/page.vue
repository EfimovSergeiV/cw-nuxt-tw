<template>
  <div>

    <Header />
    <Navbar :cts="cts" />
    <Breadcrumbs />
    <!-- <CartModal /> -->
    <!-- {{ response.results.slice(10, 14)}} -->


    <FiltersWithPagination />


    <Products :products="response.results" />

    <div class="mx-auto px-4 py-4 lg:max-w-7xl lg:px-8">
      <div class="flex justify-end">
        <Pagination />
      </div>
    </div>
    
    <Footer />
    
  </div>
</template>
  
<script>
  import Header from '~/components/Header.vue'
  import Navbar from '~/components/Navbar.vue'
  import Products from '~/components/sections/Products.vue'
  import FiltersWithPagination from '~/components/sections/FiltersWithPagination.vue'
  import Breadcrumbs from '~/components/Breadcrumbs.vue'
  import TwoModal from '~/components/CartModal.vue'
  import Pagination from '~/components/Pagination.vue'
  import Footer from '~/components/Footer.vue'

  export default {
    name: 'ProductsPage',
      components: {
        Header,
        Navbar,
        Products,
        Breadcrumbs,
        TwoModal,
        FiltersWithPagination,
        Pagination,
        Footer
      },
      async asyncData({ query, $axios }) {
        const cts = await $axios.$get('c/ct/')
        const brands = await $axios.$get(`c/ctbrand/`, {params: { ct: query.ct },})
        const props = await $axios.$get(`c/props/`, {params: { ct: query.ct },})
        const rands = await $axios.$get(`c/random/`, {params: { ct: query.ct },})
        const response = await $axios.$get(`c/prods/`, {params: query,})
        const breadcrumbs = await $axios.$get(`c/breadcrumb/`, {params: query,})

        return { cts, response, brands, props, rands, breadcrumbs }
      },
      data() {
        return {
          stat: false,
        }
      },
  }
</script>