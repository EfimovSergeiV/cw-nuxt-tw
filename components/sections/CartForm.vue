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

        
        <div class="flex justify-between my-4 mx-2">
          <div>
            <button @click="cleanCart" class="text-xs text-gray-800 dark:text-gray-400">очистить корзину</button>            
          </div>          
          <div class="">
            <div class="flex gap-6">
              <!-- <div class="flex gap-2">
                <p>Всего товаров:</p>
                <p class="font-bold">4</p>
              </div> -->
              <div class="flex gap-8">
                <p class="text-sm">Итог заказа:</p>
                <p class="text-2xl">{{ cartTotalPrice().toLocaleString() }} руб.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-end">
          <div class="px-2 flex items-start gap-4 py-2">
            <div class="">
              <p v-if="true" class="text-sm font-medium text-gray-900 dark:text-gray-400">Есть наш промокод?</p>
              
              <div v-else class="">
                <div v-if="false" class="">
                  <p class="text-sm font-medium text-gray-900 dark:text-gray-400">Промокод не актуален</p>
                </div>
                <div v-else class="">
                  <p class="text-sm font-medium text-gray-900 dark:text-gray-400">Ваша скидка {{ promocode }} {{ '10%' }}</p>
                </div>
              </div>
              
            </div>
            <div class="px-2">
              <div class="flex">
                <div class="relative">
                  <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <p class="mdi mdi-sale"></p>
                  </div>
                  <input v-model="promocode" type="text" id="person" class="bg-gray-50 border border-gray-300 text-gray-900 text-xs focus:ring-blue-500/0 focus:border-blue-500/0 block  pl-10 px-0.5 py-1 dark:bg-gray-700 dark:border-gray-600/0 dark:placeholder-gray-400 dark:text-gray-300 dark:focus:ring-blue-500/0 dark:focus:border-blue-500/0" placeholder="ввести промокод">
                </div>
                <button @click="checkPromocode()" class="bg-gray-50 border border-gray-300 text-gray-900 text-xs focus:ring-blue-500/0 focus:border-blue-500/0 block px-1 py-1 dark:bg-gray-700 dark:border-gray-600/0 dark:placeholder-gray-400 dark:text-gray-300 dark:focus:ring-blue-500/0 dark:focus:border-blue-500/0">
                  применить
                </button>
              </div>          
            </div>
          </div>          
        </div>
      </div>



      <div v-else class="bg-white border-gray-200 border dark:border-gray-700 dark:bg-gray-800 p-4 rounded-sm">

        <div class="flex justify-center my-10">

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

      </div>








      <div class="mt-4">
        <div class="bg-white border-gray-200 border dark:border-gray-700 dark:bg-gray-800 p-4 rounded-sm">

          <div class="flex items-center justify-between pb-4">
            <div class="">
              <p class=" text-sm">Оформление заказа</p>
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


          <div class="grid grid-cols-1 md:grid-cols-2 items-end gap-4">


            <div class="grid grid-cols-1 items-end gap-4">
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
              </div>
              <div class="">
                <label for="message" class="block mt-2 mb-1 text-xs font-medium text-gray-900 dark:text-gray-400">Номер телефона</label>
                <div class="relative">
                  <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <p class="mdi mdi-phone"></p>
                  </div>
                  <input :value="client.phone" @change="clientPerson" type="text" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+7 (987) 654 32 10">
                </div> 
              </div>
            </div>




            <div class="grid grid-cols-1 items-end gap-4">
              <div class="">
                <div class="">
                  <select v-model="selectedShop" id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option disabled value="null">Выберие магазин</option>
                    <option v-for="shop in shops" :key="shop.id" :value="shop">{{ shop.adress }}</option>
                  </select>                    
                </div>
              </div>
              <div class="">
                <label for="message" class="block mt-2 mb-1 text-xs font-medium text-gray-900 dark:text-gray-400">Комментарий к заказу (необязательно)</label>
                <textarea v-model="comment" id="message" rows="4" class="min-h-[128px] block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Напишите что-нибудь..."></textarea>
              </div>
            </div>
          </div>

          <div class="flex justify-end items-center mt-4">
            <button @click="sendOrder" class="">
              <div class=" text-sm text-gray-100 rounded-lg bg-blue-600 hover:bg-blue-700 border border-gray-300/50 dark:border-gray-500/50 transition-all duration-1000">
                <div class=" bg-gradient-to-br from-gray-100/20 to-gray-900/40 rounded-lg">
                  <p class="text-white text-base w-52 py-1.5">Сделать заказ</p>
                </div>
              </div>
            </button>
          </div>


        </div>
      </div>

      <div v-if="entity == 'true'" class="mt-4">
        <div class="bg-white border-gray-200 border dark:border-gray-700 dark:bg-gray-800 p-4 rounded-sm transition-all duration-300">
          <p class="text-sm">Дополнительные поля для юр.лиц:</p>
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
        <div v-if="selectedShop" class="bg-white border-gray-200 border dark:border-gray-700 dark:bg-gray-800 rounded-sm">

          <div class="">
            <div class="">
              <div class="grid grid-cols-1 items-center ">
                <div class=" mx-2 my-4">
                  <div class="" v-if="selectedShop.phone">
                    <div class="flex items-center">
                      <div class="border-r">
                        <a class="text-base md:text-2xl mx-2" :href="'tel:' + selectedShop.phone.replace(/[^+\d]/g, '')">{{ selectedShop.phone }}</a>
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
              <iframe :src="selectedShop.google_maps" width="100%" height="320" class="rounded-sm" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
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
        promocode: null,
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
      saveOrder: 'modules/cart/saveOrder',
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
    // phoneState() {
    //   const re = /^((8|\+7)[ \- ]?)?(\(?\d{3}\)?[ \- ]?)?[\d\- ]{7,10}$/
    //   if (this.client.phone) {
    //     return this.client.phone.search(re) !== -1
    //   } else {
    //     return false
    //   }
    // },
    // emailState() {
    //   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    //   if (this.client.email) {
    //     return this.client.email.search(re) !== -1
    //   } else if (this.payMethod === 'online') {
    //     return false
    //   } else {
    //     return true
    //   }
    // },
    checkPromocode() {
      console.log(this.promocode)
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
          this.$axios.$post('o/order/', data).then((response) => {

            this.$axios.$get(`o/orderinfo/${response.order}/`).then((resp) => {
              this.saveOrder(resp)
            })
            
            this.addToast('Ваш заказ успешно принят. Мы свяжемся с вами в ближайшее время.')
            this.cleanCart()
            this.$router.push({name: 'person',})            
          }).catch(() => {
            this.addToast('Ошибка при обработке заказа, пожайлуста свяжитесь с нами по адресу zakaz@glsvar.ru')
          })
        } else {
          this.addToast("Введите номер телефона или адрес электронной почты")
        }

      } else {
        this.addToast("Выберите адрес магазина")
      }
    },
  }
}
</script>
