<template>
  <section id="services" class="py-16 bg-gray-50 text-center">
    <h2 class="text-3xl font-semibold mb-10">Hizmetlerimiz</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
      <div v-for="service in services" :key="service.title" class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
        <component :is="service.icon" class="w-12 h-12 mx-auto text-emerald-600 mb-4" />
        <h3 class="text-xl font-bold mb-2">{{ service.title }}</h3>
        <p class="text-gray-600 text-sm">{{ service.desc }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ShieldCheckIcon, UserGroupIcon, SparklesIcon, HeartIcon, BriefcaseIcon, ChatBubbleLeftRightIcon } from '@heroicons/vue/24/outline'

const services = [
  { icon: ShieldCheckIcon, title: 'Steril Ortam', desc: 'En üst düzey hijyen kurallarına uygun çalışma alanları' },
  { icon: UserGroupIcon, title: 'Uzman Kadro', desc: 'Deneyimli hekimler ve destek ekibi' },
  { icon: SparklesIcon, title: 'Estetik Uygulamalar', desc: 'Diş beyazlatma, bonding ve görünüm odaklı çözümler' },
  { icon: BriefcaseIcon, title: 'İmplantoloji', desc: 'Gelişmiş implant tedavi çözümleri' },
  { icon: HeartIcon, title: 'Çocuk Diş Hekimliği', desc: 'Pedodonti alanında hassas yaklaşım' },
  { icon: ChatBubbleLeftRightIcon, title: 'Hasta Takibi', desc: 'Tedavi sonrası geri bildirim ve destek' },
]
</script>
