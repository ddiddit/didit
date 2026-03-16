<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} · Didit` : 'Didit · AI 업무 회고 서비스'
  },
  meta: [
    {
      name: 'description',
      content: 'Didit은 기획자, 개발자, 디자이너를 위한 AI 업무 회고 서비스입니다. 질문 기반 회고, STT 입력, AI 피드백으로 하루를 더 가볍게 정리하세요.',
    },
    { property: 'og:site_name', content: 'Didit' },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'ko_KR' },
    { property: 'og:image', content: 'https://didit.ai.kr/og-image.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: 'https://didit.ai.kr/og-image.png' },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Didit',
        url: 'https://didit.ai.kr',
        description: '질문형 대화와 AI 피드백으로 더 쉬운 업무 회고',
        applicationCategory: 'ProductivityApplication',
        inLanguage: 'ko',
      }),
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>