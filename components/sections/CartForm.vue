<template>
  <section id="cart-form">
    <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">


      <div v-if="(cart.length > 0)" class="bg-white border-gray-200 border dark:border-gray-700 dark:bg-gray-800 rounded-sm p-1">

        <div class="overflow-x-auto w-full">
          <div class="">

            <div class="grid gap-2 px-2 py-4">
              <div class="flex">
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
                    <div class="flex justify-center w-32"><p class="text-sm">В наличии</p></div>
                    <div class="flex justify-center w-32"><p class="text-sm">{{ product.prod_price.toLocaleString() }} руб/шт</p></div>
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
                <p class="font-bold">{{ cartTotalPrice() }} руб.</p>
              </div>
            </div>
          </div>
          <div>
            <button @click="cleanCart" class="text-xs">Очистить корзину</button>            
          </div>

        </div>

      </div>

      <div v-else class="">
        <p>Ваша корзина пуста</p>
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
                      <div class="w-full"> Физическое лицо</div>
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
                <input type="text" id="email-address-icon" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Иван Иванов">
              </div>                
            </div>
            <div class="">
              <label for="message" class="block mt-2 mb-1 text-xs font-medium text-gray-900 dark:text-gray-400">Электронная почта (необязательно)</label>
              <div class="relative">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <p class="mdi mdi-email"></p>
                </div>
                <input type="text" id="email-address-icon" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@domen.com">
              </div>                
            </div>
            <div class="">
              <label for="message" class="block mt-2 mb-1 text-xs font-medium text-gray-900 dark:text-gray-400">Номер телефона</label>
              <div class="relative">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <p class="mdi mdi-phone"></p>
                </div>
                <input type="text" id="email-address-icon" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+7 (987) 654 32 10">
              </div>                
            </div>

          </div>


        </div>
      </div>

      <div v-if="entity == 'true'" class="mt-4">
        <div class="bg-white border-gray-200 border dark:border-gray-700 dark:bg-gray-800 p-4 rounded-sm transition-all duration-300">
          <p class="">Дополнительные поля для юр.лиц:</p>
          <div class="grid md:grid-cols-3 gap-4">
            <CartField v-model="legaladress" placeholder="Россия, Москва, 117312, ул. Вавилова, д. 123" title="Юридический адрес" />
            <CartField v-model="company" placeholder="ООО Полное название компании" title="Полное наименование" />
            <CartField v-model="inn" placeholder="Россия, Москва, 117312, ул. Вавилова, д. 123" title="ИНН" />
            <CartField v-model="legaladress" placeholder="1234567890" title="Юридический адрес" />
            <CartField v-model="kpp" placeholder="12356789" title="КПП" />
            <CartField v-model="okpo" placeholder="12345678" title="ОКПО (необязательно)" />
            <CartField v-model="bankname" placeholder="ПАО Сбербанк" title="Наименование банка" />
            <CartField v-model="currentacc" placeholder="12312123112341234567" title="Расчетный счет (необязательно)" />
            <CartField v-model="corresponding" placeholder="12312123112341234567" title="Корреспондентский счет (необязательно)" />
            <CartField v-model="bic" placeholder="123456789" title="БИК (необязательно)" />
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
          <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Напишите что-нибудь..."></textarea>

          <div class="flex justify-end items-center my-4">
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-400 to-blue-800 group-hover:from-blue-400 group-hover:to-blue-800 hover:text-gray-100 dark:text-gray-300 hover:dark:text-gray-100 focus:ring-1 focus:outline-none focus:ring-cyan-200 dark:focus:ring-blue-700">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Сделать заказ
              </span>
            </button>              
          </div>

          <!-- <div class="">
            <p class="text-xs">{{ JSON.stringify($storage.state) }}</p>
          </div> -->

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import CartModal from '../CartModal.vue';
import CartField from '../CartField.vue'

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
        selectedShop: null,
        entity: "false",
        re_token: null,

        totalPrice: 0,
        selface: 'individual', /// Физ. или Юр. лицо
        delivery: false,
        deliverymethods: [
          { text: 'Самовывоз', value: false },
          { text: 'Доставка', value: true },
        ],
        faceopts: [
          { text: 'Физическое лицо', value: 'individual' },
          { text: 'Юридическое лицо', value: 'entity' },
        ],
        payMethod: 'cash',
        payMethods: [
          { value: 'cash', text: 'Оплатить в магазине' },
          {
            value: 'online',
            text: 'Оплатить онлайн',
            disabled: false,
          },
          { value: 'cashless', text: 'Безналичный расчёт ( Для юр. лиц )' },
        ],
        selected: 'radio1',
        options: [
          { text: 'Самовывоз', value: 'radio1' },
          { text: 'Radio 3', value: 'radio2' },
        ],
      }
    },
    computed: {
    ...mapState({
      cart: (state) => state.modules.cart.products,
    }),
  },
  methods: {
    ...mapActions({
      incProductToCart: 'modules/cart/incProductToCart',
      decProductToCart: 'modules/cart/decProductToCart',
      delProductToCart: 'modules/cart/delProductToCart',
      addProductToFav: 'modules/favorites/addProductToFav',
      delProductToFav: 'modules/favorites/delProductToFav',
      cleanCart: 'modules/cart/cleanCart',
    }),
    cartTotalPrice() {
      let result = 0
      this.cart.forEach(
        (ell) =>
          (result += ell.prod_price * ell.quantity)
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
      this.$axios.$post('o/order/', {
        region_code: this.shop.region_code,
        shop_id: this.shop.shop_id,
        person: this.client.person,
        phone: this.client.phone,
        email: this.client.email,
        adress: this.shop.adress,
        comment: this.client.comment,
        total: this.totalPrice,
        delivery: this.delivery,
        delivery_adress: 'this.deliverycity',
        delivery_summ: this.deliverysumm,
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
      }).then((response) => {
        if (this.payMethod === 'online') {
          this.$router.push({
            name: 'payment',
            query: { order: response.order },
          })
        } else {
          this.$router.push({
            name: 'success',
            params: { order: response.order },
          })
        }
      }).catch(() => {
        this.$bvToast.toast('Проверьте правильность заполнения формы', {
          title: 'Заказ не принят',
          variant: 'danger',
        })
      })
    }
  }
}
</script>