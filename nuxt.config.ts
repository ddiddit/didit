export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase',
  ],

  supabase: {
    redirect: false,
    redirectOptions: {
      login: '/',
      callback: '/',
      exclude: ['/*'],
    },
    types: false,
  },

  app: {
    head: {
      htmlAttrs: { lang: 'ko' },
      meta: [
        { name: 'keywords', content: '회고, 업무회고, 하루회고, 일일회고, 주간회고, 회고툴, 회고앱, 회고 습관, 회고 방법, 회고 템플릿, 업무 돌아보기, 업무 정리, 하루 정리, 오늘 한 일, 일과 정리, KPT회고, 4L회고, 스타트업 회고, 개발자 회고, 팀 회고, 개인 회고, 생산성, 생산성앱, 생산성 도구, 업무효율, 업무관리, 태스크관리, 자기계발, 루틴관리, 습관형성, 습관앱, didit, 디딧' },
        { name: 'theme-color', content: '#0b0f14' },
        { name: 'robots', content: 'index, follow' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
})