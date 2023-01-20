<template>
  <div class="min-h-screen">

    <Header />
    <TopSliderSection :widebanners="widebanners" />
    <Navbar :cts="cts" />
    <Categories :cts="cts" />
    <Recommend :recommends="recommends" />
    <Footer class="" />

  </div>
</template>
  
<script>
import Navbar from '~/components/Navbar.vue'
import TopSliderSection from '~/components/sections/TopSliderSection.vue'
import Categories from '~/components/sections/Categories.vue'
import Recommend from '~/components/sections/Recommend.vue'
import Footer from '~/components/Footer.vue'

  export default {
    name: 'CategoryPage',
    components: {
    Navbar,
    TopSliderSection,
    Categories,
    Recommend,
    Footer,

},
    async asyncData({ $axios }) {
      const widebanners = await $axios.$get('c/widebanners/')
      const cts = await $axios.$get(`c/ct/`)
      const recommends = await $axios.$get(`c/recommend/`)
      return { widebanners, cts, recommends }
    },
    head() {
      return {
        title: `Категории товаров - интернет магазин Главный Сварщик`,
        meta: [
          { 
            hid: 'description', 
            name: 'description', 
            content: `Сварочное оборудование и всё для сварки Москва, Санкт-Петербург, Псков, Великие Луки, Смоленск, Петрозаводск`
          },
          {
            hid: 'twitter:title',
            name: 'twitter:title',
            content: `Категории товаров - интернет магазин Главный Сварщик`
          },
          {
            hid: 'twitter:description',
            name: 'twitter:description',
            content: `Сварочное оборудование и всё для сварки Москва, Санкт-Петербург, Псков, Великие Луки, Смоленск, Петрозаводск`
          },
          {
            hid: 'twitter:image',
            name: 'twitter:image',
            content: 'https://api.glsvar.ru/files/og-image.png'
          },
          {
            hid: 'twitter:image:alt',
            name: 'twitter:image:alt',
            content: `Категории товаров - интернет магазин Главный Сварщик`
          },
          {
            hid: 'og:title',
            property: 'og:title',
            content: `Категории товаров - интернет магазин Главный Сварщик`
          },
          {
            hid: 'og:description',
            property: 'og:description',
            content: 'https://api.glsvar.ru/files/og-image.png'
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
            content: `Категории товаров - интернет магазин Главный Сварщик`
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