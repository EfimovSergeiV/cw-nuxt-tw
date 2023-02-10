<template>
  <div class="">

    <Header />
    <Navbar :cts="cts" />

    <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">
      <div id="cat-title" class="flex justify-end mb-1">
        <p class="text-2xl">{{ response.meta.title }}</p>
      </div>
    </div>

    
    <Breadcrumbs :breadcrumbs="breadcrumbs" />
    <Filters :props="props" :brands="brands" :response="response" />
    <Products :products="response.results" class="" />

    <div v-if="response.results.length < 1" class="">
      <div class="mx-auto max-w-7xl px-4 lg:max-w-7xl lg:px-8 pt-2 min-h-[600px]">


        <div class="flex h-full min-h-[400px] items-center justify-center">
          <div class="bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 shadow-md px-20 py-24 w-3/4">
            <p class=" md:text-2xl my-2 text-gray-900 dark:text-gray-100 text-center">Ничего не найдено : (</p>
          </div>
        </div>



        
      </div>
    </div>


    <div class="mx-auto px-4 py-4 lg:max-w-7xl lg:px-8">
      <div class="flex justify-end">
        <Pagination :response="response" />
      </div>
    </div>

    <Footer />
    
  </div>
</template>
  
<script>
import Header from '~/components/Header.vue'
import Navbar from '~/components/Navbar.vue'
import Products from '~/components/sections/Products.vue'
import Filters from '~/components/sections/Filters.vue'
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
      Filters,
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
    head() {
      return {
        title: `${this.response.meta.title} - Главный сварщик`,
        meta: [
          {
            hid: "description",
            name: "description",
            content: `${this.response.meta.title} - купить в Москве, Санкт-Петербурге, Пскове, Великих Луках, Смоленске, Петрозаводске`,
          },
          {
            hid: 'twitter:title',
            name: 'twitter:title',
            content: `${ this.response.meta.title} - Главный Сварщик`
          },
          {
            hid: 'twitter:description',
            name: 'twitter:description',
            content: `${this.response.meta.title} - купить в Москве, Санкт-Петербурге, Пскове, Великих Луках, Смоленске, Петрозаводске`
          },
          {
            hid: 'twitter:image',
            name: 'twitter:image',
            content: 'https://api.glsvar.ru/files/og-image.png'
          },
          {
            hid: 'twitter:image:alt',
            name: 'twitter:image:alt',
            content: 'Главный сварщик - логотип'
          },
          {
            hid: 'og:title',
            property: 'og:title',
            content: `${ this.response.meta.title} - Главный Сварщик`
          },
          {
            hid: 'og:description',
            property: 'og:description',
            content: `${this.response.meta.title} - купить в Москве, Санкт-Петербурге, Пскове, Великих Луках, Смоленске, Петрозаводске`
          },
          {
            hid: 'og:image',
            property: 'og:image',
            content: 'https://api.glsvar.ru/files/og-image.png'
          },
          {
            hid: 'og:image:secure_url',
            property: 'og:image:secure_url',
            content: 'https://api.glsvar.ru/files/og-image.png'
          },
          {
            hid: 'og:image:alt',
            property: 'og:image:alt',
            content: `${ this.response.meta.title} - Главный Сварщик`
          }
        ],
      }
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