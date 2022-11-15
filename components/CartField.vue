<template>

  <div class="">
    <label for="message" class="block mt-2 mb-1 text-xs font-medium text-gray-900 dark:text-gray-400">{{ title }}:</label>
    <div class="relative">
      <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <p :class="icon"></p>
      </div>
      <input type="text" id="email-address-icon" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500" :placeholder="placeholder">
    </div>                
  </div>

</template>

<script>


  export default {
    name: 'CartField',
    components: {

    },
    props: {
      title: {
        type: String,
        default: 'Title',
      },
      placeholder: {
        type: String,
        default: 'Placeholder',
      },
      icon: {
        type: String,
        default: 'mdi mdi-lead-pencil',
      },
    },
    data() {
      return {

      }
    },
  }
</script>