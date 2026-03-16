<template>
  <section class="bg-[#f8faf9]">
    <div class="mx-auto max-w-7xl px-6 py-24 lg:px-4">
      <div class="max-w-3xl">
        <p class="text-[#3DDB99] label-2 font-semibold">Features</p>
        <h2 class="mt-3 text-slate-900 how-title font-bold tracking-tight">
          Didit의 핵심 기능
        </h2>
        <p class="mt-5 text-slate-600 body-1-reading font-regular">
          업무 회고를 계속하게 만드는 데 필요한 기능만 먼저 담았습니다.
        </p>
      </div>

      <div class="mt-14 grid gap-6 lg:grid-cols-3">
        <div class="rounded-[28px] bg-white p-7 shadow-sm ring-1 ring-slate-200">
          <div class="mb-5 inline-flex rounded-2xl bg-[#3DDB99]/10 px-3 py-2 text-[#3DDB99] label-2 font-semibold">
            AI Chat
          </div>
          <h3 class="text-slate-900 heading-1 font-semibold">질문 기반 회고 챗봇</h3>
          <p class="mt-3 text-slate-600 body-1-reading font-regular">
            "오늘 어떤 일을 하셨나요?"처럼 자연스러운 질문으로 회고를 쉽게 시작하게 합니다.
          </p>
        </div>

        <div class="rounded-[28px] bg-white p-7 shadow-sm ring-1 ring-slate-200">
          <div class="mb-5 inline-flex rounded-2xl bg-[#3DDB99]/10 px-3 py-2 text-[#3DDB99] label-2 font-semibold">
            STT
          </div>
          <h3 class="text-slate-900 heading-1 font-semibold">말하기 입력 지원</h3>
          <p class="mt-3 text-slate-600 body-1-reading font-regular">
            텍스트 입력이 번거로운 순간에도 음성으로 바로 기록할 수 있어 더 가볍게 회고를 남길 수 있습니다.
          </p>
        </div>

        <div class="rounded-[28px] bg-white p-7 shadow-sm ring-1 ring-slate-200">
          <div class="mb-5 inline-flex rounded-2xl bg-[#3DDB99]/10 px-3 py-2 text-[#3DDB99] label-2 font-semibold">
            Insight
          </div>
          <h3 class="text-slate-900 heading-1 font-semibold">AI 피드백과 인사이트</h3>
          <p class="mt-3 text-slate-600 body-1-reading font-regular">
            단순 기록으로 끝나지 않고, 오늘의 흐름을 정리하고 다음 액션까지 떠올릴 수 있게 도와줍니다.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.how-title {
  font-size: clamp(28px, 4vw, 36px);
  line-height: 1.2;
  letter-spacing: -0.025em;
}
</style>