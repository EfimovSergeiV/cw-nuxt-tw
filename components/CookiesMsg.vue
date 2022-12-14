<template>

    <div class=" sticky bottom-0 left-0 " aria-labelledby="modal-title" role="dialog" aria-modal="true">

      <div class="relative">
        <div class="bg-blue-700 px-10 py-2">

          <div class="flex items-center justify-between text-sm md:text-base gap-4">
            <div class="">
              <p class="mdi mdi-cookie-settings-outline text-gray-100"> Мы используем cookie. Продолжая пользоваться сайтом, вы соглашаетесь с использованием файлов cookie.</p>
            </div>
            <div class="">

              <button @click="hideCookies" class="relative inline-flex items-center justify-center overflow-hidden text-sm font-medium text-gray-900 rounded-sm group bg-gradient-to-br from-blue-400 to-blue-800 group-hover:from-blue-400 group-hover:to-blue-800 hover:text-gray-100 dark:text-gray-300 hover:dark:text-gray-100 focus:ring-1 focus:outline-none focus:ring-cyan-200 dark:focus:ring-blue-700">
                <span class="relative px-8 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-sm group-hover:bg-opacity-0">
                    Хорошо
                </span>
              </button>

            </div>
          </div>


        </div>
      </div>
    </div>

</template>

<script>
import { mapActions  } from 'vuex';

  export default {
      name: 'CookiesMsg',
      components: {
    },
    methods: {
      ...mapActions({
        showCookiesModal: 'showCookiesModal',
      }),
      hideCookies(){
        this.$storage.setCookie('cookies', false)
        this.showCookiesModal()
      }     
    },
  }
</script>