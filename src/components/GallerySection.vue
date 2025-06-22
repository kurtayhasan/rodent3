
<template>
  <section class="py-16 bg-white text-center px-4">
    <h2 class="text-3xl font-semibold mb-8 text-gray-800">Klinik Galerisi</h2>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
      <img v-for="n in 6" :key="n" :src="'/img/klinik' + n + '.jpg'" class="rounded shadow-md" />
    </div>
  </section>
</template>
