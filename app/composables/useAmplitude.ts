import * as amplitude from '@amplitude/analytics-browser'

// 랜딩 이벤트 추적 헬퍼. 개발 환경에서는 SDK가 초기화되지 않아 자동으로 무시됨.
export function useAmplitude() {
  function track(eventName: string, properties?: Record<string, unknown>) {
    if (import.meta.dev) return
    amplitude.track(eventName, properties)
  }

  return { track }
}
