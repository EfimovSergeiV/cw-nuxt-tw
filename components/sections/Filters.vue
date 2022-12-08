<template>
  <section id="filters">


    <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">

      <div class="flex items-center justify-between">

        <button @click="(show = !show)">Фильтр по товарам</button>
        <Pagination :response="response" />
        
      </div>

    </div>


    <transition tag="div" name="left-emergence">
      <div v-if="(show && $nuxt.$route.name === 'prods')" class="fixed z-50 top-0 left-0">
        <div class=" bg-gray-800 w-[480px] h-screen overflow-y-auto">
          
          <div class="flex items-center justify-between">
            <div class=""><p class="p-2">Фильтр по товарам</p></div>
            <div class=""><button @click="show = !show">Закрыть</button></div>
          </div>
          
          
          <div class="">

            <p v-for="i in 50" :key="i">{{ i }}. hallo welt </p>

          </div>

        </div>
      </div>
    </transition>

  </section>
</template>

<script>
  import Pagination from '~/components/Pagination.vue'

  export default {
    name: 'Filters',
    components: {
      Pagination,
    },
    props: {
      response: {
        type: Object,
        default: Object,
      },
      props: {
        type: Array,
        default: Array,
      },
      brands: {
        type: Array,
        default: Array,
      },
    },
    data() {
      return {
        opts: this.$route.query,
        show: true,
        // tail: { "ct": "14", "brnd": [ 3, 27 ], "6d53": [ "2,0", "2,5", "3,0", "3,2" ] }
      }
    },
    methods: {
      changeForm(key, value) {
        console.log("Change form KEY: ", key, "VALUE: ", value)
        this.opts = { "ct": 14 ,"brnd": [ 3, 27 ], "6d53": [ "2,0", "2,5", "3,0", "3,2" ]}
        console.log('OPTS: ',this.opts )
      },
    }
  }
</script>