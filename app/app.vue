<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} · didit` : 'didit · AI 업무 회고 서비스'
  },
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'didit',
        url: 'https://didit.ai.kr',
        description: '질문형 대화와 AI 피드백으로 더 쉬운 업무 회고',
        applicationCategory: 'ProductivityApplication',
        inLanguage: 'ko',
      }),
    },
  ],
})

useSeoMeta({
  ogSiteName: 'didit',
  ogType: 'website',
  ogLocale: 'ko_KR',
  ogImage: 'https://didit.ai.kr/og-image.png',
  ogImageWidth: '1200',
  ogImageHeight: '630',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://didit.ai.kr/og-image.png',
})

if (import.meta.client) {
  history.scrollRestoration = 'manual'
}
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>