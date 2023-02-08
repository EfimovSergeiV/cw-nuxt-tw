<template>
  <div>

    <Header />
    <Navbar :cts="cts" />

    <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">
      <div class="flex my-2 items-center justify-end">
        <p class="text-2xl">{{ product.name }}</p>
      </div>      
    </div>

    <Breadcrumbs class="my-4" :breadcrumbs="breadcrumbs" />

    <ProductDetail :product="product" />
    <Recommend :recommends="recommends" />

    <Footer />
  </div>
</template>
  
<script>
import Header from '~/components/Header.vue'
import Navbar from '~/components/Navbar.vue'
import Breadcrumbs from '~/components/Breadcrumbs.vue'
import ProductDetail from '~/components/sections/ProductDetail.vue'
import Recommend from '~/components/sections/Recommend.vue'
import Footer from '~/components/Footer.vue'

  export default {
    name: 'ProductsPage',
      components: {
        Header,
        Navbar,
        Breadcrumbs,
        ProductDetail,
        Recommend,
        Footer,
    },
    async asyncData({ params, $axios }) {
      const cts = await $axios.$get('c/ct/')
      const product = await $axios.$get(`c/prod/${params.id}`)
      const reviews = await $axios.$get(`u/reviews/?prod_id=${params.id}`)
      const regions = await $axios.$get(`o/cdek/regions/`)
      const mweld = await $axios.$get(`c/prod/1835/`)
      const recommends = await $axios.$get(`c/recommend/`)
      const breadcrumbs = await $axios.$get(`c/breadcrumb/?ct=${product.category.id}`)
      return { cts, recommends, product, breadcrumbs, reviews, regions, mweld }
    },
    head() {
      return {
        title: `${this.product.name} - купить в интернет магазине Главный сварщик`,
        meta: [
          { 
            hid: 'description', 
            name: 'description', 
            content: `${this.product.name} - купить в интернет магазине Главный сварщик`
          },
          {
            hid: 'twitter:title',
            name: 'twitter:title',
            content: this.product.name
          },
          {
            hid: 'twitter:description',
            name: 'twitter:description',
            content: this.product.description
          },
          {
            hid: 'twitter:image',
            name: 'twitter:image',
            content: this.product.preview_image
          },
          {
            hid: 'twitter:image:alt',
            name: 'twitter:image:alt',
            content: this.product.name
          },
          {
            hid: 'og:title',
            property: 'og:title',
            content: this.product.name
          },
          {
            hid: 'og:description',
            property: 'og:description',
            content: this.product.description
          },
          {
            hid: 'og:image',
            property: 'og:image',
            content: this.product.preview_image
          },
          {
            hid: 'og:image:secure_url',
            property: 'og:image:secure_url',
            content: this.product.preview_image
          },
          {
            hid: 'og:image:alt',
            property: 'og:image:alt',
            content: this.product.name
          }
        ]
      }
    },
    data() {
      return {
        stat: false,
      }
    },
  }
</script>