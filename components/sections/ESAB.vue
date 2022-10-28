<template>
  <section id="" class="mt-4">

    <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">

      <div class="my-4 p-2 bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 shadow-sm text-center">
        <p class="text-lg md:text-xl text-gray-700 dark:text-gray-300">{{ title }}</p>
      </div>

      <div class="grid md:grid-cols-2 gap-4">
        <div class="border dark:border-gray-700 rounded-sm">
          <div class="absolute px-2 z-10">
            <div class="flex items-center">
              <img src="https://api.glsvar.ru/files/img/c/brand/esab_8CnTsO3.png" width="60" />
              <p class="text-[15px] hidden lg:block shadow-sm text-yellow-450 uppercase">Являемся официальным дистрибьютером</p>              
            </div>
          </div>
          <img 
            class="rounded-sm"
            src="http://127.0.0.1:8000/files/c/esab-banner-one.jpg" 
          />
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
        title: "Мы являемся официальным дистрибьютором-партнером и официальным авторизованным сервисным центром концерна ESAB",
        text: "Бренд ESAB - синоним передового опыта в таких областях как: оборудование для ручной сварки и резки, сварочные материалы, автоматизированная сварка, механические системы резки. В каждой из этих сфер ESAB использует постоянно совершенствуемые методы, материалы и ноу-хау, чтобы в полной мере удовлетворить потребности всех секторов промышленности. Компания ESAB разрабатывает высокопроизводительные решения, которые отвечают требованиям заказчиков",
      }
    },
  }
  </script>