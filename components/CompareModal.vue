<template>
  <div class="fixed inset-0" id="my-modal">
    <div class="flex min-h-full justify-center text-center items-center">
      <div class="relative mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        

        <div class="flex justify-end items-center">
          <button @click="actionShowCompModal" type="button" class="text-gray-700 hover:text-gray-900 bg-transparent text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="defaultModal">
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
        </div>

        <div class="text-center">

          <div class="py-2">


            <div v-for="product in comp" :key="product.id" class="">
              
              <div class="flex gap-4 items-center py-2">
                <div class="bg-white p-1">
                  <img :src="product.preview_image" class="w-16" />
                </div>
                <div class="">
                  <p class="text-gray-700 text-xs">{{ product.name }}</p>
                </div>
              </div>
              
              
              
            </div>


          </div>

        </div>


        <div class="flex gap-8 items-center justify-center pt-4 px-2">
          <button @click="clearAllCompare" class="text-gray-700">Очистить список</button>
          <button @click="goComp"  id="ok-btn" class="px-4 py-2 bg-blue-600 text-white text-base font-medium rounded-md shadow-sm hover:bg-blue-700">
            Сравнить
          </button>
        </div>


      </div>

    </div>
  </div>
</template>



<script>
import { mapState, mapActions } from 'vuex';

  export default {
      name: 'compareModal',
      components: {
    },
    props: {

    },
    data() {
      return {

      }
    },
    computed: {
      ...mapState({
        showCompModal: (state) => state.modules.comparison.showCompModal,
        comp: (state) => state.modules.comparison.products,
      }),
    },
    methods: {
      ...mapActions({
        actionShowCompModal: 'modules/comparison/actionShowCompModal',
        clearAllCompare: 'modules/comparison/clearAllCompare',
    }),
    goComp(){
      this.actionShowCompModal()
      this.$router.push({ name: 'compare' })
    }    
    },
  }
</script>