<template>
  <section class="bg-white py-16 px-4 text-center">
    <h2 class="text-3xl font-bold text-gray-800 mb-10">Klinik Galerisi</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      <img v-for="n in 6" :key="n" :src="`/gallery/klinik${n}.jpeg`" class="rounded-lg shadow-md w-full object-cover" alt="Klinik Görseli">
    </div>
  </section>
</template>