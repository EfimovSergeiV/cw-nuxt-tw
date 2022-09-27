<template>
  <div class="">
    <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">

      <div class="my-4 p-2 bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 shadow-sm text-center">
        <p class="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-200">Главный сварщик рекомендует</p>
      </div>


      <div class="grid grid-cols-1 gap-y-4 gap-x-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-4">
        <div v-for="product in recommends" :key="product.id" class="bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 shadow-md">
          <ProductCard :product="product" />
        </div>
      </div>

    </div>
  </div>
</template>
  
<script>
// import {
//   Hooper,
//   Slide,
//   Navigation as HooperNavigation
//   } from 'hooper';
//   import 'hooper/dist/hooper.css';


  import ProductCard from '../ProductCard.vue';
    export default {
      name: 'RecommendSection',
      components: {
        ProductCard,
        // Hooper,
        // Slide,
        // HooperNavigation
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
  }
</script>