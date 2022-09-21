<template>
  <div class="">
    <div class="mx-auto py-2 px-4 lg:max-w-7xl lg:px-8">
      <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        <div v-for="ct in cts" :key="ct.id" class="flex items-stretch bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 shadow-md p-2">
          <div class="w-full p-2">

            <div>
              <nuxt-link to="products/page" class="text-gray-200 hover:text-white rounded-md text-sm font-medium">
                <h2>{{ ct.name }}</h2>
              </nuxt-link>
            </div>

            <div class="mt-4">
              <div v-for="sct in ct.inserted" :key="sct.id" >
                <div>
                  <nuxt-link to="#" class="text-gray-300 hover:text-white rounded-md text-sm font-medium">
                    {{ sct.name }}
                  </nuxt-link>
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
  export default {
      name: 'Categories',
      components: {
    },
    props: {
      cts: {
        type: Array,
        default: Array,
      },
    },
    data() {
      return {
  
      }
    },
  }
</script>