<template>

  <section id="categories">

    <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">

      <div class="bg-white border-gray-200 rounded-sm shadow-sm border dark:bg-gray-800 dark:border-gray-700 p-2">
        <div class="columns-1 md:columns-2 lg:columns- 4 gap- 4">
          <div v-for="ct in cts" :key="ct.id" class="break-inside-avoid-column">
            <div class="mb-4">
              
              <div>
                <div class="mb-2 mx- 2">
                  <nuxt-link :to="{ name: 'prods', query: { ct: ct.id }}" class="font- bold text-gray-700 dark:text-gray-200 text-lg">{{ ct.name }}</nuxt-link>              
                </div>
                <div class="bg-gray-700 border border-gray-600 rounded-md py-3 px-2 transition-all" v-if="ct.inserted.length">
                  <div class="columns-2">

                    <div v-for="sct in ct.inserted" :key="sct.id" class="break-inside-avoid-column">
                      
                      <div class="mb-1">
                        <div class="">
                          <nuxt-link :to="{ name: 'prods', query: { ct: sct.id }}" class="text-gray-700 text-base hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-all">{{ sct.name }}</nuxt-link>
                        </div>

                        <ul class="">
                          <li v-for="ssct in sct.inserted" :key="ssct.id" class="inline-block mx-1">
                            <nuxt-link :to="{ name: 'prods', query: { ct: ssct.id }}" class="text-gray-400 hover:text-gray-200 text-xs hover:underline transition-all">{{ ssct.name }}</nuxt-link>
                          </li>                          
                        </ul>

                      </div>

                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div class="bg-white border-gray-200 shadow-sm border rounded-md dark:bg-gray-700 dark:border-gray-600 p-2 h-[160px]">
            <p>Hallo welt</p>
          </div>
          
        </div>
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