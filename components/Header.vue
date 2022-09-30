<template>
  <div class="mx-auto max-w-7xl px-4 lg:max-w-7xl lg:px-8 py-4">
    <div class="grid grid-cols-1 md:grid-cols-2 items-center justify-items-stretch">
      <div class="grid justify-items-center md:justify-items-start">
        <img src="blue-svar.png" width="320" />
      </div>
      <div class="group">

        <label class="relative block">
          
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <div class="mdi mdi-24px mdi-store-search text-slate-800"></div>
          </span>
          <input class="text-gray-900 placeholder:text-slate-800 block bg-white w-full border border-slate-300 rounded-sm py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-800 focus:ring-sky-800 sm:text-sm" placeholder="Поиск по товарам..." type="text" name="search"/>
        
        
        
        
        </label>


          <div class="absolute z-40 w-full left-0 invisible group-focus-within:visible hover:visible group-hover:opacity-100">
            <div class="container mt-4">
              <div class="mx-auto py-1 pb-1 px-4 lg:max-w-7xl lg:px-8">
                <div class="search-result bg-white border-gray-200 shadow-sm border dark:bg-gray-800 dark:border-gray-600">
                  
                  <div class="p-3">
                    <p v-for="i in 20" :key="i" class="text-gray-500 dark:text-gray-300">Results:</p>
                  </div>
                  


                </div>
              </div>
            </div>
          </div>

      </div>
      
    </div>
  </div>
</template>