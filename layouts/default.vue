<template>
  <div class="bg-gray-100 bg-gradient-to-r dark:from-gray-900 dark:to-gray-800 dark:text-gray-200">
    <div class="container mx-auto">
      
      <transition name="fade" mode="out-in">
        <Nuxt class="" />
      </transition>

    </div>
  </div>
</template>
  
<script>
  export default {
    head: {
      title: "Nuxt.js with TailwindCSS",
      meta: [
          { charset: "utf-8" },
          { name: "viewport", content: "width=device-width, initial-scale=1" },
          {
              hid: "description",
              name: "description",
              content: "Nuxt.js with TailwindCSS example",
          },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },  
  };
</script>