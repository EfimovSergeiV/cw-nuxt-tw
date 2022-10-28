<template>
  <section id="map-shops" class="my-4">

    <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">

      <div class="mt-4 bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 shadow-sm text-center">      
        <div class="text-lg md:text-xl">
          <span class="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
            Наши магазины
          </span>
        </div>

        <div class="mt-4">
          <iframe 
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A1dc40cde3020c34cd82fe8d78396fb83f228f0cf7079487c92e3f4bd2f161f34&amp;source=constructor" 
            width="100%" 
            height="400"
            class="rounded-sm"
            frameborder="0">
          </iframe>          
        </div>
      </div>

    </div>
  </section>

</template>
<script>    
  export default {
    name: 'mapShops',
      components: {
    },
    props: {
      shops: {
        type: Array,
        default: Array,
      },
    },
    data() {
      return {
  
      }
    },
    methods: {
      copyToBuffer(addres) {
        navigator.clipboard.writeText(addres)
        .then(() => {
          this.$bvToast.toast(
            addres,
            {
              title: 'Скопировано в буфер обмена',
              variant: 'success',
            }
          )
        })
      }
    }
  }
  </script>