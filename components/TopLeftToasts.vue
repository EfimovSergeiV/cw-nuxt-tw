<template>

  <div id="myToast" class="fixed right-5 top-2 ">
    
    
      <div v-for="toast in toasts" :key="toast.id" class="">
        <transition tag="div" name="left-emergence">
          <div :id="toast.id" v-if="toast.show" @click="hideToast(toast.id)" class="my-2 dark:text-gray-700 px-5 py-4 border-r-8 border-blue-500 bg-white drop-shadow-lg cursor-pointer">
            <p class="text-sm">
              <!-- Polish the toast with an circle blue "i" (stands for information) -->
              <span class="mr-2 inline-block px-3 py-1 rounded-full bg-blue-500 text-white font-extrabold">i</span>
              {{ toast.text }}
            </p>      
          </div>
        </transition>
      </div>

    

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

  export default {
    name: 'TopLeftToasts',
    components: {

    },
    props: {
      title: {
        type: String,
        default: null,
      },
      text: {
        type: String,
        default: null,
      },
      icon: {
        type: String,
        default: null,
      },
      toasts: {
        type: Array,
        default: [
          { id: 1, show: true, text: 'This is a toast 1. Welcome to glsvar.ru'},
          { id: 2, show: true, text: 'This is a toast 2. Welcome to glsvar.ru'},
          { id: 3, show: true, text: 'This is a toast 3. Welcome to glsvar.ru'},
          { id: 4, show: true, text: 'This is a toast 4. Welcome to glsvar.ru'},
          { id: 5, show: true, text: 'This is a toast 5. Welcome to glsvar.ru'},
        ]
      }

    },
    data() {
      return {

      }
    },
    computed: {

    },
    methods: {
      hideToast(id) {
        for ( var toast in this.toasts) {
          console.log(this.toasts[toast], id)
          if (this.toasts[toast].id == id) {
            this.toasts[toast].show = false
          }
        }
      }
    }
  }
</script>