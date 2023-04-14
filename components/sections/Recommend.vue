<template>
  <div class="">
    <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">
      <div class="my-4 p-2 bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 shadow-sm">
        <p class="text-gray-700 dark:text-gray-300 my-4 uppercase">Главный Cварщик рекомендует</p>
        <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div v-for="product in recommends" :key="product.id" class="">
            <ProductSmall :product="product" />
          </div>
        </div>      
      </div>
    </div>
  </div>
</template>
  
<script>
import { mapActions } from 'vuex';
import ProductSmall from '../ProductSmall.vue';


  export default {
    name: 'RecommendSection',
    components: {
      ProductSmall,
  },
  props: {
    recommends: {
      type: Array,
      default: Array,
    },
  },
  data() {
    return {
      dataset: true,
    }
  },
  methods: {
    ...mapActions({
      showCartModal: 'showCartModal',
      addProductToCart: 'modules/cart/addProductToCart',
      requestPriceProduct: 'modules/cart/requestPriceProduct'
    }),
    requestPrice(price) {
      console.log(price)
    },
    dissableShow() {
      localStorage.showSubscriebe = false
      this.closeSubscriebe()
    },
  }
}
</script>