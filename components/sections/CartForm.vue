<template>
  <section id="cart-form">
    <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">


      <div v-if="(cart.length > 0)" class="bg-white border-gray-200 border dark:border-gray-700 dark:bg-gray-800 rounded-sm p-1">

        <div class="overflow-x-auto w-full">
          <div class="">

            <div class="grid gap-2 px-2 py-4">
              <div class="flex lg:items-center lg:gap-2">
                <div class="flex justify-center w-24"><p class="text-sm">Изображение</p></div>
                <div class="flex justify-center w-1/2"><p class="text-sm">Наименование</p></div>
                <div class="flex justify-center w-32"><p class="text-sm">Количество</p></div>
                <div class="flex justify-center w-32"><p class="text-sm">Наличие</p></div>
                <div class="flex justify-center w-32"><p class="text-sm">Стоимость</p></div>
                <div class="flex justify-center w-20"><p class="text-sm">Удалить</p></div>
              </div>
            </div>

            <div class="grid gap-2 px-1">
              <transition-group tag="div" name="left-emergence">
                <div v-for="product in cart" :key="product.id" class="my-4">
                  <div class="flex items-center gap-2">
                    <div class="flex justify-center items-center w-24 bg-white rounded-sm">
                      <img :src="product.preview_image" class="rounded-sm w-20" />
                    </div>
                    <div class="flex justify-center w-1/2">
                      <p class="text-sm">{{ product.name }}</p>
                    </div>
                    <div class="flex justify-center w-32">
                      <button  @click="decProductToCart(product)" class="mdi mdi-minus cursor-pointer"></button>
                      <div class="mx-2"><p>{{ product.quantity }}</p></div>
                      <button @click="incProductToCart(product)" class="mdi mdi-plus cursor-pointer"></button>
                    </div>
                    <div class="flex justify-center w-32">
                      <p v-if="product.status === 'stock'" class="text-sm text-right font-medium text-gray-900 dark:text-gray-200">в наличии</p>
                      <p v-if="product.status === 'order'" class="text-sm text-right font-medium text-gray-900 dark:text-gray-200">под заказ</p>
                    </div>
                    <div class="flex justify-center w-32"><p class="text-sm">{{ product.only_price.toLocaleString() }} руб/шт</p></div>
                    <div class="flex justify-center w-20">
                      <button @click="delProductToCart(product)" class="mdi mdi-24px mdi-close cursor-pointer"></button>
                    </div>
                    
                  </div>
                  
                </div>
              </transition-group>
            </div>
          </div>
        </div>

        
        <div class="flex justify-between mt-6 mx-2">
          <div class="">
            <div class="flex gap-6">
              <!-- <div class="flex gap-2">
                <p>Всего товаров:</p>
                <p class="font-bold">4</p>
              </div> -->
              <div class="flex gap-2">
                <p>Итог:</p>
                <p class="text-2xl italic">{{ cartTotalPrice().toLocaleString() }} руб.</p>
              </div>
            </div>
          </div>
          <div>
            <button @click="cleanCart" class="text-xs">Очистить корзину</button>            
          </div>

        </div>

      </div>

      <div v-else class="flex justify-center my-10">

        <div class="flex items-center gap-8">
          <div class="grid gap-2 grid-cols-1">
            <div class="mx-4 text-center">
              <p class="text-xl">Ваша корзина пуста</p>
            </div>
            <div class="border-b border-gray-700 dark:border-gray-300"></div>
            <div class="mx-4 text-center">
              <nuxt-link :to="{ name: 'cts' }" class="text-sm hover:underline hover:text-gray-900 dark:hover:text-gray-100 ">Перейти в каталог</nuxt-link>
            </div>
          </div>
          <div>
            <p class="mdi mdi-close-outline mdi-36px"></p>
          </div>          
        </div>
        
      </div>


      <div class="mt-4">
        <div class="bg-white border-gray-200 border dark:border-gray-700 dark:bg-gray-800 p-4 rounded-sm">

          <div class="flex items-center justify-between">
            <div class="">
              1. Данные покупателя
            </div>
            <div class="flex justify-end gap-4">

              <ul class="grid gap-6 w-full md:grid-cols-2">
                <li>
                  <input type="radio" id="hosting-small" name="person" v-model="entity" value="false" class="hidden peer" required>
                  <label for="hosting-small" class="text-gray-700 dark:text-gray-300 peer-checked:text-gray-900 dark:peer-checked:text-gray-100 peer-checked:border-b-2 border-blue-500 select-none text-sm cursor-pointer inline-flex justify-between items-center px-2 py-1 w-full transition-all ease-in duration-75">                           
                    <div class="block">
                      <div class="w-full">Физическое лицо</div>
                    </div>
                  </label>
                </li>
                <li>
                  <input type="radio" id="hosting-big" name="person" v-model="entity" value="true" class="hidden peer">
                  <label for="hosting-big" class="text-gray-700 dark:text-gray-300 peer-checked:text-gray-900 dark:peer-checked:text-gray-100 peer-checked:border-b-2 border-blue-500 select-none text-sm cursor-pointer inline-flex justify-between items-center px-2 py-1 w-full transition-all ease-in duration-75">
                    <div class="block">
                      <div class="w-full">Юридическое лицо</div>
                    </div>
                  </label>
                </li>
              </ul>
            </div>
          </div>


          <div class="grid md:grid-cols-2 gap-4">

            <div class="">
              <label for="message" class="block mt-2 mb-1 text-xs font-medium text-gray-900 dark:text-gray-400">Имя (необязательно)</label>
              <div class="relative">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <p class="mdi mdi-account"></p>
                </div>
                <input :value="client.person" @change="clientPerson" type="text" id="person" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Иван Иванов">
              </div>
            </div>
            <div class="">
              <label for="message" class="block mt-2 mb-1 text-xs font-medium text-gray-900 dark:text-gray-400">Электронная почта (необязательно)</label>
              <div class="relative">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <p class="mdi mdi-email"></p>
                </div>
                <input :value="client.email" @change="clientPerson" type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@domen.com">
              </div>
              <!-- {{ emailState }} -->
            </div>
            <div class="">
              <label for="message" class="block mt-2 mb-1 text-xs font-medium text-gray-900 dark:text-gray-400">Номер телефона</label>
              <div class="relative">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <p class="mdi mdi-phone"></p>
                </div>
                <input :value="client.phone" @change="clientPerson" type="text" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+7 (987) 654 32 10">
              </div> 
              <!-- {{ phoneState }}                -->
            </div>

          </div>


        </div>
      </div>

      <div v-if="entity == 'true'" class="mt-4">
        <div class="bg-white border-gray-200 border dark:border-gray-700 dark:bg-gray-800 p-4 rounded-sm transition-all duration-300">
          <p class="">Дополнительные поля для юр.лиц:</p>
          <div class="grid md:grid-cols-3 gap-4">
            <CartField keyword="legaladress" placeholder="Россия, Москва, 117312, ул. Вавилова, д. 123" title="Юридический адрес" />
            <CartField keyword="company" placeholder="ООО Полное название компании" title="Полное наименование" />
            <CartField keyword="inn" placeholder="3664069397" title="ИНН" />
            <CartField keyword="kpp" placeholder="12356789" title="КПП" />
            <CartField keyword="okpo" placeholder="12345678" title="ОКПО (необязательно)" />
            <CartField keyword="bankname" placeholder="ПАО Сбербанк" title="Наименование банка" />
            <CartField keyword="currentacc" placeholder="12312123112341234567" title="Расчетный счет (необязательно)" />
            <CartField keyword="corresponding" placeholder="12312123112341234567" title="Корреспондентский счет (необязательно)" />
            <CartField keyword="bic" placeholder="123456789" title="БИК (необязательно)" />
          </div>
        </div>
      </div>
      

      <div class="mt-4">
        <div class="bg-white border-gray-200 border dark:border-gray-700 dark:bg-gray-800 p-4 rounded-sm">

          <div class="flex items-center justify-between">
            <div class="">
              2. Способ получения
            </div>
            <div class="flex justify-end gap-4">
              <ul class="flex justify-end items-center gap-4 w-full md:grid-cols-2">
                <li>
                  <input type="radio" id="pickup" name="delivery" v-model="delivery" value="false" class="hidden peer" required>
                  <label for="pickup" class="text-gray-700 dark:text-gray-300 peer-checked:text-gray-900 dark:peer-checked:text-gray-100 peer-checked:border-b-2 border-blue-500 select-none text-sm cursor-pointer inline-flex justify-between items-center px-2 py-1 w-full transition-all ease-in duration-75">                           
                    <div class="block">
                      <div class="w-full">Самовывоз из магазина</div>
                    </div>
                  </label>
                </li>
                <li>
                  <input disabled type="radio" id="delivery" name="delivery" v-model="delivery" value="true" class="hidden peer">
                  <label for="delivery" class="text-gray-700 dark:text-gray-300 peer-checked:text-gray-900 dark:peer-checked:text-gray-100 peer-checked:border-b-2 border-blue-500 select-none text-sm cursor-not-allowed inline-flex justify-between items-center px-2 py-1 w-full transition-all ease-in duration-75">
                    <div class="block">
                      <div class="w-full">Доставка ТК</div>
                    </div>
                  </label>
                </li>
              </ul>
            </div>

          </div>

          <div class="my-4">


          </div>

          <label for="countries" class="block mt-2 mb-1 text-xs font-medium text-gray-900 dark:text-gray-400">Выберите магазин</label>


          <div class="border dark:border-gray-600 rounded-sm bg-gray-50 dark:bg-gray-700">
            <div class="">
              <div class="grid lg:grid-cols-2 justify-items-stretch items-center ">
                <div class="mx-2 my-2">
                  <select v-model="selectedShop" id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option disabled value="null">Выберие магазин</option>
                    <option v-for="shop in shops" :key="shop.id" :value="shop">{{ shop.adress }}</option>
                  </select>                    
                </div>
                <div class="justify-self-center mx-2 my-2" v-if="selectedShop">
                  <div class="" v-if="selectedShop.phone">
                    <div class="flex items-center">
                      <div class="border-r">
                        <a class="text-2xl mx-2" :href="'tel:' + selectedShop.phone.replace(/[^+\d]/g, '')">{{ selectedShop.phone }}</a>
                      </div>
                      <div class="mx-2">
                        <p class="text-xs font-bold mt-1">{{ selectedShop.wday }}</p>
                        <p class="text-xs font-bold">{{ selectedShop.wend }}</p>   
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div class="" v-if="selectedShop">
              <iframe :src="selectedShop.google_maps" width="100%" height="250" class="rounded-sm" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>

          <label for="message" class="block mt-2 mb-1 text-xs font-medium text-gray-900 dark:text-gray-400">Комментарий к заказу (необязательно)</label>
          <textarea v-model="comment" id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Напишите что-нибудь..."></textarea>

          <div class="flex justify-end items-center my-4">
            <button @click="sendOrder" class="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-400 to-blue-800 group-hover:from-blue-400 group-hover:to-blue-800 hover:text-gray-100 dark:text-gray-300 hover:dark:text-gray-100 focus:ring-1 focus:outline-none focus:ring-cyan-200 dark:focus:ring-blue-700">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Сделать заказ
              </span>
            </button>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import CartField from '../CartField.vue';

  export default {
    name: 'CartForm',
    components: {
      CartField,
    },
    props: {
      cts: {
        type: Array,
        default: Array,
      },
      shops: {
        type: Array,
        default: Array,
      },
    },
    data() {
      return {
        entity: "false", /// Физ. или Юр. лицо
        selectedShop: null,
        comment: null, ///null,
        totalPrice: 0,
        delivery: false,
        // "delivery_adress":"this.deliverycity",
        // "delivery_summ":0,
      }
    },
    computed: {
    ...mapState({
      client: (state) => state.client,
      cart: (state) => state.modules.cart.products,
    }),
    phoneState() {
      const re = /^((8|\+7)[ \- ]?)?(\(?\d{3}\)?[ \- ]?)?[\d\- ]{7,10}$/
      if (this.client.phone) {
        return this.client.phone.search(re) !== -1
      } else {
        return false
      }
    },
    emailState() {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (this.client.email) {
        return this.client.email.search(re) !== -1
      } else if (this.payMethod === 'online') {
        return false
      } else {
        return true
      }
    },
  },
  methods: {
    ...mapActions({
      addToast: 'addToast',
      clientPerson: 'clientPerson',
      incProductToCart: 'modules/cart/incProductToCart',
      decProductToCart: 'modules/cart/decProductToCart',
      delProductToCart: 'modules/cart/delProductToCart',
      addProductToFav: 'modules/favorites/addProductToFav',
      delProductToFav: 'modules/favorites/delProductToFav',
      cleanCart: 'modules/cart/cleanCart',
    }),
    // cookiesStorage() {
    //   this.counter += 1
    //   this.$storage.setCookie("clientName", "IvanovIvanIvanovich")
    //   this.client =  this.$storage.getCookie("clientName")
    //   console.log(client)
    // },
    cartTotalPrice() {
      let result = 0
      this.cart.forEach(
        (ell) =>
          (result += ell.only_price * ell.quantity)
      )
      this.totalPrice = Math.ceil(result)
      return Math.ceil(result)
    },
    phoneState() {
      const re = /^((8|\+7)[ \- ]?)?(\(?\d{3}\)?[ \- ]?)?[\d\- ]{7,10}$/
      if (this.client.phone) {
        return this.client.phone.search(re) !== -1
      } else {
        return false
      }
    },
    emailState() {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (this.client.email) {
        return this.client.email.search(re) !== -1
      } else if (this.payMethod === 'online') {
        return false
      } else {
        return true
      }
    },
    sendOrder() {
      if (this.selectedShop) {
        const data = {
          shop_id: this.selectedShop.id,
          region_code: this.selectedShop.region_code,
          person: this.client.person,
          phone: this.client.phone,
          email: this.client.email,
          comment: this.comment,
          delivery: this.delivery,
          // "delivery_adress":"this.deliverycity",
          // "delivery_summ":0,        
          adress: this.selectedShop.adress,
          total: this.totalPrice,

          company: this.client.company,
          legaladress: this.client.legaladress,
          inn: this.client.inn,
          kpp: this.client.kpp,
          okpo: this.client.okpo,
          bankname: this.client.bankname,
          currentacc: this.client.currentacc,
          corresponding: this.client.corresponding,
          bic: this.client.bic,

          client_product: this.cart,
        }

        if ( data.phone || data.email ) {
          this.$axios.$post('o/order/', data)
          this.cleanCart()
          this.$router.push({
            name: 'person',
          })

        } else {
          this.addToast("Введите номер телефона или адрес электронной почты")
        }

      } else {
        this.addToast("Выберите адрес магазина")
      }



      
    },
    
    // sendOrder() {
    //   this.$axios.$post('o/order/', {
    //     region_code: this.shop.region_code,
    //     shop_id: this.shop.shop_id,

    //     person: this.client.person,
    //     phone: this.client.phone,
    //     email: this.client.email,
    //     adress: this.shop.adress,
    //     comment: this.client.comment,
    //     total: this.totalPrice,
    //     delivery: this.delivery,
    //     delivery_adress: 'this.deliverycity',
    //     delivery_summ: this.deliverysumm,
    //     company: this.client.company,
    //     legaladress: this.client.legaladress,
    //     inn: this.client.inn,
    //     kpp: this.client.kpp,
    //     okpo: this.client.okpo,
    //     bankname: this.client.bankname,
    //     currentacc: this.client.currentacc,
    //     corresponding: this.client.corresponding,
    //     bic: this.client.bic,
    //     client_product: this.cart,
    //   }).then((response) => {
    //     if (this.payMethod === 'online') {
    //       this.$router.push({
    //         name: 'payment',
    //         query: { order: response.order },
    //       })
    //     } else {
    //       this.$router.push({
    //         name: 'success',
    //         params: { order: response.order },
    //       })
    //     }
    //   }).catch(() => {
    //     this.$bvToast.toast('Проверьте правильность заполнения формы', {
    //       title: 'Заказ не принят',
    //       variant: 'danger',
    //     })
    //   })
    // }
  }
}
</script>


<!-- 

{
  "region_code":"PSK",
  "shop_id":6,
  "person":"Сергей Ефимов",
  "phone":"89116965424",
  "email":"my-mail@mail.ru",
  "adress":"Псков, ул.Леона Поземского, 92, Павильон 28 (рынок на Алмазной)",
  "comment":"Комментарий к заказу",
  "total":311639,
  "delivery":false,
  "delivery_adress":"this.deliverycity",
  "delivery_summ":0,
  "company":null,
  "legaladress":null,
  "inn":null,
  "kpp":null,
  "okpo":null,
  "bankname":null,
  "currentacc":null,
  "corresponding":null,
  "bic":null,
  "client_product":[{"id":806,"vcode":"0700300985","name":"Сварочный инвертор Rebel™ EMP 215ic","rating":"3.9","prod_price":[{"shop":1,"price":311639,"currency":"RUB","quantity":0,"status":"order"},{"shop":6,"price":311639,"currency":"RUB","quantity":0,"status":"order"},{"shop":10,"price":311639,"currency":"RUB","quantity":0,"status":"order"},{"shop":11,"price":311639,"currency":"RUB","quantity":0,"status":"order"},{"shop":2,"price":311639,"currency":"RUB","quantity":0,"status":"order"},{"shop":3,"price":311639,"currency":"RUB","quantity":0,"status":"order"},{"shop":4,"price":311639,"currency":"RUB","quantity":0,"status":"order"},{"shop":5,"price":311639,"currency":"RUB","quantity":0,"status":"order"},{"shop":9,"price":311639,"currency":"RUB","quantity":0,"status":"order"}],"preview_image":"http://127.0.0.1:8000/files/img/c/preview/215ic.png","propstrmodel":[{"id":4539,"name":"Дополнительные режимы работы","qname":"1jwq","value":"MMA/TIG"},{"id":4543,"name":"Габаритные размеры, мм","qname":"3b0e","value":"584x229x406"},{"id":4545,"name":"Вес, кг","qname":"7z26","value":"18,2"},{"id":4542,"name":"Потребляемый ток, А","qname":"b869","value":"240"},{"id":4541,"name":"Максимальный сварочный ток, А","qname":"jnzs","value":"130"},{"id":4540,"name":"Основной режим работы","qname":"pa0s","value":"MIG/MAG"},{"id":4544,"name":"Электропитание, В","qname":"s7n4","value":"однофазная сеть 220 В 50 Гц"}],"quantity":1}]
}

 -->