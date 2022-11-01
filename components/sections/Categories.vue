<template>

  <section id="categories">

    <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">


      <div class="">

          <div class="bg-white border-gray-200 shadow-sm border dark:bg-gray-800 dark:border-gray-600 p-2">
            <div class="columns-2 md:columns-3 lg:columns-4">
              <div v-for="ct in cts" :key="ct.id" class="break-inside-avoid-column">
                <div class="p-2">
                  <div class="mb-1">
                    <nuxt-link to="products/page" class="font-bold text-gray-700 dark:text-gray-300 text-base">{{ ct.name }}</nuxt-link>              
                  </div>
                  <div>
                    <ul>
                      <li v-for="sct in ct.inserted" :key="sct.id" class="inline-block mr-3 my-1 group">
                        <nuxt-link to="#" class="text-gray-700 text-sm hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">{{ sct.name }}</nuxt-link>
                        <div class="absolute invisible group-hover:opacity-100 group-hover:visible" v-if="sct.inserted.length > 0">
                          
                          <div class="bg-white border-gray-200 border rounded-sm dark:border-gray-700 dark:bg-gray-800 p-4">
                            <div v-for="ssct in sct.inserted" :key="ssct.id" class="">
                              <nuxt-link to="#" class="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">{{ ssct.name }}</nuxt-link>
                            </div>                          
                          </div>

                        </div>
                      </li>
                    </ul>
                  </div>              
                </div>
              </div>
            </div>
          </div>


          <p>hallo</p>


      </div>





    </div>

  </section>

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