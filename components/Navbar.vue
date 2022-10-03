<template>
  <div class="container">
    <div class="mx-auto py-1 pb-1 px-4 lg:max-w-7xl lg:px-8">
        <nav class="">
      
          <div class="bg-white border-gray-200 border dark:border-gray-700 dark:bg-gray-800">
            <div class="grid justify-items-end mx-auto max-w-screen-xl px-8 md:px-8 lg:px-8 py-2.5">

                <div id="mega-menu-full" class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1">
                    <ul class="flex flex-col mt-4 text-sm font-medium md:flex-row md:space-x-8 md:mt-0">

                        <li>
                            <nuxt-link to="/" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-900 md:p-0 dark:text-gray-400 md:dark:hover:text-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-100 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Главная</nuxt-link>
                        </li>

                        <li id="navabar-menu" class="group">
                          <nuxt-link to="/cts" id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" class="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-100 md:dark:hover:bg-transparent dark:border-gray-700">Каталог <div class="ml-1 mdi mdi-arrow-down" ></div></nuxt-link>
                          <div class="absolute z-40 w-full left-0 invisible group-hover:opacity-100 group-hover:visible">
                            <div class="container mt-4">
                              <div class="mx-auto py-1 pb-1 px-4 lg:max-w-7xl lg:px-8">
                                <div class="menu-section">
                                  <div id="mega-menu-full-dropdown" class="mt-1 bg-white border-gray-200 shadow-sm border dark:bg-gray-800 dark:border-gray-600">
                                    <div class="grid py-5 px-4 mx-auto max-w-screen-xl text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-3 md:px-6">


                                      <div class="" v-for="ct in cts" :key="ct.id">
                                        <div class="block p-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
                                          <nuxt-link to="#" class="font-semibold">{{ ct.name }}</nuxt-link>

                                          <ul>
                                            <li v-for="sct in ct.inserted" :key="sct.id" class="inline-block mr-4 my-1">
                                              <div id="ssct" class="block">
                                                <nuxt-link to="#" class="text-sm font-light text-gray-500 dark:text-gray-300">{{ sct.name }} <div  v-if="sct.inserted.length > 0" class="inline-block mdi mdi-arrow-down"></div>
                                                                                             
                                                </nuxt-link>

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
                                    <!-- <div class="px-10 py-4">
                                      <nuxt-link to="/cts" class="text-right">
                                        <h3>Все категории</h3>
                                      </nuxt-link>
                                    </div>  -->
                                  </div>
                                </div>
                              </div>
                            </div>                            
                          </div>
                        </li>

                        <li>
                            <nuxt-link to="cart" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-900 md:p-0 dark:text-gray-400 md:dark:hover:text-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-100 md:dark:hover:bg-transparent dark:border-gray-700">Корзина</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="about" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-900 md:p-0 dark:text-gray-400 md:dark:hover:text-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-100 md:dark:hover:bg-transparent dark:border-gray-700">Магазины</nuxt-link>
                        </li>
                        <li class="group">
                          <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-900 md:p-0 dark:text-gray-400 md:dark:hover:text-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-100 md:dark:hover:bg-transparent dark:border-gray-700" @click="profile = !profile">Профиль</a>                     
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
                        
                        </li>
                    </ul>
                </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
</template>

<script>    
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
}
</script>