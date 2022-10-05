<template>
  <section id="map-shops" class="my-4">

    <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">

      <div class="my-4 p-2 bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 shadow-sm text-center">      
        <div class="text-lg md:text-xl font-bold ...">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-500">
            Наши магазины
          </span>
        </div>
      
      </div>



      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 shadow-md" v-for="shop in shops" :key="shops.id">

          <div class="block">
            <div class="flex flex-col bg-gray-400 relative overflow-hidden">
              <div class="flex justify-end bg-gray-400 overflow-hidden">
                <img class="object-cover hover:opacity-75 transition ease-in-out duration-150 hover:scale-110 transform" src="140-140.png" alt="">
              </div>

              <div class="absolute">
                <div class="text-black mx-3 my-3">
                  <p class="mdi mdi-content-copy cursor-pointer" @click="copyToBuffer(shop.adress)"> {{ shop.adress }}</p>
                  <a :href="'tel:' + shop.phone">{{ shop.phone }}</a>
                  <p>{{ shop.wday }}</p>
                  <p>{{ shop.wend }}</p>            
                </div>
              </div>
            </div>

          
          

          </div>



        </div>
      </div>


      <div class="mt-4">
        <iframe 
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A1dc40cde3020c34cd82fe8d78396fb83f228f0cf7079487c92e3f4bd2f161f34&amp;source=constructor" 
          width="100%" 
          height="400" 
          frameborder="0">
        </iframe>
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