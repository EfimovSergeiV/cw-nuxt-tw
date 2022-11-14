<template>
    <div class="">
      <div class="mx-auto py-2 px-4 lg:max-w-7xl lg:px-8">
  
        <div class="grid grid-cols-1 gap-y-4 gap-x-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">

          <p>This is Order</p>
        
        </div>
  
      </div>
    </div>
  </template>
  
  <script>
    
    export default {
      name: 'OrderSection',
      components: {

  },
      props: {
        order: {
          type: Array,
          default: Array,
        },
      },
      data() {
        return {
          dataset: true,
        }
      },
    }
  </script>