<template>
  <section id="" class="mt-4">

    <div class="mx-auto py-2 px-4 lg:max-w-7xl lg:px-8">

      
      <div class="grid md:grid-cols-2 gap-4">
        <div>
          <img 
            src="http://127.0.0.1:8000/files/c/esab-banner-one.jpg" 
          />
        </div>
        <div class="">
          <img 
            src="http://127.0.0.1:8000/files/c/handy-esab.jpg"
          />
        </div>
      </div>



      <div class="flex items-center">

        <div class="hidden md:block flex-none">
          <img
            src="esab-logo.jpg"
            width="220px"
          />
        </div>

        <div class="flex-initial p-4">
          <div class="">
            <p class="text-2xl">Мы являемся официальным дистрибьютором-партнером концерна ESAB и официальным Авторизованным Сервисным Центром концерна ESAB</p>
          </div>
          <div class="">
            <p class="text-sm">Бренд ESAB - синоним передового опыта в таких областях как: оборудование для ручной сварки и резки, сварочные материалы, автоматизированная сварка, механические системы резки. В каждой из этих сфер ESAB использует постоянно совершенствуемые методы, материалы и ноу-хау, чтобы в полной мере удовлетворить потребности всех секторов промышленности. Компания ESAB разрабатывает высокопроизводительные решения, которые отвечают требованиям заказчиков</p>
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
      }
    },
  }
  </script>