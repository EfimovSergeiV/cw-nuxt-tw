<template>
  <div itemscope itemtype="http://schema.org/Product">

    <Header />
    <Navbar :cts="cts" />

    <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">
      <div class="flex my-2 items-center justify-center md:justify-end">
        <p itemprop="name" class="text-base md:text-2xl">{{ product.name }}</p>
      </div>      
    </div>

    <Breadcrumbs class="my-4" :breadcrumbs="breadcrumbs" />

    <ProductDetail :product="product" :related="related" :analogue="analogue.slice(0, 2)" />
    <Recommend :recommends="recommends" />

    <Footer :brands="brands" />
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
      
      let relCT = ''
      for ( let i in product.related ) {
        relCT += `ct=${product.related[i]}&`
      }

      const analogue = await $axios.$get(`c/related/?ct=${product.category.id}&ct=${product.category.id}`)
      const related = await $axios.$get(`c/related/?${relCT}`)

      const brands = await $axios.$get('/c/brands/')
      const reviews = await $axios.$get(`u/reviews/?prod_id=${params.id}`)
      const regions = await $axios.$get(`o/cdek/regions/`)
      const mweld = await $axios.$get(`c/prod/1835/`)
      const recommends = await $axios.$get(`c/recommend/`)
      const breadcrumbs = await $axios.$get(`c/breadcrumb/?ct=${product.category.id}`)
      return { cts, brands, recommends, product, related, analogue, breadcrumbs, reviews, regions, mweld }
    },
    head() {

      const structuredData = {
        '@context': 'http://schema.org',
        '@type': 'Product',
        id: this.product.vcode,
        name: this.product.name,
        image: this.product.preview_image,
        description: this.product.description,
        mpn: this.product.vcode,
        brand: {
          '@type': 'Brand',
          name: this.product.brand.brand,
        },
        // review: {
        //   '@type': 'Review',
        //   reviewRating: {
        //     '@type': 'Rating',
        //     ratingValue: this.product.rating,
        //     bestRating: '3',
        //   },
        //   author: {
        //     '@type': 'Person',
        //     name: '/',
        //   },
        // },
        // aggregateRating: {
        //   '@type': 'AggregateRating',
        //   ratingValue: this.product.rating,
        //   reviewCount: '5',
        // },
        offers: {
          '@type': 'Offer',
          url: 'https://glsvar.ru/product/' + this.product.id,
          priceCurrency: 'руб.',
          price: this.product.only_price,
          itemCondition: 'https://schema.org/UsedCondition',
          availability: 'https://schema.org/InStock',
        },
      }

      return {
        title: `${this.product.name}`,
        script: [
          {
            type: 'application/ld+json',
            json: structuredData,
          },
        ],
        meta: [
          { 
            hid: 'description', 
            name: 'description', 
            content: `${this.product.description.slice(0, 147)}...`
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