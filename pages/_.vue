<template>
  <div class="">

    <Header />
    <Navbar :cts="cts" />




    <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">

      <div class="flex gap-4 items-center justify-center h-full my-40 md:my-80">

        <div class="flex items-center gap-8">
          <div class="grid gap-2 grid-cols-1">
            <div class="mx-4 text-center">
              <p class="text-2xl">Этой страницы больше нет</p>
            </div>
            <div class="border-b border-gray-700 dark:border-gray-300"></div>
            <div class="mx-4 text-center">
              <nuxt-link :to="{ name: 'cts' }" class="text-sm hover:underline hover:text-gray-900 dark:hover:text-gray-100 ">Перейти в каталог</nuxt-link>
            </div>
          </div>
          <div>
            <p class="mdi mdi-close-outline text-3xl md:text-6xl"> 404</p>
          </div>          
        </div>
        <!-- <div class="">
          <p class=" lg:text-3xl">Этой страницы больше существует...</p>
          <p class="my-4 text-xs lg:text-base">Возможно она была перемещена или удалена</p>
          <div class="flex justify-end items-center">
            <nuxt-link :to="{ name: 'index'}" class="">вернуться на главную</nuxt-link>
          </div>
        </div>

        <div class="">
          <img src="../assets/images/not-found.png" class="w-32 lg:w-96"/>
        </div> -->
        
      </div>      
    </div>




    
    <Footer />
    
  </div>
</template>
    
<script>
  import Header from '~/components/Header.vue'
  import Navbar from '~/components/Navbar.vue'
  import Products from '~/components/sections/Products.vue'

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

        Pagination,
        Footer
      },
      async asyncData({ query, $axios }) {
        const cts = await $axios.$get('c/ct/')
        const brands = await $axios.$get(`c/ctbrand/`, {params: { ct: query.ct },})
        const props = await $axios.$get(`c/props/`, {params: { ct: query.ct },})
        const rands = await $axios.$get(`c/random/`, {params: { ct: query.ct },})
        const response = await $axios.$get(`c/prods/`, {params: query,})
        const breadcrumbs = await $axios.$get(`c/breadcrumb/`, { params: query })
  
        return { cts, response, brands, props, rands, breadcrumbs }
      },
      data() {
        return {
          stat: false,
        }
      },
      // watch: {
      //   $route(to, from) {
      //     this.scrollTop()
      //   },
      // },
      // methods: {
      //   scrollTop() {
      //     document
      //       .getElementById('cat-title')
      //       .scrollIntoView()
      //   },
      // }  
    }
  </script>