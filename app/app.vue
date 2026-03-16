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
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      property: 'og:title',
      content: 'Didit · AI 업무 회고 서비스',
    },
    {
      property: 'og:description',
      content: '질문형 대화와 AI 피드백으로 더 쉬운 업무 회고를 시작하세요.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:image',
      content: '/og-image.png',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: 'Didit · AI 업무 회고 서비스',
    },
    {
      name: 'twitter:description',
      content: '질문형 대화와 AI 피드백으로 더 쉬운 업무 회고를 시작하세요.',
    },
    {
      name: 'twitter:image',
      content: '/og-image.png',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
  ],
})
</script>

<template>
  <NuxtPage />
</template>