<template>
  <div id="pagination">

    {{ opts }}

    <ul class="inline-flex items-center -space-x-px">
      <li>
        <nuxt-link :to="{ name: 'prods', query: {ct: opts.ct, page: 1}}" class="py-2 px-3 leading-tight text-gray-500 bg-white rounded-l-sm border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          &lt;
        </nuxt-link>
      </li>

      <li v-for="page, pk in pagination" :key="pk">
        <nuxt-link v-if="page == opts.page" :to="{ name: 'prods', query: {ct: opts.ct, page: page}}" aria-current="page" class="z-10 py-2 px-3 leading-tight text-gray-800 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-gray-900 dark:border-gray-700 dark:bg-gray-700 dark:text-white">{{ page }}</nuxt-link>
        <nuxt-link v-else :to="{ name: 'prods', query: {ct: opts.ct, page: page}}" class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{{ page }}</nuxt-link>
      </li>

      <li>
        <nuxt-link :to="{ name: 'prods', query: {ct: opts.ct, page: 6}}" class="py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-sm border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          &gt;
        </nuxt-link>
      </li>
    </ul>


  </div>
</template>

<script>
  export default {
    name: 'ProductsPagination',
    components: {
      // Pagination,
    },
    props: {
      response: {
        type: Array,
        default: Array,
      },
    },
    data() {
      return {
        opts: this.$route.query,
        pagination: Array.from({length: Math.ceil(this.response.count/20)}, (v, k) => k + 1).slice(0, 7),
      }
    },
    watch: {
      $route(to, from) {
        // this.$router.app.refresh()
        this.opts = this.$route.query
        let currentPage = Number(this.$route.query.page)
        let a = Array.from({length: Math.ceil(this.response.count/20)}, (v, k) => k + 1).slice(0, 7)

        if (currentPage > 4) {
          a = Array.from({length: Math.ceil(this.response.count/20)}, (v, k) => k + 1).slice(currentPage - 4, currentPage + 3)
        }

        if (Math.ceil(this.response.count/20) - currentPage < 3) {
          a = Array.from({length: Math.ceil(this.response.count/20)}, (v, k) => k + 1).slice(-7)
        }

        this.pagination = a
        
      },
    },
  }
</script>