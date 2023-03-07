<template>
  <div class="">
    <div class="mx-auto py-2 px-4 lg:max-w-7xl lg:px-8">

      <div class=" my-40">
        <div class="grid grid-cols-1 gap-y-4 gap-x-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          <div class="" v-for="product in products.slice(0, 4)" :key="product.id">
            <ProductCartExt :product="product" />
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-y-4 gap-x-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        <div v-for="product in products" :key="product.id" class="bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 shadow-md">
          <ProductCard :product="product" />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import ProductCard from '../ProductCard.vue';
import ProductCartExt from '../ProductCartExt.vue';
  
  export default {
    name: 'ProductsSection',
    components: {
      ProductCard,
      ProductCartExt,
},
    props: {
      products: {
        type: Array,
        default: Array,
      },
    },
    data() {
      return {
        dataset: true,
      }
    },
  }
</script>