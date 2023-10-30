<template>


  <div class="relative z-50 " aria-labelledby="modal-title" role="dialog" aria-modal="true">

    <div class="fixed inset-0 overflow-y-hidden overscroll-y-none">
      <div class="flex min-h-full justify-center p-4 text-center items-center sm:p-0 bg-gray-500/50 backdrop-blur-sm">

        <div class="relative transform overflow-hidden rounded-lg bg-gray-700 text-left shadow-xl transition-all sm:my-8 sm:max-w-4xl mx-4 w-10/12">

          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                  Уведомление
              </h3>
              <button @click="msgModal(); hideMsg()" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>

            <div class="px-4 py-4">
              <div class="flex items-center min-h-[40vh]">
                <div class="grid grid-cols-1 gap-8 w-full">
                  <div class="">
                    <p>Наш магазин на ул. Крупской 30Б (г. Смоленск) по техническим причинам временно не работает.</p>              
                    <p>Все отгрузки производятся с магазина в пос. Тихвинка 69 (ТК Город Мастеров, пав. 21)</p>
                  </div>
                  <div class="grid grid-cols-1 gap-1">
                    <a href="tel:+74812673322" class="text-base"> Тел: +7 (4812) 67 33 22</a>
                    <a href="mailto:smolsvarka2@mail.ru" target="blank" class="text-sm">Email: smolsvarka2@mail.ru</a>
                  </div>
                  <div class="">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2303.136453821733!2d32.08285231582015!3d54.74240298029518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46ce5869d2b1350b%3A0xbe43ae4f55cd8783!2z0JPQvtGA0L7QtCDQnNCw0YHRgtC10YDQvtCy!5e0!3m2!1sru!2sru!4v1668410897784!5m2!1sru!2sru" width="100%" height="250" frameborder="0" loading="lazy" class="rounded-sm"></iframe>
                  </div>
                </div>
              </div>
            </div>


            <div class="flex justify-end items-end px-2 py-2 space-x-2 rounded-b border-t bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600">

              <div class="">
                <button @click="msgModal(); hideMsg()" data-modal-toggle="defaultModal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-2">Закрыть и больше не показывать</button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions({
      msgModal: 'msgModal',
    }),
    hideMsg(){
      this.$storage.setCookie('msgmod', false)
    }
  }
}
</script>