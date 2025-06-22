<template>
  <section class="py-16 px-4 bg-gray-100 text-center">
    <h2 class="text-3xl font-bold mb-6">Galeri</h2>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
      <img v-for="i in 6" :key="i" :src="'/img/gallery' + i + '.jpg'" class="rounded shadow" />
    </div>
  </section>
</template>
