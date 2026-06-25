// v-section-view="'hero'" — 섹션이 처음 화면에 들어올 때 landing_section_view 1회 기록.
// 스크롤 뎁스(어느 섹션까지 보고 이탈하는지)를 측정해 전환 퍼널을 보강한다.
// mounted/unmounted는 클라이언트에서만 실행되므로 universal 플러그인이어도 안전하다.
export default defineNuxtPlugin((nuxtApp) => {
  const { track } = useAmplitude()

  nuxtApp.vueApp.directive('section-view', {
    mounted(el: HTMLElement & { _sectionViewIO?: IntersectionObserver }, binding) {
      const section = binding.value as string
      const io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              track('landing_section_view', { section })
              io.disconnect()
              break
            }
          }
        },
        { threshold: 0.4 },
      )
      io.observe(el)
      el._sectionViewIO = io
    },
    unmounted(el: HTMLElement & { _sectionViewIO?: IntersectionObserver }) {
      el._sectionViewIO?.disconnect()
    },
  })
})
