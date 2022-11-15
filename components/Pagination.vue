<template>
  <div id="pagination">

    {{ opts }}
    Всего страниц: {{ pages }}

    ArraySlice: ({{ counts }})

    <ul class="inline-flex items-center -space-x-px">
      <li>
        <nuxt-link :to="{ name: 'prods', query: {ct: opts.ct, page: 1}}" class="py-2 px-3 leading-tight text-gray-500 bg-white rounded-l-sm border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          &lt;
        </nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{ name: 'prods', query: {ct: opts.ct, page: 1}}" class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{ name: 'prods', query: {ct: opts.ct, page: 2}}" class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{ name: 'prods', query: {ct: opts.ct, page: 3}}" aria-current="page" class="z-10 py-2 px-3 leading-tight text-gray-800 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-gray-900 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{ name: 'prods', query: {ct: opts.ct, page: 4}}" class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{ name: 'prods', query: {ct: opts.ct, page: 5}}" class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</nuxt-link>
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
        stat: false,
        pages: Math.ceil(this.response.count/20),
        counts: [1,2,3,4,5,6,7,8,9,10,11].slice(0, 5)
      }
    },
  }
</script>