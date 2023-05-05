<template>
  <section id="" class="mt-4">

    <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">

      <div class="flex justify-end items-center">
        <p class="text-2xl">Обзоры на оборудование</p>
      </div>

      <nav class="flex px-5 py-3 mt-1 mb-4 text-gray-700 border border-gray-200 rounded-sm bg-white dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1">
          <li class="">
            <nuxt-link :to="{ name: 'index' }" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"><span class="mdi mdi-home px-1"></span> Главная</nuxt-link>
          </li>
          <li class="">
            <p class="text-sm font-medium text-gray-700 dark:text-gray-300"><span class="mdi mdi-chevron-right px-1"></span> Обзоры на оборудование</p>
          </li>
        </ol>
      </nav>
      
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

        <div v-for="image in reviews" :key="image.id"  class="">
          <div @mouseover="startAnimation(image)" @mouseout="stopAnimation(image)" class=" h-full cursor-pointer border border-gray-200 hover:border-gray-300 dark:border-gray-600 dark:hover:border-gray-500 bg-gray-100 dark:bg-gray-700 transition-all rounded-md shadow-sm shadow-black/30">
            <div class="rounded-md transition-all duration-700">
              <nuxt-link :to="{ name: 'reviews-id', params: { id: image.id } }" class="">
                <img :src="image.show_image" alt="Your WebP Image" class=" transition-all duration-700 rounded-md hh-36 rounded-bl-xl rounded-br-xl" />
                <div class="px-1 py-4">
                  <p class="text-xs">{{ image.name }}</p>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
        <!-- <div class="" v-for="review in reviews" :key="review.id">
        
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
        </div> -->
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
    methods: {
      startAnimation(image) {
        image.show_image = image.image;
      },
      stopAnimation(image) {
        image.show_image = image.static_image;
      }
    },
  }
  </script>