<!-- Please remove this file from your project -->
<template>
  <div class="">

    <div class="visible hover:invisible bg-gray-50">
      <p>Hallo welt</p>
    </div>
  </div>
</template>

<script>
// import tailwindConfig from '#tailwind-config'
// import { theme } from '#tailwind-config'
export default {
  name: 'NuxtTutorial'
}
</script>

<style lang="postcss">
  .test {
    color: rgb(40, 176, 218);
    @apply p-4;
  
    &_working {
      @apply text-green-500;
    }
  
    &_gray {
      color: gray(50);
    }
  }
  </style>