<template>
  <section id="main">
    <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">
      <div class="grid grid-cols-6 gap-4">
        
        <div class="col-span-2">
          
        </div>

        <div class="rounded-sm border dark:border-gray-700 col-span-4">
          <img
            class="rounded-sm"
            src="https://api.glsvar.ru/files/img/c/banner/testimg.jpg"
          />
        </div>
        
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      qwe: {
        loop: true,
        perPage: 6,
        paginationEnabled: true,
        paginationColor: "#ffffff",
        paginationEnabled: true
      }
    }
  }
}
</script>
