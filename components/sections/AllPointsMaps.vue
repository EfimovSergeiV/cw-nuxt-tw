<template>
  <section id="map-shops" class="my-4">

    <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">

      <div class="mt-4 p-1 bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 shadow-md text-center">      
        <!-- <div class="text-lg md:text-xl">
          <span class="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
            Наши магазины
          </span>
        </div> -->

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">

          <div class="">
            <iframe 
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A1dc40cde3020c34cd82fe8d78396fb83f228f0cf7079487c92e3f4bd2f161f34&amp;source=constructor" 
              width="100%" 
              height="380"
              loading="lazy"
              frameborder="0">
            </iframe>            
          </div>

          <div class="">
            <div class="grid grid-cols-3 gap-4">
              <div class="" v-for="shop in shops" :key="shop.id">

                <div class="flex items-center h-28">
                  <div class="text-gray-700 dark:text-gray-300">
                    <p class="text-xs">{{ shop.adress }}</p>
                    <p class="text-xs">{{ shop.phone }}</p>
                    <p class="text-xs">{{ shop.wday }}</p>
                    <p class="text-xs">{{ shop.wend }}</p>                    
                  </div>
                </div>
                
              </div>
            </div>
          </div>

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