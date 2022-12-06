<template>
  <div class="container">
    <div class="mx-auto my-4 pb-1 px-4 lg:max-w-7xl lg:px-8">
      <!-- THIS IS BUG FOR SHORT PAGE (hidden UP) -->
      <nav class="">
    
        <div class="bg-white border-gray-200 border rounded-sm dark:border-gray-700 dark:bg-gray-800 py-2 md:px-4 relative">

          <div id="mobile" class="md:hidden">
            <div class="flex justify-center md:justify-end text-sm">
              <nuxt-link :to="{ name: 'index' }" class="mx-2 mdi mdi-home"> Главная</nuxt-link>
              <nuxt-link :to="{ name: 'cts' }" class="mx-2 mdi mdi-book-open-page-variant md:hidden"> Каталог</nuxt-link>
              <nuxt-link :to="{ name: 'cart' }" class="mx-2 mdi mdi-cart"> Корзина</nuxt-link>
              <nuxt-link :to="{ name: 'about' }" class="mx-2 mdi mdi-store-marker"> Магазины</nuxt-link>
            </div>
          </div>

          <div class="grid justify-items-end mx-auto max-w-screen-xl">

            <div id="mega-menu-full" class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1">
                <ul class="flex flex-col mt-4 text-sm font-medium md:flex-row md:space-x-4 md:mt-0">

                    <li>
                      <nuxt-link :to="{ name: 'index' }" class="block text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-900 dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700 mdi mdi-home" aria-current="page"> Главная</nuxt-link>
                    </li>

                    <li id="navabar-menu" class=" group">
                      <nuxt-link :to="{ name: 'cts' }" id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" class="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 items-center font-medium border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700 mdi mdi-book-open-page-variant"> Каталог</nuxt-link>
                      
                      <div  v-if="$nuxt.$route.name != 'cts'" class="absolute top-0 left-0 transition group-hover:translate-y-7 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">

                        <div class="menu-section pt-7">
                          <div id="mega-menu-full-dropdown" class="bg-white border-gray-200 shadow-sm border dark:bg-gray-800 dark:border-gray-600 p-2">

                            <div class="columns-3 lg:columns-4">
                              <div v-for="ct in cts" :key="ct.id" class="break-inside-avoid-column">
                                <div class="">


                                  <div class="p-2">
                                    <div class="mb-1">
                                      <nuxt-link :to="{ name: 'prods', query: { ct: ct.id, page: 1 } }" class="font-bold text-gray-700 dark:text-gray-300 text-base">{{ ct.name }}</nuxt-link>              
                                    </div>

                                    <div>
                                      <ul>
                                        <li v-for="sct in ct.inserted" :key="sct.id" class="inline-block mr-3 my-1">
                                          <nuxt-link :to="{ name: 'prods', query: { ct: sct.id, page: 1 } }" class="text-gray-700 text-sm hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">{{ sct.name }}</nuxt-link>
                                        </li>
                                      </ul>
                                    </div>              
                                  </div>


                                </div>
                              </div>
                            </div>


                            <!-- <div class="columns-3 lg:columns-4 p-2">
                              <div class="break-inside-avoid-column" v-for="ct in cts" :key="ct.id">
                                <div class="block p-2 rounded-sm hover:bg-gray-50 dark:hover:bg-gray-700">
                                  <nuxt-link to="#" class="font-bold text-gray-800 dark:text-gray-200 mb-3 text-base">{{ ct.name }}</nuxt-link>

                                  <ul>
                                    <li v-for="sct in ct.inserted" :key="sct.id" class="inline-block mr-2">
                                      <div id="ssct" class="block">
                                        <nuxt-link to="#" class="text-gray-700 text-sm hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">{{ sct.name }} <div  v-if="sct.inserted.length > 0" class="hidden iiinline-block mdi mdi-arrow-down"></div></nuxt-link>
                                      </div>

                                      <div v-if="sct.inserted.length > 0" class="absolute z-50 bg-white border-gray-200 shadow-sm border dark:bg-gray-800 dark:border-gray-600 p-2">
                                        <div class="" v-for="ssct in sct.inserted" :key="ssct.id">
                                          <nuxt-link to="#">{{ ssct.name }}</nuxt-link>
                                        </div>
                                      </div>

                                    </li>
                                  </ul>                                        

                                </div>
                              </div>
                            </div> -->
                            
                            <div class="px-10 py-4">
                              <nuxt-link to="/cts" class="text-right">
                                <h3>Перейти в каталог</h3>
                              </nuxt-link>
                            </div> 
                          </div>
                        </div>
                        
                      </div>
                      
                      <!-- <div v-if="$nuxt.$route.name != 'cts'" class="absolute fade-action duration-300 z-50 -left-px -right-px invisible group-hover:opacity-100 group-hover:visible rounded-sm shadow-md">
                        <div class="mt-7">
                          <div class="">
                            <div class="menu-section">
                              <div id="mega-menu-full-dropdown" class="bg-white border-gray-200 shadow-sm border dark:bg-gray-800 dark:border-gray-600 p-2">

                                <div class="columns-3 lg:columns-4">
                                  <div v-for="ct in cts" :key="ct.id" class="break-inside-avoid-column">
                                    <div class="">


                                      <div class="p-2">
                                        <div class="mb-1">
                                          <nuxt-link to="products/page" class="font-bold text-gray-700 dark:text-gray-300 text-base">{{ ct.name }}</nuxt-link>              
                                        </div>

                                        <div>
                                          <ul>
                                            <li v-for="sct in ct.inserted" :key="sct.id" class="inline-block mr-3 my-1">
                                              <nuxt-link :to="{ name: 'prods', query: { ct: sct.id, page: 1 } }" class="text-gray-700 text-sm hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">{{ sct.name }}</nuxt-link>
                                            </li>
                                          </ul>
                                        </div>              
                                      </div>


                                    </div>
                                  </div>
                                </div>


                                <div class="columns-3 lg:columns-4 p-2">
                                  <div class="break-inside-avoid-column" v-for="ct in cts" :key="ct.id">
                                    <div class="block p-2 rounded-sm hover:bg-gray-50 dark:hover:bg-gray-700">
                                      <nuxt-link to="#" class="font-bold text-gray-800 dark:text-gray-200 mb-3 text-base">{{ ct.name }}</nuxt-link>

                                      <ul>
                                        <li v-for="sct in ct.inserted" :key="sct.id" class="inline-block mr-2">
                                          <div id="ssct" class="block">
                                            <nuxt-link to="#" class="text-gray-700 text-sm hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">{{ sct.name }} <div  v-if="sct.inserted.length > 0" class="hidden iiinline-block mdi mdi-arrow-down"></div></nuxt-link>
                                          </div>

                                          <div v-if="sct.inserted.length > 0" class="absolute z-50 bg-white border-gray-200 shadow-sm border dark:bg-gray-800 dark:border-gray-600 p-2">
                                            <div class="" v-for="ssct in sct.inserted" :key="ssct.id">
                                              <nuxt-link to="#">{{ ssct.name }}</nuxt-link>
                                            </div>
                                          </div>

                                        </li>
                                      </ul>                                        

                                    </div>
                                  </div>
                                </div>

                                
                                <div class="px-10 py-4">
                                  <nuxt-link to="/cts" class="text-right">
                                    <h3>Все категории</h3>
                                  </nuxt-link>
                                </div> 
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> -->




                    </li>

                    <li class="relative px-2">
                        <nuxt-link :to="{ name: 'cart' }" class="block border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 mdi mdi-cart"> Корзина</nuxt-link>
                        <div v-if="cart.length > 0" class="absolute top-0 right-0">
                          <!-- <p class="text-xs">{{ cart.length }}</p> -->
                          <span class="flex h-2 w-2">
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                          </span>
                        </div>
                        
                    </li>
                    <li>
                        <nuxt-link :to="{ name: 'about' }" class="block border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 mdi mdi-store-marker"> Магазины</nuxt-link>
                    </li>


                    <!-- <li class="group">
                      <a href="#" class="block py-1 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-900 dark:text-gray-400 md:dark:hover:text-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-100 md:dark:hover:bg-transparent dark:border-gray-700" @click="profile = !profile">Профиль</a>                     
                      <div class="absolute w-full left-0 invisible group-hover:opacity-100 group-hover:visible">
                        <div class="container ">
                          <div class="mx-auto py-1 pb-1 px-4 lg:max-w-7xl lg:px-8">
                            <div class="menu-profile grid justify-items-end">
                              <div class="right-10 z-10 mt-2 w-60 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                                
                                <div class="block">
                                  <p class="px-4 py-2 text-sm text-gray-700 mdi mdi-theme-light-dark"> Тема: 
                                    <button type="button" v-if="$colorMode.preference === 'dark'" @click="$colorMode.preference = 'system'" class="text-sm text-gray-700"> Тёмная</button>
                                    <button type="button" v-if="$colorMode.preference === 'light'" @click="$colorMode.preference = 'dark'" class="text-sm text-gray-700"> Светлая</button>
                                    <button type="button" v-if="$colorMode.preference === 'system'" @click="$colorMode.preference = 'light'" class="text-sm text-gray-700"> Системная</button>
                                  </p>
                                </div>
                                
                                <a href="#" class="mdi mdi-card-account-details-outline block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"> Профиль</a>
                                <a href="#" class="mdi mdi-heart-multiple-outline block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1"> Избранное</a>
                                <a href="#" class="mdi mdi-logout block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2"> Выход</a>
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>
                    
                    </li> -->

                    
                </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'Navbar',
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
  computed: {
    ...mapState({
      cart: (state) => state.modules.cart.products,
    }),
  },
}
</script>

<style scoped>
/* a.nuxt-link-active {
  font-weight: bold;
} */
/* exact link will show the primary color for only the exact matching link */
/* a.nuxt-link-exact-active {
  text-decoration: solid;
} */
</style>