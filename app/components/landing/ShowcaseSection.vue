<template>
  <section class="bg-[#f8faf9]">
    <div class="mx-auto max-w-7xl px-6 py-24 lg:px-4">
      <div class="max-w-3xl">
        <p class="text-[#3DDB99] label-2 font-semibold">Product Preview</p>
        <h2 class="mt-3 text-slate-900 tracking-tight preview-title font-bold">
          피그마로 먼저 보여주는 didit의 핵심 흐름
        </h2>
        <p class="mt-5 text-slate-600 body-1-reading font-regular">
          홈에서 회고를 시작하고, AI와 대화하며, 결과 카드로 정리되는 흐름을 한눈에 볼 수 있어요.
        </p>
      </div>

      <div class="mt-14 grid gap-8 lg:grid-cols-3">
        <div class="showcase-card">
          <div class="mb-5">
            <p class="text-slate-900 body-2-normal font-semibold">홈</p>
            <p class="text-slate-500 label-2 font-regular">최근 회고와 시작 버튼</p>
          </div>
          <div class="phone-shot">
            <img src="/showcase-home.png" alt="didit 홈 화면" class="h-full w-full object-cover" />
          </div>
        </div>

        <div class="showcase-card showcase-card--featured">
          <div class="mb-5">
            <p class="text-slate-900 body-2-normal font-semibold">회고 챗봇</p>
            <p class="text-slate-500 label-2 font-regular">AI 질문에 답하며 회고 진행</p>
          </div>
          <div class="phone-shot">
            <img src="/showcase-chat.png" alt="didit 회고 챗봇 화면" class="h-full w-full object-cover" />
          </div>
        </div>

        <div class="showcase-card">
          <div class="mb-5">
            <p class="text-slate-900 body-2-normal font-semibold">회고 결과</p>
            <p class="text-slate-500 label-2 font-regular">AI 피드백과 인사이트 확인</p>
          </div>
          <div class="phone-shot">
            <img src="/showcase-result.png" alt="didit 회고 결과 화면" class="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.preview-title {
  font-size: clamp(26px, 4vw, 36px);
  line-height: 1.2;
  letter-spacing: -0.025em;
}

.showcase-card {
  border-radius: 32px;
  background: white;
  padding: 24px;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);
  border: 1px solid rgba(15, 23, 42, 0.06);
}

.showcase-card--featured {
  transform: translateY(-10px);
}

.phone-shot {
  overflow: hidden;
  border-radius: 28px;
  background: #eef2f3;
  aspect-ratio: 9 / 19;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.7);
}
</style>