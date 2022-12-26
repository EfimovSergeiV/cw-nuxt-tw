<template>
    <div class="fixed inset-0" id="my-modal" >
      <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">


        <div class="flex justify-end items-center">
          <button @click="displayForm('contactForm')" type="button" class="text-gray-700 hover:text-gray-900 bg-transparent text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="defaultModal">
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
        </div>

        <div class="mt-3 text-center">

          <div class="py-4">
            <label for="message" class="block mt-2 mb-1 text-xs font-medium text-gray-700">Где вы находитесь?</label>
            <div class="relative">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <p class="mdi mdi-map-marker text-gray-700"></p>
              </div>
              <input :value="region" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm w-full rounded-sm focus:ring-blue-500 focus:border-blue-500 block  pl-10 p-2.5" placeholder="Город">
            </div>
          </div>

          <div class="py-4">
            <label for="message" class="block mt-2 mb-1 text-xs font-medium text-gray-700">Как с вами связаться?</label>
            <div class="relative">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <p class="mdi mdi-monitor-cellphone text-gray-700"></p>
              </div>
              <input v-model="contact" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm w-full rounded-sm focus:ring-blue-500 focus:border-blue-500 block  pl-10 p-2.5" placeholder="Телефон или email">
            </div>
          </div>

          <div class="">
            <textarea v-model="text" id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Напишите что-нибудь..."></textarea>
          </div>


          <div class="items-center px-4 py-3">
            <button @click="sendMessage" id="ok-btn" class="px-4 py-2 bg-blue-600 text-white text-base font-medium rounded-md shadow-sm hover:bg-blue-700">
              Отправить
            </button>
          </div>

        </div>
      </div>

    </div>
  </template>

  
<script>
import { mapState, mapActions } from 'vuex';
  
  export default {
    name: 'showWriteUsModal',
    components: {
    },
    props: {

    },

    data() {
      return {
        // person: this.person,
        contact: null,
        text: null,
      }
    },
    computed: {
      ...mapState({
        region: (state) => state.region,
      }),
    },
    methods: {
      ...mapActions({
        displayForm: 'displayForm',
        addToast: 'addToast',
      }),
    sendMessage() {
      if (this.contact) {
        this.$axios
          .$post('u/feedback/', {
            city: this.region,
            person: '',
            contact: this.contact,
            theme: 'order',
            text: this.text,
          })
          .then((response) => {
            this.displayForm('contactForm')
            this.addToast('Ваше сообщение отправлено, мы свяжемся с вами в ближайшее время.')
            // this.$bvToast.toast(
            //   'Мы свяжемся с вами в ближайшее время',
            //   {
            //     title: 'Сообщение отправлено',
            //     variant: 'success',
            //   }
            // )
          })
          .catch(() => {
            // this.$bvToast.toast('Проверьте правильность заполнения формы', {
            //   title: 'Ошибка',
            //   variant: 'danger',
            // })
          })        
      } else {
        // this.$bvToast.toast(
        //   'Укажите в форме ваши контакты, что бы могли с вами связаться.',
        //   {
        //     title: 'Сообщение не отправлено',
        //     variant: 'danger',
        //   }
        // )
      }
    }
  },
}
</script>