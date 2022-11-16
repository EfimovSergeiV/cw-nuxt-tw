<template>


    <div class="relative z-50 " aria-labelledby="modal-title" role="dialog" aria-modal="true">

        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                <div class="relative transform overflow-hidden rounded-lg bg-gray-700 text-left shadow-xl transition-all sm:my-8 sm:max-w-4xl mx-4">
                    

                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                      
                      
                      <div v-for="shop in shops" :key="shop.id">
                        {{ shop.adress }}
                      </div>


                    </div>

                </div>
            </div>
        </div>
    </div>

</template>

<script>    
  export default {
      name: 'ShopModal',
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
  }
</script>