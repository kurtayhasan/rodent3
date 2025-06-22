
<template>
  <section class="py-16 px-4 text-center bg-white">
    <h2 class="text-3xl font-semibold mb-8 text-gray-800">Hizmetlerimiz</h2>
    <div class="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
      <div v-for="service in services" :key="service.title" class="border p-6 rounded-lg shadow-md hover:shadow-xl transition">
        <div class="text-4xl mb-4">{{ service.icon }}</div>
        <h3 class="text-xl font-bold text-blue-700">{{ service.title }}</h3>
        <p class="mt-2 text-gray-600">{{ service.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  { title: "İmplant Tedavisi", description: "Eksik dişlerinizi tamamlamak için kalıcı çözümler.", icon: "🦷" },
  { title: "Diş Beyazlatma", description: "Estetik gülüşler için profesyonel beyazlatma hizmetleri.", icon: "✨" },
  { title: "Ortodonti", description: "Diş teli ve şeffaf plaklarla düzgün diş yapısı.", icon: "🪥" },
]
</script>
