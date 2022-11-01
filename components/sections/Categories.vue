<template>
  <div class="">
    <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">

      <div class="bg-white border-gray-200 shadow-sm border dark:bg-gray-800 dark:border-gray-600 p-2">
        <div class="columns-3 lg:columns-4">
          <div v-for="ct in cts" :key="ct.id" class="break-inside-avoid-column">
            <div class="">


              <div class="p-2">
                <div>
                  <nuxt-link to="products/page" class="font-bold">{{ ct.name }}</nuxt-link>              
                </div>

                <div>
                  <ul>
                    <li v-for="sct in ct.inserted" :key="sct.id" class="inline-block mr-2">
                      <nuxt-link to="#" class="text-sm">{{ sct.name }}</nuxt-link>
                    </li>
                  </ul>
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