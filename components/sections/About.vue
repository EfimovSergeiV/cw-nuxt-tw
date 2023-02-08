<template>
  <section if="about">
    <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">


      <div class="bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 shadow-md my-4">

        <div class="flex gap-8 items-center justify-between my-8 mx-4">
          <div class="flex">
            <!-- <nuxt-link to="/">
              <img src="../../assets/images/blue-svar.png" alt="glsvar-logo" width="380" />
            </nuxt-link> -->

            <div class="border dark:border-gray-700 rounded-sm">


              <div class="w-[500px] h-[250px]">
                <hooper
                  :wheel-control="false"
                  :infinite-scroll="true"
                  :play-speed="12000"
                  :auto-play="true"
                  style="height: 100%"
                  class="w-[500px] h-[250px]"
                >
                  <slide v-for="image in 10" :key="image" class="rounded-sm w-[500px] h-[250px]">
                    <div class="w-[500px] h-[250px]">
                      <img src="https://picsum.photos/600/300/?image=41" class="w-[500px] h-[250px] cursor-zoom-in" fluid/>
                    </div>
                  </slide>
                  <hooper-navigation slot="hooper-addons"></hooper-navigation>
                  <hooper-pagination slot="hooper-addons"></hooper-pagination>
                </hooper>
              </div>

            </div>


          </div>
          <div class=" w-6/12">
            <p class="text-2xl my-2 text-gray-900 dark:text-gray-100">Магазины</p>
            <p class="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-all duration-700">
               У нас представлен широкий выбор сварочного оборудования и аксессуаров от известных и проверенных производителей, таких как Сварог, Ресанта, Telwin, Кедр, Huter и другие. У нас вы найдете самые привлекательные цены и прогрессивные системы скидок!<br /> Если Вы ищите инверторный аппарат, полуавтомат или аргоно-дуговую установку, то доверьтесь нам.
            </p>
            <!-- Предлагаем вам большой выбор расходных материалов для любых целей: омеднённая, порошковая проволока, электроды. Также, в нашем интернет-магазине вы можете приобрести сопутствующие товары: кабельные разъёмы, электроды, держатели или клеммы заземления, необходимые приспособления при проведении электросварочных работ и многое другое.  -->
          </div>
        </div>

        <div class=" my-40"></div>

        <div class="flex gap-8 items-center justify-between my-8 mx-4">
          <div class=" w-5/12">
            <p class="text-2xl my-2 text-gray-900 dark:text-gray-100">Сертификаты</p>
            <p class="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-all duration-700">
              Мы являемся официальным дистрибьютором ведущих брендов сварочного оборудования, и всегда готовы предложить вам широкий выбор продуктов, которые обеспечат вашу эффективную и качественную работу. Наши специалисты всегда готовы проконсультировать вас и помочь выбрать именно то, что вам нужно.
            </p>
          </div>
          <div class="flex items-center gap-4">
            <div class="">
              <img @click="cert = 'esab-cert.jpg'" src="esab-cert.jpg" class="rounded-sm cursor-zoom-in w-48" fluid/>
            </div>
            <div class="">
              <img @click="cert = 'cert-redius.jpg'" src="cert-redius.jpg" class="rounded-sm cursor-zoom-in w-48" fluid />
            </div>
            <div class="">
              <img @click="cert = 'cert-svarog.jpg'" src="cert-svarog.jpg" class="rounded-sm cursor-zoom-in w-48" fluid />
            </div>                
          </div>
        </div>

        <div class=" my-40"></div>

        <div class="flex items-center justify-center">
          <div class="text-center">
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
      }
    },
  }
</script>