<template>
  <section class="py-16 bg-white text-center">
    <h2 class="text-3xl font-bold mb-6">Klinik Görselleri</h2>
    <div class="flex overflow-x-auto space-x-4 px-4">
      <img v-for="i in 5" :key="i" :src="'/img/slider' + i + '.jpg'" class="h-64 w-auto rounded shadow" />
    </div>
  </section>
</template>
