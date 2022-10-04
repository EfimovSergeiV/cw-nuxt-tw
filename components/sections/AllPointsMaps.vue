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
          
          <!-- <div class="">
            <img src="120-120.jpg" class="absolute"/>

            <div class="">
              <p class="mdi mdi-content-copy cursor-pointer" @click="copyToBuffer(shop.adress)"> {{ shop.adress }}</p>
              <a :href="'tel:' + shop.phone">{{ shop.phone }}</a>
              <p>{{ shop.wday }}</p>
              <p>{{ shop.wend }}</p>            
            </div>

          </div> -->

          <div class="flex-1 flex flex-col bg-gray-400 relative overflow-hidden">
            <a href="#" class="block bg-gray-400 overflow-hidden">
              <img class="object-cover w-full h-full hover:opacity-75 transition ease-in-out duration-150 hover:scale-110 transform" src="https://images.unsplash.com/photo-1569701813229-33284b643e3c?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" alt="">
            </a>
          </div>


        </div>
      </div>



      <div class="mt-4" style="width: 100%">
        <iframe 
          src="https://www.google.com/maps/d/embed?mid=1v3MRuieVKECJQz5HZ1i51CJwv0W4-yA&ehbc=2E312F" 
          border-radius: 0px; 
          width="100%" 
          height="380" 
          loading="lazy">
        </iframe>

      </div>

      <div class="static p-10">
        <!-- Static parent -->
        <div class="static ..."><p>Static child</p></div>
        <div class="inline-block ..."><p>Static sibling</p></div>
        <!-- Static parent -->
        <div class="absolute ..."><p>Absolute child</p></div>
        <div class="inline-block ..."><p>Static sibling</p></div>
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