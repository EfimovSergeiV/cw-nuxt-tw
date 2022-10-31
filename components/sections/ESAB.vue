<template>
  <section id="" class="mt-4">

    <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">

      <!-- <div class="my-4 p-2 bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 shadow-sm text-center">
        <p class="text-lg md:text-xl text-gray-700 dark:text-gray-300">{{ title }}</p>
      </div> -->

      <div class="grid md:grid-cols-2 gap-4">
        <div class="border dark:border-gray-700 rounded-sm">

          <div class="relative">
            <img 
                class="rounded-sm"
                src="http://127.0.0.1:8000/files/c/esab-banner-one.jpg" 
              />  
            <div class="absolute bottom-0 left-0 top-0">
              <div class="">
                <div class="flex items-center bg-gray-800/80">
                  <div class="p-1">
                    <img src="https://api.glsvar.ru/files/img/c/brand/esab_8CnTsO3.png" width="140" />
                  </div>
                  <div class="p-1 text-gray-300">
                    <p>{{ title }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        
        <div class="border dark:border-gray-700 rounded-sm">
          <img 
            class="rounded-sm"
            src="http://127.0.0.1:8000/files/c/handy-esab.jpg"
          />
        </div>
      </div>


      <div class="flex items-center my-4 p-1 bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 shadow-sm">
        <div class="hidden md:block flex-none">
          <img
            src="esab-logo.jpg"
            width="220px"
          />
        </div>
        <div class=" md:p-4">
          <div class="">
            <!-- <p class="text-sm lg:text-base text-gray-900 dark:text-gray-200 font-medium">{{ text }}</p> -->
            <p class="bg-clip-text text-gray-700 dark:text-gray-300">
            {{ text }}
            </p>
          </div>
        </div>
      </div>


    </div>

  </section>
</template>

<script>
  export default {
    name: 'ESABSection',
    components: {
      // Hooper,
    },
    props: {
      esab: {
        type: Object,
        default: Object,
      },
    },
    data() {
      return {
        dataset: true,
        title: "Главный Сварщик - официальный дистрибьютор-партнер и авторизованный сервисный центр концерна ESAB",
        text: "Бренд ESAB - синоним передового опыта в таких областях как: оборудование для ручной сварки и резки, сварочные материалы, автоматизированная сварка, механические системы резки. В каждой из этих сфер ESAB использует постоянно совершенствуемые методы, материалы и ноу-хау, чтобы в полной мере удовлетворить потребности всех секторов промышленности. Компания ESAB разрабатывает высокопроизводительные решения, которые отвечают требованиям заказчиков",
      }
    },
  }
  </script>