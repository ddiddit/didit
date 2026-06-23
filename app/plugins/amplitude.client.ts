import * as amplitude from '@amplitude/analytics-browser'

// 랜딩 분석 — 앱과 동일한 Amplitude 프로젝트로 전송.
// 앱 데이터와 구분되도록 랜딩 이벤트는 'landing_' 접두사를 사용.
export default defineNuxtPlugin(() => {
  if (import.meta.dev) return

  const config = useRuntimeConfig()
  const apiKey = config.public.amplitudeApiKey as string
  if (!apiKey) return

  amplitude.init(apiKey, {
    autocapture: false,
    defaultTracking: { sessions: true },
  })

  // 랜딩 페이지뷰 1회 기록
  amplitude.track('landing_page_view', {
    path: window.location.pathname,
    referrer: document.referrer || undefined,
  })
})
