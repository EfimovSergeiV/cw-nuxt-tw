<template>


  <div class="fixed  inset-0 bg-gray-600 bg-opacity-50 overflow-hidden h-full w-full" id="my-modal" >
    <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">


      <div class="mt-3 text-center">
        <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
          <svg
            class="h-6 w-6 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>
        <h3 class="text-lg leading-6 font-medium text-gray-900">Successful!</h3>
        <div class="mt-2 px-7 py-3">
          <p class="text-sm text-gray-500">
            Account has been successfully registered!
          </p>
        </div>
        <div class="items-center px-4 py-3">
          <button id="ok-btn" class="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300">
            OK
          </button>
        </div>
      </div>
    </div>

  </div>

  <!-- <div class="" aria-labelledby="modal-title" role="dialog" aria-modal="true">


    <div class="absolute inset-0 ">
      <div class="flex min-h-full justify-center p-4 text-center items-center">

        <div class="transform rounded-lg bg-gray-700 text-left shadow-xl transition-all sm:my-8 sm:max-w-4xl mx-4">
                  

          <div class="bg-white rounded-lg shadow dark:bg-gray-700">
            <div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Политика обработки персональных данных
                </h3>
                <button @click="hideRequestModal" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only"></span>
                </button>
            </div>



            <div class=" px-4 py-8 h-96 overflow-y-auto">
              <p>1. Общие положения</p>
              <p>1.1. Источники права и область применения</p>
              <p>Данная Политика конфиденциальности и защиты персональных данных на сайте www.glsvar.ru разработана и реализуется во исполнение Федерального закона «О персональных данных». Источники права: Федеральный закон от 27.07.2006 года №152-ФЗ «О персональных данных», Федеральный закон от 27.07.2006 №149-ФЗ «Об информации, информационных технологиях и о защите информации», Постановление Правительства РФ от 15.09.2008 №687 «Об утверждении Положения об особенностях обработки персональных данных, осуществляемой без использования средств автоматизации».</p>
              

              <p>1.2. Основные термины, понятия и сокращения</p>
              <p>Компания – сеть магазинов «Главный сварщик» (ИП Лыков В.А. ИНН 602716774291)</p>
              <p>Сайт — http://www.glsvar.ru</p>
              <p>Персональные данные - любая информация, прямо или косвенно относящаяся к физическому лицу (субъекту персональных данных). Субъект персональных данных – любое физическое лицо, посетившее Сайт Компании. Обработка персональных данных – это любое из перечисленных действий: сбор, запись, систематизация, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передача (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных, совершаемое с использованием средств автоматизации или без таких средств. Посетитель — физическое лицо, пришедшее на сайт http://www.glsvar.ru без цели размещения Заказа. Пользователь — физическое лицо, Посетитель Сайта, разместивший на Сайте Заказ на покупку сварочного оборудования и сопутствующих товаров, или зарегистрировавшийся на Сайте в Личном кабинете. Сварочное оборудования и сопутствующие товары – это сварочное и газосварочное оборудование, горелки, кабели, рукава, средства индивидуальной защиты, генераторы, расходные материалы (электроды, проволока, прутки, флюс), блоки охлаждения, тележки, ПДУ, комплекты дооснащения, химия для сварки и т.д. Заказ — должным образом оформленный запрос Пользователя на покупку Сварочного оборудования и сопутствующих товаров, выбранных на Сайте.</p>

              <p>1.2. Цель получения и содержание персональных данных</p>
              <p>Целью 1 получения Компанией персональных данных является оформление Пользователем Заказа на покупку Сварочного оборудования и сопутствующих товаров, информация о котором размещена на Сайте.</p>

              <p>Целью 2 получения персональных данных является предоставление Пользователю личного кабинета на Сайте Компании для адресной работы с ним по исполнению его Заказов.</p>

              <p>Содержание персональной информации продиктовано формой Заказа и профилем личного кабинета Посетителя на Сайте:</p>

              <p>* имя</p>
              <p>* - адрес электронной почты,</p>
              <p>* - номер телефона (в случае наличия вопросов или оформления Пользователем доставки купленного Сварочного оборудования и сопутствующих товаров)</p>
              <p>* адрес доставки (в случае оформления Пользователем доставки купленного Сварочного оборудования и сопутствующих товаров).</p>

              <p>2. Принципы предоставления и обработки персональных данных</p>
              <p>2.1. Принципы предоставления персональных данных</p>
              <p>Посетитель Сайта предоставляет только те персональные данные, которые необходимы ему для пользования Сайтом. Информация о Посетителях сайта (IP-адрес, имя домена, дата регистрации и т. п.) собирается и сохраняется в целях ведения статистики посещений. Эта информация является общедоступной и Компания не несет ответственности за ее разглашение. Пользователь на добровольной основе предоставляет свои персональные данные. Согласие Пользователя на обработку этого перечня персональных данных не требуется. Вместе с тем, на Сайте в момент оформления Заказа или при регистрации Пользователя в личном кабинете Пользователь ставит «галочку», что он ознакомлен с «Правилами сайта» на Сайте Компании и согласен предоставить свои персональные данные, необходимые для достижения целей их обработки (п.1.3. данной Политики). В любой момент Пользователь может отозвать свой Заказ, а так же удалить свои персональные данные из личного кабинета, отправив заявление по адресу: zakaz@glsvar.ru</p>

              <p>2.2. Принципы обработки персональных данных</p>
              <p>Обработка персональных данных осуществляется на основе принципов и правил, установленных в Федеральном законе № 152-ФЗ «О персональных данных» и иных источника права, указанных в п.1.1. данной Политики. Компания гарантирует обработку персональных данных Пользователя только для достижения целей, заявленных в п.1.3. настоящей Политики.</p>
              
              <p>2.3. Согласие субъекта персональных данных на их обработку</p> 
              <p>Согласия Пользователя на обработку тех персональных данных, которые он предоставляет Компании на Сайте для достижения целей их обработки, не требуется. Заполняя форму Заказа на Сайте или профиль своего личного кабинета, Пользователь добровольно предоставляет Компании свои персональные данные, необходимые для достижения целей, заявленных в п.1.3 настоящей Политики.</p>

              <p>У Пользователя запрашивается только та информация, которая необходима для исполнения Заказа на покупку Сварочного оборудования и сопутствующих товаров или идентификации Пользователя в личном кабинете. Пользователь понимает и соглашается с тем, что Компания не проверяет достоверность персональных данных, предоставленных Пользователем, не имеет возможности оценить дееспособность Пользователя и исходит из того, что Пользователь предоставляет достоверные персональные данные.</p>


              <p>3. Права и обязанности субъекта персональных данных</p>
              
              <p>3.1. Права Пользователя</p>
              <p>Пользователь имеет право добровольно предоставить Компании свои персональные данные для их обработки в объеме, необходимом для заполнения Заявки на покупку Сварочного оборудования и сопутствующих товаров или профиля в личном кабинете на Сайте.</p>
              <p>Пользователь имеет круглосуточный доступ к своим персональным данным через личный кабинет на Сайте.</p>
              <p>Пользователь имеет право в любое время актуализировать свои персональные данные, отказаться от Заказа, может удалить свой профиль в личном кабинете, отправив свое требование по адресу: zakaz@glsvar.ru. Персональные данные в исполненных Заказах на покупку Сварочного оборудования и сопутствующих товаров хранятся по срокам, применяемым к хранению бухгалтерских документов.</p>

              <p>3.2. Обязанности Пользователя</p>
              <p>Пользователь не несет каких-либо обязанностей перед Компанией, предоставив ей свои персональные данные.</p>


              <p>4. Права и обязанности Компании</p>

              <p>4.1. Права Компании</p>
              <p>Компания имеет право на обработку персональных данных Пользователей для исполнения целей, заявленных в п.1.3. настоящей Политики.</p>

              <p>4.2. Обязанности Компании</p>
              <p>Компания обязуется обеспечивать конфиденциальность обработки персональных данных своих Пользователей.</p>
              <p>Компания обязуется исполнять требования Пользователя по вопросам обработки его персональных данных в срок не позднее пяти рабочих дней, получив от него запрос или заявление по адресу: zakaz@glsvar.ru</p>
              <p>Компания обязуется не использовать персональных данных Пользователей для целей иных, чем те, которые заявлены в п.1.3. настоящей Политики.</p>

              <p>5. Заключительные положения</p>
              <p>Данная Политика принята для работы с Посетителями и Пользователями Сайта в правовом поле Российской Федерации. Она будет совершенствоваться, а ее текст - редактироваться - по мере поступления замечаний от Пользователей, предписаний от контролирующих органов и рекомендаций от аудиторских проверок.</p>

            </div>

            <div class="grid grid-cols-2 px-4 py-4 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">

            </div>
            
          </div>


        </div>
      </div>
    </div>
  </div> -->

</template>

<script>

  export default {
      name: 'privacyPolicy',
      components: {
    },
    props: {

    },
    data() {
      return {

      }
    },

    methods: {

      },
    }
</script>