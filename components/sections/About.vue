<template>
  <section if="about">
    <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">





      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 shadow-md">
          
          <div class="flex justify-center items-center h-full">
          <div class="grid grid-cols-1 gap-1 text-blue-600 dark:text-yellow-300">
            <div class="px-2 py-2">
              <div class=" text-xl flex gap-1">Магазин "<div class="font-bold ">Главный сварщик</div>"</div>
            </div>
            <div class="">
              <div class="px-2 flex gap-4 items-center">
                <p class=" mdi mdi-36px mdi-minus"></p>
                <p class="text-sm uppercase">
                  гарантирует хорошее качество продукции и профессиональную консультацию по любым вопросам
                </p>
              </div>
            </div>
            <div class="">
              <div class="px-2 flex gap-4 items-center">
                <p class=" mdi mdi-36px mdi-minus"></p>
                <p class="text-sm uppercase">
                  поможет вам сделать выбор среди огромного ассортимента аппаратов для сварки.
                </p>
              </div>
            </div>
            <div class="">
              <div class="px-2 flex gap-4 items-center">
                <p class=" mdi mdi-36px mdi-minus"></p>
                <p class="text-sm uppercase">
                  подскажет как приобрести высококачественное сварочное оборудование.
                </p>
              </div>
            </div>
          </div>
          </div>


        </div>
        <div class="flex gap-4 items-center justify-center h-full">

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


      <div class="bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 my-4 shadow-md relative">
        <div class="px-2 py-4">
          <div class="">

            <div class="my-8 text-center">
              <p class="text-sm md:text-xl">Наш магазин
                <span class="text-xs md:text-base">
                  предлогает Вам большой выбор расходных материалов для любых целей: омеднённая, порошковая проволока, электроды. Также, в нашем интернет-магазине вы можете приобрести сопутствующие товары: кабельные разъёмы, электроды, держатели или клеммы заземления, необходимые приспособления при проведении электросварочных работ и многое другое.
                  У нас представлен широкий выбор сварочного оборудования и аксессуаров от известных и проверенных производителей, таких как Сварог, Ресанта, Telwin, Кедр, Huter и другие. У нас вы найдете самые привлекательные цены и прогрессивные системы скидок! Если Вы ищите инверторный аппарат, полуавтомат или аргоно-дуговую установку, то доверьтесь нам.
                </span>    
              </p>               
            </div>

            <div class="p-2 my-8">
              <p class="text-base text-center">
                Если вы не нашли то, что Вам нужно - свяжитесь с нами и мы найдем этот товар специально для Вас!<br />Покупайте современное сварочное оборудование у нас и помните, качественное оборудование - залог успешной работы!
              </p>
            </div>


            <div class="flex justify-center items-center my-4">
              <div class="">
                <nuxt-link to="/">
                  <img src="../../assets/images/blue-svar.png" alt="glsvar-logo" width="380" />
                </nuxt-link>
              </div>
            </div>

          </div>
        </div>
      </div>




     
    </div>

  </section>
</template>

<script>    
  export default {
      name: 'About',
      components: {
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