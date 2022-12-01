<template>

  <div class="bg-gradient-to-r from-gray-300 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-700 dark:text-gray-300 HHh-screen">
    
    <div class="bg-fixed bg-no-repeat bg-right-bottom bg-cover bg-[url('images/footer-bg.png')] dark:bg-[url('images/footer-dark-bg.png')] HHh-full">
      <!-- bg-cover -->
      <div class="container mx-auto">

        <transition name="fade" mode="out-in">
          <Nuxt id="page" />
        </transition>

      </div>      
    </div>

    <!-- <div v-if="cartModal" class="z-40 fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div> -->
    <transition name="fade" mode="out-in">
      <CartModal v-if="cartModal" />
      <ShopsModal v-if="shopModal" />
    </transition>

  </div>
   

</template>
  
<script>
  import { mapState, mapMutations } from 'vuex'
  import CartModal from '~/components/CartModal.vue'
  import ShopsModal from '~/components/ShopsModal.vue'

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
      CartModal,
      ShopsModal,
    },
    data() {
      return {
        dataset: true,
      }
    },
    methods: {
      addTodo (e) {
        this.$store.commit('todos/add', e.target.value)
        e.target.value = ''
      },
      ...mapMutations({
        toggle: 'todos/toggle'
      })
    },
    computed: {
      ...mapState({
        cartModal: (state) => state.modules.cart.cartModal,
        shopModal: (state) => state.shopModal
      }),
    },
  };
</script>