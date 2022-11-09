<template>
  <div class="bg-gray-100 bg-gradient-to-r dark:from-gray-900 dark:to-gray-800 text-gray-700 dark:text-gray-300 footer-bg">
    
    <div class="bg-fixed bg-no-repeat bg-right-bottom bg-cover bg-[url('images/footer-bg.png')] dark:bg-[url('images/footer-dark-bg.png')]">
      <!-- bg-cover -->
      <div class="container mx-auto">
        
        <transition name="fade" mode="out-in">
          <Nuxt />
        </transition>

      </div>      
    </div>

  </div>

</template>
  
<script>
  export default {
    // head: {
    //   title: "Nuxt.js with TailwindCSS",
    //   meta: [
    //       { charset: "utf-8" },
    //       { name: "viewport", content: "width=device-width, initial-scale=1" },
    //       {
    //           hid: "description",
    //           name: "description",
    //           content: "Nuxt.js with TailwindCSS example",
    //       },
    //   ],
    //   link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
    // },  
  };
</script>