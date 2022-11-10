<template>
  <section if="about">
    <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">

      <div class="bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 my-4 shadow-md">
        <div class="p-2">
          <p class="text-sm">
            Главный Сварщик - предлогает Вам большой выбор расходных материалов для любых целей: омеднённая, порошковая проволока, электроды. Также, в нашем интернет-магазине вы можете приобрести сопутствующие товары: кабельные разъёмы, электроды, держатели или клеммы заземления, необходимые приспособления при проведении электросварочных работ и многое другое.
            У нас представлен широкий выбор сварочного оборудования и аксессуаров от известных и проверенных производителей, таких как Сварог, Ресанта, Telwin, Кедр, Huter и другие. У нас вы найдете самые привлекательные цены и прогрессивные системы скидок! Если Вы ищите инверторный аппарат, полуавтомат или аргоно-дуговую установку, то доверьтесь нам.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 shadow-md">
          <div class="p-2">
            <p class="text-base">ГАРАНТИРУЕМ:</p>
            <p class="text-sm">
              хорошее качество продукции и профессиональную консультацию по любым вопросам
            </p>
          </div>
        </div>
        <div class="bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 shadow-md">
          <div class="p-2">
            <p class="text-base">ПОМОЖЕМ:</p>
            <p class="text-sm">
              Вам сделать выбор среди огромного ассортимента аппаратов для сварки.
            </p>
          </div>
        </div>
        <div class="bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 shadow-md">
          <div class="p-2">
            <p class="text-base">ПОДСКАЖЕМ:</p>
            <p class="text-sm">
              Вам, как приобрести высококачественное сварочное оборудование.
            </p>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 mt-4 shadow-md">
        <div class="p-2">
          <p class="text-sm">
            Если вы не нашли то, что Вам нужно - свяжитесь с нами и мы найдем этот товар специально для Вас! Покупайте современное сварочное оборудование у нас и помните, качественное оборудование - залог успешной работы!
          </p>
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
        
      }
    },
  }
</script>