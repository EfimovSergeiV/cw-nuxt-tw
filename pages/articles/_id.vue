<template>
  <div class="">

    <Header />
    <TopSliderSection :widebanners="widebanners" />
    <Navbar :cts="cts" />

    <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">
      <div class="flex my-2 items-center justify-center md:justify-end">
        <p itemprop="name" class="text-base md:text-2xl">{{ article.title }}</p>
      </div>      
    </div>

    <div class="">
      <Article :article="article.text" />
    </div>





    <!-- <About :shops="shops" /> -->
    <!-- <ShopMaps /> -->
    <Footer :brands="brands" class="" />

  </div>
</template>
  
<script>
import Navbar from '~/components/Navbar.vue'
import TopSliderSection from '~/components/sections/TopSliderSection.vue'
import Article from '~/components/sections/Article.vue' 
import Footer from '~/components/Footer.vue'

  export default {
    name: 'ArticlePage',
    components: {
      Navbar,
      TopSliderSection,
      Article,
      Footer,
    },
    async asyncData({ $axios }) {
      const widebanners = await $axios.$get('c/widebanners/')
      const brands = await $axios.$get('/c/brands/')
      const cts = await $axios.$get('c/ct/')
      const article = await $axios.$get('c/article/1/')
      return { article, widebanners, cts, brands }
    },
    data() {
      return {
        stat: false,
      }
    },
  }
</script>
