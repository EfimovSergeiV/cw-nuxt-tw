<template>

  <div class="bg-gradient-to-r from-gray-300 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-700 dark:text-gray-300 HHh-screen">
    
    <div class="bg-fixed bg-no-repeat bg-right-bottom bg-cover bg-[url('images/footer-bg.png')] dark:bg-[url('images/footer-dark-bg.png')] HHh-full">
      <!-- bg-cover -->
      <div class="container mx-auto">

        <!-- <p class="text-sm">{{ JSON.stringify($storage.state) }}/ {{ cookies }}</p> -->

        <TopLeftToasts />

        <transition name="fade" mode="out-in">
          <Nuxt id="page" />
        </transition>

      </div>

    </div>

    <!-- <div v-if="cartModal" class="z-40 fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div> -->
    
    <transition name="fade" mode="out-in">
      <!-- <CookiesMsg v-if="(cookies && cookiestore)" /> -->
      <ShopsModal v-if="shopModal" />

      <CartModal v-if="cartModal" />
      <RequestPriceModal v-if="requestModal" />
      <ShowWriteUsModal v-if="contactForm" />
      
      <!-- <PrivacyPolicy /> -->


    </transition>



      <div class="absolute">

        <div class="relative">
          <div class="fixed bottom-48 right-20 hover:right-24 transition-all duration-500">
            <div class="relative">
              <div class="absolute z-50">
                <div @click="displayForm('contactForm')" class="-rotate-90 bg-blue-700 px-4 pb-12  group rounded-md w-44 cursor-pointer">
                  <div class="flex items-center justify-center group-hover:text-gray-100 text-gray-300 font-bold transition-all duration-500">
                    <div class="">
                      <p class="text-sm mx-2">Напишите нам</p>
                    </div>
                    <div class="rotate-90">
                      <p class="mdi mdi-24px mdi-message-text-outline"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>


  </div>

</template>
  
<script>
  import { mapState, mapMutations, mapActions } from 'vuex';
  import CookiesMsg from '~/components/CookiesMsg.vue';
  import CartModal from '~/components/CartModal.vue';
  import ShopsModal from '~/components/ShopsModal.vue';
  import RequestPriceModal from '~/components/RequestPriceModal.vue';
  import PrivacyPolicy from '~/components/PrivacyPolicy.vue';
  import ShowWriteUsModal from '~/components/ShowWriteUsModal.vue';
  import TopLeftToasts from '~/components/TopLeftToasts.vue';

  export default {
    // head: {
    //   title: "Nuxt.js with TailwindCSS",
    //   meta: [
    //       { charset: "utf-8" },
    //       { name: "viewport", content: "width=device-width, initial-scale=1" },
    //       {
    //           hid: "description",
    //           name: "description",
    //           content: "Nuxt.js with TailwindCSS example",
    //       },
    //   ],
    //   link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
    // },
    components: {
      CookiesMsg,
      CartModal,
      ShopsModal,
      RequestPriceModal,
      PrivacyPolicy,
      ShowWriteUsModal,
      TopLeftToasts,
    },
    data() {
      return {
        dataset: true,
        showWriteUs: true,
      }
    },
    methods: {
      // addTodo (e) {
      //   this.$store.commit('todos/add', e.target.value)
      //   e.target.value = ''
      // },
      ...mapMutations({
        toggle: 'todos/toggle'
      }),
      ...mapActions({
        displayForm: 'displayForm',
      }),
    },
    computed: {
      ...mapState({
        cartModal: (state) => state.modules.cart.cartModal,
        requestPrice: (state) => state.modules.cart.requestPrice,
        requestModal: (state) => state.modules.cart.requestModal,
        shopModal: (state) => state.shopModal,
        cookies: (state) => state.cookies,
        contactForm: (state) => state.contactForm,
        cookiestore: (state) => state.storage.cookies
      }),
    },
  };
</script>