<template>

  <div id="toasts" class="fixed z-50 right-5 top-2 ">

    <transition-group tag="div" name="right-emergence">
      <div v-for="toast in toasts" :key="toast.id" class="w-96">
        
          <div :id="toast.id" @click="hideToast(toast.id)" class="my-2 dark:text-gray-700 px-5 py-4 border-r-8 border-blue-600 bg-white drop-shadow-lg cursor-pointer rounded-l-sm">
            <div class="flex items-center justify-between">
              <div class="">
                <p class="mdi mdi-36px mdi-information-outline text-blue-600"></p>
              </div>
              <div class="">
                <p class="text-sm text-center">{{ toast.text }}</p>
              </div>
            </div>
          </div>
        
      </div>
    </transition-group>

  </div>

  <!-- <div class="absolute right-5 top-5" id="my-modal" >
    <div class="relative">

      <div class="fixed">
        <div class=" p-5 border w-96 shadow-lg rounded-md bg-white">

          <transition name="fade" mode="out-in">

          <div class="text-center">
            <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <svg
                class="h-6 w-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <h3 class="text-lg leading-6 font-medium text-gray-900">Successful!</h3>
            <div class="mt-2 px-7 py-3">
              <p class="text-sm text-gray-500">
                Account has been successfully registered!
              </p>
            </div>
            <div class="items-center px-4 py-3">
              <button id="ok-btn" class="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300">
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div> -->

</template>

<script>
import { mapState, mapActions } from 'vuex'

  export default {
    name: 'TopLeftToasts',
    components: {

    },
    data() {
      return {

      }
    },
    computed: {
      ...mapState({
        toasts: (state) => state.toasts,
      }),
    },
    methods: {
      ...mapActions({
        hideToast: 'hideToast',
      }),
      // hideToast(id) {
      //   for ( var toast in this.toasts) {
      //     console.log(this.toasts[toast], id)
      //     if (this.toasts[toast].id == id) {
      //       this.toasts[toast].show = false
      //     }
      //   }
      // }
    }
  }
</script>