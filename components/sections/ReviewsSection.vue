<template>
  <section id="" class="mt-4">

    <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">

      <div class="flex justify-end items-center">
        <p class="text-2xl">Обзоры на оборудование</p>
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
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        <div class="" v-for="review in reviews" :key="review.id">
        
          <div class="h-60 border dark:border-gray-700 bg-gray-100 dark:bg-gray-900 shadow-md relative">

            <iframe
              :src="review.video"
              loading="lazy"
              height="100%"
              width="100%"
              allowfullscreen="0"
              frameborder="0"
            ></iframe>

            <nuxt-link :to="{ name: 'reviews-id', params: { id: review.id } }">
              <div class="absolute hover:bg-gray-800/90 top-0 right-0 h-full w-full transition-all duration-700 group">
                <div class="flex w-full h-full justify-center items-center">
                  <div class="">
                    <div class="grid grid-cols-1 text-center">

                      <div class="">
                        <p class="text-gray-100/0 group-hover:text-gray-100 border-gray-100/0 group-hover:border-gray-100 border-b-2 transition-all duration-700">{{ review.name }}</p>
                      </div>

                      <div class="">
                        <p class="text-gray-100/0 group-hover:text-gray-100 transition-all duration-700">Перейти к видео</p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>                  
            </nuxt-link>
          </div>
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
      reviews: {
        type: Array,
        default: Array,
      },
    },
    data() {
      return {

      }
    },
  }
  </script>