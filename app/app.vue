<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} · 디딧(didit)` : '디딧(didit) · AI 업무 회고 앱'
  },
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: '디딧(didit)',
        alternateName: ['디딧', 'didit'],
        url: 'https://didit.ai.kr',
        description: '디딧(didit)은 질문형 대화와 AI 피드백으로 더 쉽게 쓰는 AI 업무 회고 앱입니다.',
        applicationCategory: 'ProductivityApplication',
        operatingSystem: 'iOS',
        inLanguage: 'ko',
        sameAs: [
          'https://apps.apple.com/kr/app/id6761548843',
          'https://instagram.com/didit.app',
        ],
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