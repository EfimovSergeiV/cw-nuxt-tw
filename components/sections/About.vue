<template>
  <section if="about">
    <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">


      <div class="bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 shadow-md my-4">

        <div class="">
          <img src="bnr/banner_image-1.webp" />
        </div>

        <div class="border-b border-gray-700/20 dark:border-white/10">
          <blockquote class="text-2xl font-semibold italic text-center text-gray-700 dark:text-gray-300">
            
            <span class="px-4">ЕСЛИ НУЖНО</span>
            <span class="before:block before:absolute before:-inset-2 before:-skew-y-3 before:bg-blue-600 relative inline-block my-2">
              <span class="relative text-white"> СВАРОЧНОЕ ОБОРУДОВАНИЕ </span>
            </span>
            <span class="px-4">,ЗАКАЗЫВАЙТЕ ОНЛАЙН </span>
            <p class="mt-1">НА GLSVAR.RU!</p>
            
          </blockquote>
        </div>

        <div class="px-4 mt-8">
          <div class="relative">

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">

              <div class="flex items-center gap-2 bg-white dark:bg-gray-600 py-2 px-2 shadow-md shadow-black/50 rounded-md border border-white/10">
                <img src="/bnr/arbeitsschutz-schweissen.webp" class=" rounded-full w-24 border border-white/20"/>
                <nuxt-link :to="{ name: 'prods', query: { ct: 77 }}" class="">
                  <p class="text-center">Средства защиты головы, рук и лица</p>
                </nuxt-link>
              </div>
              <div class="flex items-center gap-2 bg-white dark:bg-gray-600 py-2 px-2 shadow-md shadow-black/50 rounded-md border border-white/10">
                <img src="/bnr/autogentechnik.webp" class=" rounded-full w-24 border border-white/20"/>
                <nuxt-link :to="{ name: 'prods', query: { ct: 3 }}" class="">
                  <p class="text-center">Принадлежности для газокислородной сварки</p>
                </nuxt-link>
              </div>
              <div class="flex items-center gap-2 bg-white dark:bg-gray-600 py-2 px-2 shadow-md shadow-black/50 rounded-md border border-white/10">
                <img src="/bnr/Kreise-SH-hell4.webp" class=" rounded-full w-24 border border-white/20"/>
                <nuxt-link :to="{ name: 'prods', query: { ct: 1 }}" class="">
                  <p class="text-center">Современные сварочные аппараты на дуговой сварке</p>
                </nuxt-link>
              </div>
              <div class="flex items-center gap-2 bg-white dark:bg-gray-600 py-2 px-2 shadow-md shadow-black/50 rounded-md border border-white/10">
                <img src="/bnr/schweissbrenner.webp" class=" rounded-full w-24 border border-white/20"/>
                <nuxt-link :to="{ name: 'prods', query: { ct: 2 }}" class="">
                  <p class="text-center">Сварочные горелки и их изнашиваемые детали</p>
                </nuxt-link>
              </div>
              <div class="flex items-center gap-2 bg-white dark:bg-gray-600 py-2 px-2 shadow-md shadow-black/50 rounded-md border border-white/10">
                <img src="/bnr/schweisszusatzwerkstoffe.webp" class=" rounded-full w-24 border border-white/20"/>
                <nuxt-link :to="{ name: 'prods', query: { ct: 4 }}" class="">
                  <p class="text-center">Сварочные электроды, проволока и присадочные материалы</p>
                </nuxt-link>
              </div>
              <div class="flex items-center gap-2 bg-white dark:bg-gray-600 py-2 px-2 shadow-md shadow-black/50 rounded-md border border-white/10">
                <img src="/bnr/oberflaechenbearbeitung.webp" class=" rounded-full w-24 border border-white/20"/>
                <nuxt-link :to="{ name: 'prods', query: { ct: 5 }}" class="">
                  <p class="text-center">Инструменты и химия для очистки поверхности</p>
                </nuxt-link>
              </div>          
              <div class="flex items-center gap-2 bg-white dark:bg-gray-600 py-2 px-2 shadow-md shadow-black/50 rounded-md border border-white/10">
                <img src="/bnr/schweisszubehoer.webp" class=" rounded-full w-24 border border-white/20"/>
                <nuxt-link :to="{ name: 'cts' }" class="">
                  <p class="text-center">Другие принадлежности для ваших сварочных работ</p>
                </nuxt-link>
              </div>
              
            </div>

          </div>
        </div>

        <div class="px-4 py-4">

          <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-2">

            <div class="max-w-[500px] shadow-md shadow-black/50 rounded-md ">
              <hooper
                :center-mode="true"
                :wheel-control="false"
                :infinite-scroll="true"
                :auto-play="false"
                style="height: 100%;"
                :play-speed="12000"
                class=""
              >
                <slide v-for="image in shopImages" :key="image.id" class="">
                  <div class="">
                    <img :src="image.url" class="cccursor-zoom-in rounded-md " width="500px" height="250px" :alt="image.id" fluid/>
                  </div>
                </slide>
                <hooper-navigation slot="hooper-addons"></hooper-navigation>
              </hooper>            
            </div>

            <div class="">
              <div class="">
                <p class="text-2xl text-gray-900 dark:text-gray-100 text-center">Наши магазины</p>
              </div>
              <div class="py-4">
                <p class="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-all duration-700">
                  <span class="font-semibold uppercase">Главный сварщик</span> с 2009 года – ваш надежный партнер в мире сварочного оборудования! Наши магазины – это место, где профессионалы и энтузиасты приходят за лучшими решениями для сварочных работ. Сварка - это искусство, и мы знаем, как сделать его доступным и эффективным для каждого.
                </p>
                <p class="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-all duration-700">
                </p>
              </div>
              <div>
                <p class="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-all duration-700">
                  У нас представлен широкий выбор сварочного оборудования и аксессуаров от известных и проверенных производителей, таких как Сварог, Ресанта, Telwin, Кедр, Huter и другие. У нас вы найдете самые привлекательные цены и прогрессивные системы скидок!<br /> Если Вы ищите инверторный аппарат, полуавтомат или аргоно-дуговую установку, то доверьтесь нам.
                </p>
              </div>
            </div>

          </div>
        </div>

        <!-- <div class="">

          <div class="grid grid-cols-2 md:grid-cols-3 gap-4 px-4 py-2">
            <div v-for="shop in shops" :key="shop.id">
              <div class="bg-white dark:bg-gray-600 py-2 px-2 shadow-md shadow-black/50 rounded-md border border-white/10">
                <p class="text-xs h-8">{{ shop.adress }}</p>
                <p class="py-1">{{ shop.phone }}</p>
                <p class="text-xs">{{ shop.wday }}</p>
                <p class="text-xs">{{ shop.wend }}</p>
              </div>
              
            </div>
          </div>

        </div> -->




        <div class="flex flex-col lg:flex-row gap-8 items-center justify-between my-8 mx-4">
          <div class="w-full lg:w-5/12">
            <p class="text-2xl text-center my-2 text-gray-900 dark:text-gray-100">Сертификаты</p>
            <p class="text-sm text-center text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-all duration-700">
              Мы являемся официальным дистрибьютором ведущих брендов сварочного оборудования, и всегда готовы предложить вам широкий выбор продуктов, которые обеспечат вашу эффективную и качественную работу. Наши специалисты всегда готовы проконсультировать вас и помочь выбрать именно то, что вам нужно.
            </p>
          </div>
          <div class="flex items-center gap-4">
            <div class="">
              <img @click="cert = 'esab-cert.jpg'" alt="cert-1" src="esab-cert.jpg" class="cursor-zoom-in w-48 shadow-md shadow-black/50 rounded-md " fluid/>
            </div>
            <div class="">
              <img @click="cert = 'cert-redius.jpg'" alt="cert-2" src="cert-redius.jpg" class="cursor-zoom-in w-48 shadow-md shadow-black/50 rounded-md" fluid />
            </div>
            <div class="">
              <img @click="cert = 'svarog.jpg'" alt="cert-3" src="svarog.jpg" class="cursor-zoom-in w-48 shadow-md shadow-black/50 rounded-md " fluid />
            </div>                
          </div>
        </div>


        <div class="my-10 lg:my-20"></div>


        <div class="my-10 lg:my-20"></div>

        <div class="flex items-center justify-center">
          <div class="text-center text-sm md:text-base">
            <p class="text-gray-900 dark:text-gray-100">Если вы не нашли то, что Вам нужно - свяжитесь с нами и мы найдем этот товар специально для Вас!</p>
            <p class="text-gray-900 dark:text-gray-100">Покупайте современное сварочное оборудование у нас и помните, качественное оборудование - залог успешной работы!</p>            
          </div>
        </div>


        <div class="flex items-center justify-center my-8">
          <nuxt-link to="/">
            <img src="../../assets/images/blue-svar.png" alt="glsvar-logo" class=" h-14" />
          </nuxt-link>
        </div>


      </div>




      <transition name="fade">
        <div v-if="cert" class="fixed inset-0 overflow-y-hidden overscroll-y-none z-50 my-10">
          <div class="flex min-h-full justify-center text-center items-center">

            <div class="relative rounded-sm px-10">
              <div class="overflow-y-auto h-screen">
                <div class="flex min-h-full justify-center text-center items-center">
                  <!-- <img src="cert-redius.jpg" class="rounded-sm cursor-zoom-out" fluid/> -->
                  <!-- <img src="esab-cert.jpg" class="rounded-sm cursor-zoom-out" fluid/> -->
                  <img @click="cert = null" :src="cert" class="rounded-sm cursor-zoom-out" fluid/>
                </div>

              </div>
            </div>

          </div>
        </div>
      </transition>
     
    </div>

  </section>
</template>

<script>
  import {
    Hooper,
    Slide,
    Navigation as HooperNavigation,
    Pagination as HooperPagination,
  } from 'hooper'

  export default {
      name: 'About',
      components: {
        Hooper,
        Slide,
        HooperNavigation,
        HooperPagination,
    },
    props: {
      shops: {
        type: Array,
        default: Array,
      },
    },
    data() {
      return {
        cert: null,
        shopImages: [
          { "id": 1, "url": "/shops/1.webp"},
          { "id": 2, "url": "/shops/2.webp"},
          { "id": 3, "url": "/shops/3.webp"},
          { "id": 4, "url": "/shops/4.webp"},
          { "id": 5, "url": "/shops/5.webp"},
          { "id": 6, "url": "/shops/6.webp"},
        ]
      }
    },
  }
</script>