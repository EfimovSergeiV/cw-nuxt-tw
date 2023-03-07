<template>
  <div>

    <div class="">
      <div class="w-5 h-5 flex items-center justify-center border-2 border-blue-600 rounded-md cursor-pointer">
        <transition name="fade">
          <div v-if="filterComp(product.id)" class="">
            <button @click="delToComparison(product) && addToast('Товар удалён из сравнения')" class="mdi mdi-check-bold text-gray-700 dark:text-gray-300"></button>
          </div>
          <div v-else class="">
            <button @click="addToComparison(product) && addToast('Товар добавлен к сравнению')" class="w-5 h-5"></button>
          </div>
        </transition>
      </div>      
    </div>

    <!-- <transition name="fade">
      <div class="" v-if="filterComp(product.id)">
        <button @click="delToComparison(product) && addToast('Товар удалён из сравнения')" class="w-full relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-blue-400 to-blue-800 text-gray-100 dark:text-gray-100 ring-1 outline-none ring-cyan-200 dark:ring-blue-700">
          <span :class="`${ cls } relative transition-all ease-in duration-75 rounded-md bg-opacity-0 mdi mdi-equalizer`">
              
          </span>
        </button>
      </div>
      <div class="" v-else>
        <button @click="addToComparison(product) && addToast('Товар добавлен к сравнению')" class="w-full relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-400 to-blue-800 group-hover:from-blue-400 group-hover:to-blue-800 hover:text-gray-100 dark:text-gray-300 hover:dark:text-gray-100 focus:ring-1 focus:outline-none focus:ring-cyan-200 dark:focus:ring-blue-700">
          <span :class="`${ cls } relative transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 mdi mdi-equalizer-outline`">
              
          </span>
        </button>
      </div>
    </transition> -->
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
        compID: 'modules/comparison/compID',
      }),
    },
    methods: {
      filterComp(id) {
        return this.compID.filter((n) => n === id).length !== 0
      },
      showAction(action) {
        this.$bvToast.toast(this.product.name, {
          title: action.title,
          variant: action.variant,
        })
      },
      ...mapActions({
        addToast: 'addToast',
        addToComparison: 'modules/comparison/addToComparison',
        delToComparison: 'modules/comparison/delToComparison',
      }),
    },
  }
</script>