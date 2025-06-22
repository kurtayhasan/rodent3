<template>
  <section class="py-16 bg-gray-50 text-center px-6">
    <h2 class="text-3xl font-semibold mb-10">Klinik Galerisi</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <img v-for="n in 6" :key="n" :src="`/klinik-fotograflari/klinik${n}.jpeg`" alt="Klinik Fotoğrafı" class="rounded shadow" />
    </div>
  </section>
</template>
