export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap',
  ],

  css: [
      '~/assets/css/fonts.css',
      '~/assets/css/typography.css',
  ],

  runtimeConfig: {
    public: {
      supabaseUrl: '',
      supabaseKey: '',
      // Amplitude — 앱(didit-frontend)과 동일 프로젝트로 전송 (클라이언트 공개키)
      amplitudeApiKey: process.env.NUXT_PUBLIC_AMPLITUDE_API_KEY ?? '2205990dd13997a846fc5a98b6684a72',
    }
  },

  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },

  site: {
    url: 'https://didit.ai.kr',
  },

  app: {
    head: {
      htmlAttrs: { lang: 'ko' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'keywords', content: '회고, 업무회고, 하루회고, 일일회고, 주간회고, 회고툴, 회고앱, 회고 습관, 회고 방법, 회고 템플릿, 업무 돌아보기, 업무 정리, 하루 정리, 오늘 한 일, 일과 정리, KPT회고, 4L회고, 스타트업 회고, 개발자 회고, 팀 회고, 개인 회고, 생산성, 생산성앱, 생산성 도구, 업무효율, 업무관리, 태스크관리, 자기계발, 루틴관리, 습관형성, 습관앱, didit, 디딧' },
        { name: 'theme-color', content: '#0b0f14' },
        { name: 'robots', content: 'index, follow' },
        { name: 'naver-site-verification', content: '8cf70a6f6cd230db8ca3eea7084dffef02f91c6f' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      ],
    },
  },
})