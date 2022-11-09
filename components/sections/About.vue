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



      <div class="grid grid-cols-3 gap-4">

        <div class="" v-for="shop in shops" :key="shop.id">

          <div class="bg-white rounded-sm dark:bg-gray-800 my-4 shadow-md h-full cursor-pointer border border-gray-200 hover:border-gray-300 dark:border-gray-700 dark:hover:border-gray-600 text-gray-700 hover:text-gray-900 dark:text-gray-300 hover:dark:text-gray-100">
            <div class="p-2">
              <div class="my-2">
                <p class="text-sm">{{ shop.adress }} {{ shop.phone }}</p>
                <p class="text-sm">{{ shop.wday }}</p>
                <p class="text-sm">{{ shop.wend }}</p>
              </div>
            </div>

          </div>

        </div>
      </div>



      <div class="my-6">
        <p class="text-sm">{{ selectedShop }}</p>
      </div>      

      <div class="bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 my-4 shadow-md">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2243.382719350403!2d37.7236171!3d55.78659199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b53513be0c534f%3A0x4355017195642777!2z0KLQutCw0YbQutCw0Y8g0YPQuy4sIDXRgTE2LCDQnNC-0YHQutCy0LAsIDEwNTMxOA!5e0!3m2!1sru!2sru!4v1667996030653!5m2!1sru!2sru" 
          width="100%" 
          height="350" 
          style="border:0;" 
          allowfullscreen="" 
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
      <!-- <div class="mt-4">
        <p class="text-xs"> {{ shops }} </p>
      </div> -->
      
     
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
        selectedShop: {}
      }
    },
  }
</script>