<template>
  <section class="py-16 px-4 bg-gray-50 text-center">
    <h2 class="text-3xl font-bold text-gray-800 mb-8">Hizmetlerimiz</h2>
    <div class="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
      <div class="bg-white p-6 rounded shadow" v-for="s in services" :key="s.title">
        <div class="text-4xl mb-2">{{ s.icon }}</div>
        <h3 class="text-xl font-semibold text-blue-700">{{ s.title }}</h3>
        <p class="text-gray-600">{{ s.desc }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  { title: "İmplant", desc: "Eksik dişlere kalıcı çözüm.", icon: "🦷" },
  { title: "Diş Beyazlatma", desc: "Estetik ve doğal gülüşler.", icon: "✨" },
  { title: "Ortodonti", desc: "Diş teli ve şeffaf plak uygulamaları.", icon: "🪥" },
];
</script>
