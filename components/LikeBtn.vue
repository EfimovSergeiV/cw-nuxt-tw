<template>
  <div>
    <transition name="fade">
      <div class="" v-if="filterFav(product.id)">
        <button @click="delProductToFav(product) && addToast('Товар удалён из избранных')" class="w-full relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-blue-400 to-blue-800 text-gray-100 dark:text-gray-100 ring-1 outline-none ring-cyan-200 dark:ring-blue-700">
          <span :class="`${ cls } relative transition-all ease-in duration-75 rounded-md bg-opacity-0 mdi mdi-heart-multiple`">
              
          </span>
        </button>
      </div>
      <div class="" v-else>
        <button @click="addProductToFav(product) && addToast('Товар добавлен в избранные')" class="w-full relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-400 to-blue-800 group-hover:from-blue-400 group-hover:to-blue-800 hover:text-gray-100 dark:text-gray-300 hover:dark:text-gray-100 focus:ring-1 focus:outline-none focus:ring-cyan-200 dark:focus:ring-blue-700">
          <span :class="`${ cls } relative transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 mdi mdi-heart-multiple-outline`">
              
          </span>
        </button>
      </div>
    </transition>
  </div>
</template>
  
<script>
import { mapActions, mapGetters } from 'vuex'

  export default {
    props: {
      product: {
        type: Object,
        default: Object,
      },
      status: {
        type: Boolean,
        default: false,
      },
      title: {
        type: Boolean,
        default: false,
      },
      cls: {
        type: String,
        default: '',
      },
    },
    computed: {
      ...mapGetters({
        favID: 'modules/favorites/favID',
      }),
    },
    methods: {
      ...mapActions({
        addToast: 'addToast',
        addProductToFav: 'modules/favorites/addProductToFav',
        delProductToFav: 'modules/favorites/delProductToFav',
      }),
      filterFav(id) {
        return this.favID.filter((n) => n === id).length !== 0
      },
      addLikeProduct(product) {
        this.addProductToFav(product)

        // if (this.$auth.loggedIn) {
        //   this.$axios
        //     .$post('/u/likes/', {
        //       product: product.id,
        //     })
        //     .catch(() => {})
        // }
      },
      delLikeProduct(product) {
        this.delProductToFav(product)

        // if (this.$auth.loggedIn) {
        //   this.$axios
        //     .$post('/u/likes/', {
        //       product: product.id,
        //     })
        //     .catch(() => {})
        // }
      },
    },
  }
</script>