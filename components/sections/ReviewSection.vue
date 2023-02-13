<template>
  <section id="" class="mt-4">

    <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">

      <div class="flex justify-end items-center">
        <p class="text-2xl">{{ review.name }}</p>
      </div>

      <nav class="flex px-5 py-3 mt-1 mb-4 text-gray-700 border border-gray-200 rounded-sm bg-white dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li class="hhidden md:iinline-flex items-center">
            <nuxt-link :to="{ name: 'index' }" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
              Главная
            </nuxt-link>
          </li>
          <li class="">
            <div class="flex items-center">
              <svg class=" hhidden md:bblock w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
              <nuxt-link :to="{ name: 'reviews' }" class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-300 dark:hover:text-gray-100">Обзоры на оборудование</nuxt-link>
            </div>
          </li>
        </ol>
      </nav>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div class="h-96 border dark:border-gray-700 shadow-md rounded-sm bg-gray-100 dark:bg-gray-900">
          <iframe
            :src="review.video"
            loading="lazy"
            height="100%"
            width="100%"
            allowfullscreen="0"
            frameborder="0"
            class="rounded-sm"
          ></iframe>

        </div>
        <div v-if="review.link" class="flex h-full w-full justify-center items-center">
          <nuxt-link :to="review.link" class="text-2xl">Перейти к товару</nuxt-link>
        </div>
      </div>

    </div>

  </section>
</template>
  
<script>

  export default {
    name: 'ESABSection',
    components: {

    },
    props: {
      review: {
        type: Object,
        default: Object,
      },
    },
    data() {
      return {
        
      }
    },

  }
  </script>