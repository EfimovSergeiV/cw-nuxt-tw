<template>
  <section id="" class="mt-10">
    <div class="mx-auto py-2 px-4 lg:max-w-7xl lg:px-8">
      <hooper
        :infinite-scroll="true"
        :center-mode="true"
        :items-to-show="5"
        pagination="no"
        :auto-play="true"
        :play-speed="17000"
        class=""
        style="height:100px"
      >
        <slide v-for="(brand, br) in brands" :key="br">
          <div class="grid justify-items-center">
            <img
              :alt="brand.brand"
              onerror="this.src='../../noimage-235-177.jpg'"
              class="cursor-pointer rounded-sm p-3"
              style="width:150px; height: 100px"
              width="150"
              height="100"
              :src="brand.image"
              fluid
              @click="
                $router.push({
                  name: `products`,
                  query: { brnd: brand.id, page: 1 },
                })"
              />
          </div>
        </slide>
      </hooper>
    </div>
  </section>
</template>
  
<script>
import { Hooper, Slide } from 'hooper'
import 'hooper/dist/hooper.css'
import { mapGetters } from 'vuex'

  export default {
    name: 'BrandCarouselSection',
    components: {
      Hooper,
      Slide
    },
    props: {
      brands: {
        type: Array,
        default: Array,
      },
    },
    computed: {
    ...mapGetters({
      true_brand: 'carouselBrand',
    }),
  },
}
</script>