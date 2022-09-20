<template>
  <div>
    <div class="container">
      <div class="mx-auto py-1 pb-1 px-4 lg:max-w-7xl lg:px-8">
          <nav class="">
        
            <div class="bg-white border-gray-200 border dark:border-gray-700 dark:bg-gray-800">
              <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-8 md:px-8 lg:px-8 py-2.5">
                  <nuxt-link to="/" class="flex items-center">
                      <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo">
                      <span class="self-center text-md font-semibold whitespace-nowrap dark:text-white">Главный сварщик</span>
                  </nuxt-link>
                  <button data-collapse-toggle="mega-menu-full" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full" aria-expanded="false">
                          <span class="sr-only">Open main menu</span>
                          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                  </button>
                  <div id="mega-menu-full" class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1">
                      <ul class="flex flex-col mt-4 text-sm font-medium md:flex-row md:space-x-8 md:mt-0">
                          <li>
                              <nuxt-link to="/" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-900 md:p-0 dark:text-gray-400 md:dark:hover:text-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-100 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Главная</nuxt-link>
                          </li>
                          <li>
                              <button id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" class="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-100 md:dark:hover:bg-transparent dark:border-gray-700" @click="menu = !menu">Каталог <svg class="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                          </li>
                          <li>
                              <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-900 md:p-0 dark:text-gray-400 md:dark:hover:text-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-100 md:dark:hover:bg-transparent dark:border-gray-700">Корзина</a>
                          </li>
                          <li>
                              <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-900 md:p-0 dark:text-gray-400 md:dark:hover:text-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-100 md:dark:hover:bg-transparent dark:border-gray-700">Магазины</a>
                          </li>
                          <li>
                            <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-900 md:p-0 dark:text-gray-400 md:dark:hover:text-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-100 md:dark:hover:bg-transparent dark:border-gray-700" @click="profile = !profile">Профиль</a>                     
                          </li>
                      </ul>
                  </div>
              </div>
            </div>



        </nav>
      </div>
    </div>
    <nav>
      <ul class="flex items-center justify-center font-semibold">
        <li class="relative group px-3 py-2">
          <button class="hover:opacity-50 cursor-default">Products</button>
          <div
            class="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
            <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
              <div
                class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm">
              </div>

              <div class="relative z-10">
                <div class="grid grid-cols-2 gap-6">
                  <div>
                    <p class="uppercase tracking-wider text-gray-500 font-medium text-[13px]">The Suite</p>
                    <ul class="mt-3 text-[15px]">
                      <li>
                        <a href="#"
                          class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                          Course Editor
                          <p class="text-gray-500 font-normal">All-in-one editor</p>
                        </a>
                      </li>
                      <li>
                        <a href="#"
                          class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                          Accept payments
                          <p class="text-gray-500 font-normal">Pre-build payments page</p>
                        </a>
                      </li>
                      <li>
                        <a href="#"
                          class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                          Closed Captioning
                          <p class="text-gray-500 font-normal">Use AI to generate captions</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p class="uppercase tracking-wider text-gray-500 font-medium text-[13px]">Extensions</p>
                    <ul class="mt-3 text-[15px]">
                      <li>
                        <a href="#"
                          class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                          Plugins
                          <p class="text-gray-500 font-normal">Tweak existing functionality</p>
                        </a>
                      </li>
                      <li>
                        <a href="#"
                          class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                          Batch uploads
                          <p class="text-gray-500 font-normal">Get your time back</p>
                        </a>
                      </li>
                      <li>
                        <a href="#"
                          class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                          Social sharing
                          <p class="text-gray-500 font-normal">Generate content for socials</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="relative group px-3 py-2">
          <button class="hover:opacity-50 cursor-default">Solutions</button>
          <div
            class="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[260px] transform">
            <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
              <div
                class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm">
              </div>
              <div class="relative z-10">
                <p class="uppercase tracking-wider text-gray-500 font-medium text-[13px]">Use cases</p>
                <ul class="mt-3 text-[15px]">
                  <li>
                    <a href="#"
                      class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block">
                      Creators
                    </a>
                  </li>
                  <li>
                    <a href="#"
                      class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block">
                      Streamers
                    </a>
                  </li>
                  <li>
                    <a href="#"
                      class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block">
                      Influence
                    </a>
                  </li>
                  <li>
                    <a href="#"
                      class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block">
                      Programming
                    </a>
                  </li>
                  <li>
                    <a href="#"
                      class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block">
                      Design
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li class="relative group px-3 py-2">
          <button class="hover:opacity-50 cursor-default">Developers</button>
          <div
            class="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
            <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
              <div
                class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12.65rem] duration-500 ease-in-out rounded-sm">
              </div>

              <div class="relative z-10">
                <a href="#"
                  class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                  Documentation
                  <p class="text-gray-500 font-normal">Start integrating in no time</p>
                </a>
                <div class="mt-6 grid grid-cols-2 gap-6">
                  <div>
                    <p class="uppercase tracking-wider text-gray-500 font-medium text-[13px]">Get started</p>
                    <ul class="mt-3 text-[15px]">
                      <li>
                        <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                          Libraries and SDKs
                        </a>
                      </li>
                      <li>
                        <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                          Plugins
                        </a>
                      </li>
                      <li>
                        <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                          Code samples
                        </a>
                      </li>
                      <li>
                        <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                          Tutorials
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p class="uppercase tracking-wider text-gray-500 font-medium text-[13px]">Guides</p>
                    <ul class="mt-3 text-[15px]">
                      <li>
                        <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                          Accept online payments
                        </a>
                      </li>
                      <li>
                        <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                          Editing video like a pro
                        </a>
                      </li>
                      <li>
                        <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                          Automation techniques
                        </a>
                      </li>
                      <li>
                        <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                          Create stunning effects
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="relative group px-3 py-2">
          <button class="hover:opacity-50 cursor-default">Resources</button>
          <div
            class="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px] transform">
            <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
              <div
                class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm">
              </div>
              <div class="relative z-10">
                <ul class="text-[15px]">
                  <li>
                    <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                      Get Support
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                      Case Studies
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                      Guides
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                      News &amp; Events
                    </a>
                  </li>
                </ul>


              </div>
            </div>
          </div>
        </li>
        <li class="relative group px-3 py-2">
          <a href="#" class="hover:opacity-50 cursor-default">Pricing
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>    
  export default {
    name: 'Navbar',
    components: {

  },
    props: {
      navigation: {
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